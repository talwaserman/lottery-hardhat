/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC677Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Token__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Basic__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "ERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Receiver__factory>;
    getContractFactory(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkToken__factory>;
    getContractFactory(
      name: "BasicToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicToken__factory>;
    getContractFactory(
      name: "StandardToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StandardToken__factory>;
    getContractFactory(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorInterface__factory>;
    getContractFactory(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV2V3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "LinkTokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenReceiver__factory>;
    getContractFactory(
      name: "MockV3Aggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockV3Aggregator__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Mock__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "Lottery",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lottery__factory>;
    getContractFactory(
      name: "VRFV2ProviderMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFV2ProviderMock__factory>;
    getContractFactory(
      name: "VRFConsumerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerInterface__factory>;
    getContractFactory(
      name: "VRFV2Provider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFV2Provider__factory>;

    getContractAt(
      name: "ERC677Token",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Token>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Basic",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Basic>;
    getContractAt(
      name: "ERC677",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677>;
    getContractAt(
      name: "ERC677Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Receiver>;
    getContractAt(
      name: "LinkToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkToken>;
    getContractAt(
      name: "BasicToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicToken>;
    getContractAt(
      name: "StandardToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.StandardToken>;
    getContractAt(
      name: "AggregatorInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorInterface>;
    getContractAt(
      name: "AggregatorV2V3Interface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV2V3Interface>;
    getContractAt(
      name: "AggregatorV3Interface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "ChainlinkRequestInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkRequestInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "LinkTokenReceiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenReceiver>;
    getContractAt(
      name: "MockV3Aggregator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockV3Aggregator>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "VRFCoordinatorV2Mock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Mock>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "IOwnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "Lottery",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lottery>;
    getContractAt(
      name: "VRFV2ProviderMock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFV2ProviderMock>;
    getContractAt(
      name: "VRFConsumerInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerInterface>;
    getContractAt(
      name: "VRFV2Provider",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFV2Provider>;

    deployContract(
      name: "ERC677Token",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677Token>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Basic",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Basic>;
    deployContract(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677>;
    deployContract(
      name: "ERC677Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677Receiver>;
    deployContract(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkToken>;
    deployContract(
      name: "BasicToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BasicToken>;
    deployContract(
      name: "StandardToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StandardToken>;
    deployContract(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorInterface>;
    deployContract(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV2V3Interface>;
    deployContract(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ChainlinkRequestInterface>;
    deployContract(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "LinkTokenReceiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenReceiver>;
    deployContract(
      name: "MockV3Aggregator",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockV3Aggregator>;
    deployContract(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    deployContract(
      name: "VRFCoordinatorV2Mock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFCoordinatorV2Mock>;
    deployContract(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2>;
    deployContract(
      name: "Lottery",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lottery>;
    deployContract(
      name: "VRFV2ProviderMock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2ProviderMock>;
    deployContract(
      name: "VRFConsumerInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerInterface>;
    deployContract(
      name: "VRFV2Provider",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2Provider>;

    deployContract(
      name: "ERC677Token",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677Token>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "ERC20Basic",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20Basic>;
    deployContract(
      name: "ERC677",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677>;
    deployContract(
      name: "ERC677Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC677Receiver>;
    deployContract(
      name: "LinkToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkToken>;
    deployContract(
      name: "BasicToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BasicToken>;
    deployContract(
      name: "StandardToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StandardToken>;
    deployContract(
      name: "AggregatorInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorInterface>;
    deployContract(
      name: "AggregatorV2V3Interface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV2V3Interface>;
    deployContract(
      name: "AggregatorV3Interface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "ChainlinkRequestInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ChainlinkRequestInterface>;
    deployContract(
      name: "LinkTokenInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "LinkTokenReceiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenReceiver>;
    deployContract(
      name: "MockV3Aggregator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockV3Aggregator>;
    deployContract(
      name: "VRFCoordinatorV2Interface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    deployContract(
      name: "VRFCoordinatorV2Mock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFCoordinatorV2Mock>;
    deployContract(
      name: "ConfirmedOwner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "LinkTokenInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LinkTokenInterface>;
    deployContract(
      name: "VRFConsumerBaseV2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2>;
    deployContract(
      name: "Lottery",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lottery>;
    deployContract(
      name: "VRFV2ProviderMock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2ProviderMock>;
    deployContract(
      name: "VRFConsumerInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerInterface>;
    deployContract(
      name: "VRFV2Provider",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2Provider>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
