import {
  Inject,
  Injectable,
  OnApplicationShutdown,
  OnModuleInit
} from '@nestjs/common'
import { ClientKafka } from '@nestjs/microservices'
import { kafkaConfig } from '@/common/constants/kafka.constants'
import { IKafkaServiceName, IResponseMessagesFromKafka } from '@/common/types/kafka.type'

@Injectable()
export class KafkaService implements OnModuleInit, OnApplicationShutdown {
  constructor(
    @Inject(kafkaConfig.name) private lcdpService: ClientKafka,
  ) { }

  async emitEventByKafka<T extends IKafkaServiceName>(
    serviceName: T,
    topicName: string,
    data: any
  ) {
    switch (serviceName) {
      case 'lcdp-service':
        return await this.emitEvent(this.lcdpService, topicName, {
          data,
          topicName
        })
      default:
        throw new Error(`Unknown service name: ${serviceName}`)
    }
  }

  async onModuleInit() {
    this.lcdpService.subscribeToResponseOf('')
    await this.lcdpService.connect()
  }

  async onApplicationShutdown() {
    await this.lcdpService.close()
  }

  private emitEvent = async (
    clientKafka: ClientKafka,
    topicName: string,
    data: any
  ): Promise<IResponseMessagesFromKafka> => {
    return new Promise<IResponseMessagesFromKafka>((resolve, reject) =>
      clientKafka.send(topicName, data).subscribe({
        next: (result: IResponseMessagesFromKafka) => {
          resolve(result)
        },
        error: (error) => {
          reject(error)
        }
      })
    )
  }
}
