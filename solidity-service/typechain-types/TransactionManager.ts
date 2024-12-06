/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace TransactionManager {
  export type TransactionStruct = {
    transaction_code: string;
    amount: BigNumberish;
    direction: string;
    datetime: BigNumberish;
  };

  export type TransactionStructOutput = [
    transaction_code: string,
    amount: bigint,
    direction: string,
    datetime: bigint
  ] & {
    transaction_code: string;
    amount: bigint;
    direction: string;
    datetime: bigint;
  };
}

export interface TransactionManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "createTransaction" | "getAllTransactions" | "transactions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTransaction",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;
}

export interface TransactionManager extends BaseContract {
  connect(runner?: ContractRunner | null): TransactionManager;
  waitForDeployment(): Promise<this>;

  interface: TransactionManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createTransaction: TypedContractMethod<
    [_transaction_code: string, _amount: BigNumberish, _direction: string],
    [void],
    "nonpayable"
  >;

  getAllTransactions: TypedContractMethod<
    [],
    [TransactionManager.TransactionStructOutput[]],
    "view"
  >;

  transactions: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, string, bigint] & {
        transaction_code: string;
        amount: bigint;
        direction: string;
        datetime: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createTransaction"
  ): TypedContractMethod<
    [_transaction_code: string, _amount: BigNumberish, _direction: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllTransactions"
  ): TypedContractMethod<
    [],
    [TransactionManager.TransactionStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "transactions"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, string, bigint] & {
        transaction_code: string;
        amount: bigint;
        direction: string;
        datetime: bigint;
      }
    ],
    "view"
  >;

  filters: {};
}