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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface PancakeFactoryV3Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "collectProtocol"
      | "createPool"
      | "enableFeeAmount"
      | "feeAmountTickSpacing"
      | "feeAmountTickSpacingExtraInfo"
      | "getPool"
      | "lmPoolDeployer"
      | "owner"
      | "poolDeployer"
      | "setFeeAmountExtraInfo"
      | "setFeeProtocol"
      | "setLmPool"
      | "setLmPoolDeployer"
      | "setOwner"
      | "setWhiteListAddress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeeAmountEnabled"
      | "FeeAmountExtraInfoUpdated"
      | "OwnerChanged"
      | "PoolCreated"
      | "SetLmPoolDeployer"
      | "WhiteListAdded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "collectProtocol",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enableFeeAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeAmountTickSpacing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeAmountTickSpacingExtraInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lmPoolDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeAmountExtraInfo",
    values: [BigNumberish, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLmPool",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setLmPoolDeployer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhiteListAddress",
    values: [AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "collectProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enableFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeAmountTickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeAmountTickSpacingExtraInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lmPoolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAmountExtraInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLmPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLmPoolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWhiteListAddress",
    data: BytesLike
  ): Result;
}

export namespace FeeAmountEnabledEvent {
  export type InputTuple = [fee: BigNumberish, tickSpacing: BigNumberish];
  export type OutputTuple = [fee: bigint, tickSpacing: bigint];
  export interface OutputObject {
    fee: bigint;
    tickSpacing: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeAmountExtraInfoUpdatedEvent {
  export type InputTuple = [
    fee: BigNumberish,
    whitelistRequested: boolean,
    enabled: boolean
  ];
  export type OutputTuple = [
    fee: bigint,
    whitelistRequested: boolean,
    enabled: boolean
  ];
  export interface OutputObject {
    fee: bigint;
    whitelistRequested: boolean;
    enabled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerChangedEvent {
  export type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [oldOwner: string, newOwner: string];
  export interface OutputObject {
    oldOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolCreatedEvent {
  export type InputTuple = [
    token0: AddressLike,
    token1: AddressLike,
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    pool: AddressLike
  ];
  export type OutputTuple = [
    token0: string,
    token1: string,
    fee: bigint,
    tickSpacing: bigint,
    pool: string
  ];
  export interface OutputObject {
    token0: string;
    token1: string;
    fee: bigint;
    tickSpacing: bigint;
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetLmPoolDeployerEvent {
  export type InputTuple = [lmPoolDeployer: AddressLike];
  export type OutputTuple = [lmPoolDeployer: string];
  export interface OutputObject {
    lmPoolDeployer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhiteListAddedEvent {
  export type InputTuple = [user: AddressLike, verified: boolean];
  export type OutputTuple = [user: string, verified: boolean];
  export interface OutputObject {
    user: string;
    verified: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PancakeFactoryV3 extends BaseContract {
  connect(runner?: ContractRunner | null): PancakeFactoryV3;
  waitForDeployment(): Promise<this>;

  interface: PancakeFactoryV3Interface;

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

  collectProtocol: TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish
    ],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "nonpayable"
  >;

  createPool: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, fee: BigNumberish],
    [string],
    "nonpayable"
  >;

  enableFeeAmount: TypedContractMethod<
    [fee: BigNumberish, tickSpacing: BigNumberish],
    [void],
    "nonpayable"
  >;

  feeAmountTickSpacing: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  feeAmountTickSpacingExtraInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { whitelistRequested: boolean; enabled: boolean }],
    "view"
  >;

  getPool: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [string],
    "view"
  >;

  lmPoolDeployer: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  poolDeployer: TypedContractMethod<[], [string], "view">;

  setFeeAmountExtraInfo: TypedContractMethod<
    [fee: BigNumberish, whitelistRequested: boolean, enabled: boolean],
    [void],
    "nonpayable"
  >;

  setFeeProtocol: TypedContractMethod<
    [pool: AddressLike, feeProtocol0: BigNumberish, feeProtocol1: BigNumberish],
    [void],
    "nonpayable"
  >;

  setLmPool: TypedContractMethod<
    [pool: AddressLike, lmPool: AddressLike],
    [void],
    "nonpayable"
  >;

  setLmPoolDeployer: TypedContractMethod<
    [_lmPoolDeployer: AddressLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;

  setWhiteListAddress: TypedContractMethod<
    [user: AddressLike, verified: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "collectProtocol"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      recipient: AddressLike,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish
    ],
    [[bigint, bigint] & { amount0: bigint; amount1: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createPool"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, fee: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "enableFeeAmount"
  ): TypedContractMethod<
    [fee: BigNumberish, tickSpacing: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "feeAmountTickSpacing"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeAmountTickSpacingExtraInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[boolean, boolean] & { whitelistRequested: boolean; enabled: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPool"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "lmPoolDeployer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolDeployer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setFeeAmountExtraInfo"
  ): TypedContractMethod<
    [fee: BigNumberish, whitelistRequested: boolean, enabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFeeProtocol"
  ): TypedContractMethod<
    [pool: AddressLike, feeProtocol0: BigNumberish, feeProtocol1: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLmPool"
  ): TypedContractMethod<
    [pool: AddressLike, lmPool: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLmPoolDeployer"
  ): TypedContractMethod<[_lmPoolDeployer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setWhiteListAddress"
  ): TypedContractMethod<
    [user: AddressLike, verified: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "FeeAmountEnabled"
  ): TypedContractEvent<
    FeeAmountEnabledEvent.InputTuple,
    FeeAmountEnabledEvent.OutputTuple,
    FeeAmountEnabledEvent.OutputObject
  >;
  getEvent(
    key: "FeeAmountExtraInfoUpdated"
  ): TypedContractEvent<
    FeeAmountExtraInfoUpdatedEvent.InputTuple,
    FeeAmountExtraInfoUpdatedEvent.OutputTuple,
    FeeAmountExtraInfoUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerChanged"
  ): TypedContractEvent<
    OwnerChangedEvent.InputTuple,
    OwnerChangedEvent.OutputTuple,
    OwnerChangedEvent.OutputObject
  >;
  getEvent(
    key: "PoolCreated"
  ): TypedContractEvent<
    PoolCreatedEvent.InputTuple,
    PoolCreatedEvent.OutputTuple,
    PoolCreatedEvent.OutputObject
  >;
  getEvent(
    key: "SetLmPoolDeployer"
  ): TypedContractEvent<
    SetLmPoolDeployerEvent.InputTuple,
    SetLmPoolDeployerEvent.OutputTuple,
    SetLmPoolDeployerEvent.OutputObject
  >;
  getEvent(
    key: "WhiteListAdded"
  ): TypedContractEvent<
    WhiteListAddedEvent.InputTuple,
    WhiteListAddedEvent.OutputTuple,
    WhiteListAddedEvent.OutputObject
  >;

  filters: {
    "FeeAmountEnabled(uint24,int24)": TypedContractEvent<
      FeeAmountEnabledEvent.InputTuple,
      FeeAmountEnabledEvent.OutputTuple,
      FeeAmountEnabledEvent.OutputObject
    >;
    FeeAmountEnabled: TypedContractEvent<
      FeeAmountEnabledEvent.InputTuple,
      FeeAmountEnabledEvent.OutputTuple,
      FeeAmountEnabledEvent.OutputObject
    >;

    "FeeAmountExtraInfoUpdated(uint24,bool,bool)": TypedContractEvent<
      FeeAmountExtraInfoUpdatedEvent.InputTuple,
      FeeAmountExtraInfoUpdatedEvent.OutputTuple,
      FeeAmountExtraInfoUpdatedEvent.OutputObject
    >;
    FeeAmountExtraInfoUpdated: TypedContractEvent<
      FeeAmountExtraInfoUpdatedEvent.InputTuple,
      FeeAmountExtraInfoUpdatedEvent.OutputTuple,
      FeeAmountExtraInfoUpdatedEvent.OutputObject
    >;

    "OwnerChanged(address,address)": TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
    OwnerChanged: TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;

    "PoolCreated(address,address,uint24,int24,address)": TypedContractEvent<
      PoolCreatedEvent.InputTuple,
      PoolCreatedEvent.OutputTuple,
      PoolCreatedEvent.OutputObject
    >;
    PoolCreated: TypedContractEvent<
      PoolCreatedEvent.InputTuple,
      PoolCreatedEvent.OutputTuple,
      PoolCreatedEvent.OutputObject
    >;

    "SetLmPoolDeployer(address)": TypedContractEvent<
      SetLmPoolDeployerEvent.InputTuple,
      SetLmPoolDeployerEvent.OutputTuple,
      SetLmPoolDeployerEvent.OutputObject
    >;
    SetLmPoolDeployer: TypedContractEvent<
      SetLmPoolDeployerEvent.InputTuple,
      SetLmPoolDeployerEvent.OutputTuple,
      SetLmPoolDeployerEvent.OutputObject
    >;

    "WhiteListAdded(address,bool)": TypedContractEvent<
      WhiteListAddedEvent.InputTuple,
      WhiteListAddedEvent.OutputTuple,
      WhiteListAddedEvent.OutputObject
    >;
    WhiteListAdded: TypedContractEvent<
      WhiteListAddedEvent.InputTuple,
      WhiteListAddedEvent.OutputTuple,
      WhiteListAddedEvent.OutputObject
    >;
  };
}
