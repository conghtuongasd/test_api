/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BridgeRouter, BridgeRouterInterface } from "../BridgeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BridgeRouter__factory {
  static readonly abi = _abi;
  static createInterface(): BridgeRouterInterface {
    return new utils.Interface(_abi) as BridgeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeRouter {
    return new Contract(address, _abi, signerOrProvider) as BridgeRouter;
  }
}
