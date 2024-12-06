import { Plugin } from '@nocobase/client';
export declare class KafkaNocobaseClient extends Plugin {
    afterAdd(): Promise<void>;
    beforeLoad(): Promise<void>;
    load(): Promise<void>;
}
export default KafkaNocobaseClient;