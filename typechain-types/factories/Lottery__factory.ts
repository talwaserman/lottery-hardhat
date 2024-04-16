/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "closeTime",
        type: "uint256",
      },
    ],
    name: "emitLotteryCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "joinerAddress",
        type: "address",
      },
    ],
    name: "emitLotteryJoined",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "checkIfIWonTheLottery",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "checkIfLotteryIsLiveById",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "checkLotteryPrize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTimeInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimeInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "winingNumbers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "limitOfJoiners",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "chainType",
        type: "string",
      },
    ],
    name: "createNewLottery",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLotteries",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "winningPrize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "joinedCounter",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "chainType",
            type: "string",
          },
        ],
        internalType: "struct Lottery.LottryContestLite[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "getLotteryPrize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "getNumberOfJoinersForLotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
    ],
    name: "getUserTicketForLottery",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lotteryId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "numbers",
            type: "uint256[]",
          },
        ],
        internalType: "struct Lottery.LotteryTicket",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserTickets",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "numbers",
        type: "uint256[]",
      },
    ],
    name: "joinLottery",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lotteryId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "numbers",
            type: "uint256[]",
          },
        ],
        internalType: "struct Lottery.LotteryTicket",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805533600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612b34806100586000396000f3fe6080604052600436106100a75760003560e01c80634b47195d116100645780634b47195d146101a75780636f9fb98a146101e457806389c6fc0b1461020f578063bcc82ec41461024c578063f33ce32514610277578063ff7609ea146102b4576100a7565b8063093c69ae146100ac5780631923f7fe146100d75780631c69b464146100f35780632ce9a5d2146100fd5780633063bcd31461013a5780633ebf705014610177575b600080fd5b3480156100b857600080fd5b506100c16102e4565b6040516100ce9190611944565b60405180910390f35b6100f160048036038101906100ec91906119a6565b61037c565b005b6100fb610525565b005b34801561010957600080fd5b50610124600480360381019061011f91906119a6565b6105fe565b60405161013191906119ee565b60405180910390f35b34801561014657600080fd5b50610161600480360381019061015c91906119a6565b6107d3565b60405161016e9190611b09565b60405180910390f35b610191600480360381019061018c9190611c84565b6108f8565b60405161019e9190611b09565b60405180910390f35b3480156101b357600080fd5b506101ce60048036038101906101c991906119a6565b610d71565b6040516101db9190611cef565b60405180910390f35b3480156101f057600080fd5b506101f9610d8c565b6040516102069190611cef565b60405180910390f35b34801561021b57600080fd5b50610236600480360381019061023191906119a6565b610d94565b60405161024391906119ee565b60405180910390f35b34801561025857600080fd5b50610261610e50565b60405161026e9190611ed4565b60405180910390f35b34801561028357600080fd5b5061029e600480360381019061029991906119a6565b61108b565b6040516102ab9190611cef565b60405180910390f35b6102ce60048036038101906102c99190611fab565b611144565b6040516102db91906119ee565b60405180910390f35b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010180548060200260200160405190810160405280929190818152602001828054801561037257602002820191906000526020600020905b81548152602001906001019080831161035e575b5050505050905090565b806000805b6003805490508110156103d65782600382815481106103a3576103a261205e565b5b90600052602060002090600a020160000154036103c357600191506103d6565b80806103ce906120bc565b915050610381565b5080610417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040e90612161565b60405180910390fd5b600061042284611401565b905061042d84610d94565b1561046d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610464906121f3565b60405180910390fd5b6000816101000151116104b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ac90612285565b60405180910390fd5b6104be846105fe565b1561051f573373ffffffffffffffffffffffffffffffffffffffff166108fc82610100015183602001516104f291906122d4565b9081150290604051600060405180830381858888f1935050505015801561051d573d6000803e3d6000fd5b505b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90612377565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156105fb573d6000803e3d6000fd5b50565b6000816000805b60038054905081101561065a5782600382815481106106275761062661205e565b5b90600052602060002090600a02016000015403610647576001915061065a565b8080610652906120bc565b915050610605565b508061069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069290612161565b60405180910390fd5b6000806106a786611401565b90506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000016000898152602001908152602001600020600101541015610748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073f906123e3565b60405180910390fd5b6107bc8160000160008981526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156107ad57602002820191906000526020600020905b815481526020019060010190808311610799575b50505050508360800151611625565b156107c657600192505b8295505050505050919050565b6107db61173c565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282018054806020026020016040519081016040528092919081815260200182805480156108e857602002820191906000526020600020905b8154815260200190600101908083116108d4575b5050505050815250509050919050565b61090061173c565b826000805b60038054905081101561095a5782600382815481106109275761092661205e565b5b90600052602060002090600a02016000015403610947576001915061095a565b8080610952906120bc565b915050610905565b508061099b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099290612161565b60405180910390fd5b66038d7ea4c6800034146109e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109db9061244f565b60405180910390fd5b6004845114610a28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1f906124bb565b60405180910390fd5b6000610a3386611401565b9050610a3e86610d94565b610a7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a749061254d565b60405180910390fd5b8060e001518160c0015111610ac7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abe906125df565b60405180910390fd5b610ad0866116a9565b610ade858260800151611625565b15610b705760005b600380549050811015610b6e578660038281548110610b0857610b0761205e565b5b90600052602060002090600a02016000015403610b5b5760038181548110610b3357610b3261205e565b5b90600052602060002090600a02016008016000815480929190610b55906120bc565b91905055505b8080610b66906120bc565b915050610ae6565b505b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000160008981526020019081526020016000209050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087816001018190555086816002019080519060200190610c30929190611773565b50816001018890806001815401808255809150506001900390600052602060002001600090919091909150553373ffffffffffffffffffffffffffffffffffffffff16887f45a2d3390675537ac2527c0ccc0a41148a7ea28d2b391b8516d9ed81fb2d5eb660405160405180910390a3806040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201805480602002602001604051908101604052809291908181526020018280548015610d5b57602002820191906000526020600020905b815481526020019060010190808311610d47575b5050505050815250509550505050505092915050565b600080610d7d83611401565b90508060e00151915050919050565b600047905090565b6000816000805b600380549050811015610df0578260038281548110610dbd57610dbc61205e565b5b90600052602060002090600a02016000015403610ddd5760019150610df0565b8080610de8906120bc565b915050610d9b565b5080610e31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2890612161565b60405180910390fd5b6000610e3c85611401565b905042816060015110159350505050919050565b6060600060038054905067ffffffffffffffff811115610e7357610e72611b41565b5b604051908082528060200260200182016040528015610eac57816020015b610e996117c0565b815260200190600190039081610e915790505b50905060005b600380549050811015611083576040518060c0016040528060038381548110610ede57610edd61205e565b5b90600052602060002090600a020160000154815260200160038381548110610f0957610f0861205e565b5b90600052602060002090600a020160010154815260200160038381548110610f3457610f3361205e565b5b90600052602060002090600a020160020154815260200160038381548110610f5f57610f5e61205e565b5b90600052602060002090600a020160030154815260200160038381548110610f8a57610f8961205e565b5b90600052602060002090600a020160070154815260200160038381548110610fb557610fb461205e565b5b90600052602060002090600a02016009018054610fd19061262e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ffd9061262e565b801561104a5780601f1061101f5761010080835404028352916020019161104a565b820191906000526020600020905b81548152906001019060200180831161102d57829003601f168201915b50505050508152508282815181106110655761106461205e565b5b6020026020010181905250808061107b906120bc565b915050610eb2565b508091505090565b6000816000805b6003805490508110156110e75782600382815481106110b4576110b361205e565b5b90600052602060002090600a020160000154036110d457600191506110e7565b80806110df906120bc565b915050611092565b5080611128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111f90612161565b60405180910390fd5b600061113385611401565b905080602001519350505050919050565b6000600484511461118a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611181906126d1565b60405180910390fd5b6000670de0b6b3a7640000346111a091906126f1565b90506000662386f26fc100009050808210156111f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e8906127a5565b60405180910390fd5b878711611233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122a90612837565b60405180910390fd5b600080815480929190611245906120bc565b9190505550600060405180610140016040528060005481526020013481526020018a81526020018981526020018881526020013373ffffffffffffffffffffffffffffffffffffffff168152602001878152602001600081526020016000815260200186815250905060038190806001815401808255809150506001900390600052602060002090600a020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030155608082015181600401908051906020019061131e929190611773565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c0820151816006015560e08201518160070155610100820151816008015561012082015181600901908161139b9190612a03565b5050503373ffffffffffffffffffffffffffffffffffffffff166000547f9ab780a1971d1f2d93af01a733af9292e40d145ca56fe587993a6446d76d9bed8b8b6040516113e9929190612ad5565b60405180910390a36001935050505095945050505050565b6114096117f6565b6114116117f6565b60005b60038054905081101561161b5783600382815481106114365761143561205e565b5b90600052602060002090600a0201600001540361160857600381815481106114615761146061205e565b5b90600052602060002090600a02016040518061014001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482018054806020026020016040519081016040528092919081815260200182805480156114f257602002820191906000526020600020905b8154815260200190600101908083116114de575b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160068201548152602001600782015481526020016008820154815260200160098201805461157f9061262e565b80601f01602080910402602001604051908101604052809291908181526020018280546115ab9061262e565b80156115f85780601f106115cd576101008083540402835291602001916115f8565b820191906000526020600020905b8154815290600101906020018083116115db57829003601f168201915b505050505081525050915061161b565b8080611613906120bc565b915050611414565b5080915050919050565b6000815183511461163957600090506116a3565b60005b835181101561169d578281815181106116585761165761205e565b5b60200260200101518482815181106116735761167261205e565b5b60200260200101511461168a5760009150506116a3565b8080611695906120bc565b91505061163c565b50600190505b92915050565b60005b6003805490508110156117385781600382815481106116ce576116cd61205e565b5b90600052602060002090600a0201600001540361172557600381815481106116f9576116f861205e565b5b90600052602060002090600a0201600701600081548092919061171b906120bc565b9190505550611738565b8080611730906120bc565b9150506116ac565b5050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081525090565b8280548282559060005260206000209081019282156117af579160200282015b828111156117ae578251825591602001919060010190611793565b5b5090506117bc919061185f565b5090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001606081525090565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001606081525090565b5b80821115611878576000816000905550600101611860565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b6118bb816118a8565b82525050565b60006118cd83836118b2565b60208301905092915050565b6000602082019050919050565b60006118f18261187c565b6118fb8185611887565b935061190683611898565b8060005b8381101561193757815161191e88826118c1565b9750611929836118d9565b92505060018101905061190a565b5085935050505092915050565b6000602082019050818103600083015261195e81846118e6565b905092915050565b6000604051905090565b600080fd5b600080fd5b611983816118a8565b811461198e57600080fd5b50565b6000813590506119a08161197a565b92915050565b6000602082840312156119bc576119bb611970565b5b60006119ca84828501611991565b91505092915050565b60008115159050919050565b6119e8816119d3565b82525050565b6000602082019050611a0360008301846119df565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a3482611a09565b9050919050565b611a4481611a29565b82525050565b600082825260208201905092915050565b6000611a668261187c565b611a708185611a4a565b9350611a7b83611898565b8060005b83811015611aac578151611a9388826118c1565b9750611a9e836118d9565b925050600181019050611a7f565b5085935050505092915050565b6000606083016000830151611ad16000860182611a3b565b506020830151611ae460208601826118b2565b5060408301518482036040860152611afc8282611a5b565b9150508091505092915050565b60006020820190508181036000830152611b238184611ab9565b905092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b7982611b30565b810181811067ffffffffffffffff82111715611b9857611b97611b41565b5b80604052505050565b6000611bab611966565b9050611bb78282611b70565b919050565b600067ffffffffffffffff821115611bd757611bd6611b41565b5b602082029050602081019050919050565b600080fd5b6000611c00611bfb84611bbc565b611ba1565b90508083825260208201905060208402830185811115611c2357611c22611be8565b5b835b81811015611c4c5780611c388882611991565b845260208401935050602081019050611c25565b5050509392505050565b600082601f830112611c6b57611c6a611b2b565b5b8135611c7b848260208601611bed565b91505092915050565b60008060408385031215611c9b57611c9a611970565b5b6000611ca985828601611991565b925050602083013567ffffffffffffffff811115611cca57611cc9611975565b5b611cd685828601611c56565b9150509250929050565b611ce9816118a8565b82525050565b6000602082019050611d046000830184611ce0565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d70578082015181840152602081019050611d55565b60008484015250505050565b6000611d8782611d36565b611d918185611d41565b9350611da1818560208601611d52565b611daa81611b30565b840191505092915050565b600060c083016000830151611dcd60008601826118b2565b506020830151611de060208601826118b2565b506040830151611df360408601826118b2565b506060830151611e0660608601826118b2565b506080830151611e1960808601826118b2565b5060a083015184820360a0860152611e318282611d7c565b9150508091505092915050565b6000611e4a8383611db5565b905092915050565b6000602082019050919050565b6000611e6a82611d0a565b611e748185611d15565b935083602082028501611e8685611d26565b8060005b85811015611ec25784840389528151611ea38582611e3e565b9450611eae83611e52565b925060208a01995050600181019050611e8a565b50829750879550505050505092915050565b60006020820190508181036000830152611eee8184611e5f565b905092915050565b600080fd5b600067ffffffffffffffff821115611f1657611f15611b41565b5b611f1f82611b30565b9050602081019050919050565b82818337600083830152505050565b6000611f4e611f4984611efb565b611ba1565b905082815260208101848484011115611f6a57611f69611ef6565b5b611f75848285611f2c565b509392505050565b600082601f830112611f9257611f91611b2b565b5b8135611fa2848260208601611f3b565b91505092915050565b600080600080600060a08688031215611fc757611fc6611970565b5b6000611fd588828901611991565b9550506020611fe688828901611991565b945050604086013567ffffffffffffffff81111561200757612006611975565b5b61201388828901611c56565b935050606061202488828901611991565b925050608086013567ffffffffffffffff81111561204557612044611975565b5b61205188828901611f7d565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120c7826118a8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120f9576120f861208d565b5b600182019050919050565b600082825260208201905092915050565b7f4c6f747465727920646f6573206e6f7420657869737400000000000000000000600082015250565b600061214b601683612104565b915061215682612115565b602082019050919050565b6000602082019050818103600083015261217a8161213e565b9050919050565b7f5769746864726177206f662066756e647320697320616c6c6f7765642061667460008201527f6572206c6f747465727920697320636c6f736564000000000000000000000000602082015250565b60006121dd603483612104565b91506121e882612181565b604082019050919050565b6000602082019050818103600083015261220c816121d0565b9050919050565b7f546865726520617265206e6f2077696e6e65727320746f2074686973206c6f7460008201527f7465727900000000000000000000000000000000000000000000000000000000602082015250565b600061226f602483612104565b915061227a82612213565b604082019050919050565b6000602082019050818103600083015261229e81612262565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006122df826118a8565b91506122ea836118a8565b9250826122fa576122f96122a5565b5b828204905092915050565b7f54686973206f7065726174696f6e20697320616c6c6f776564206f6e6c79206260008201527f79207468652063726561746f72206f662074686520636f6e7472616374000000602082015250565b6000612361603d83612104565b915061236c82612305565b604082019050919050565b6000602082019050818103600083015261239081612354565b9050919050565b7f7573657220646964206e6f74206a6f696e2074686174206c6f74746572790000600082015250565b60006123cd601e83612104565b91506123d882612397565b602082019050919050565b600060208201905081810360008301526123fc816123c0565b9050919050565b7f6c6f7474657279207469636b657420636f73747320302e303031206574686572600082015250565b6000612439602083612104565b915061244482612403565b602082019050919050565b600060208201905081810360008301526124688161242c565b9050919050565b7f796f752073686f756c6420686176652034206e756d6265727300000000000000600082015250565b60006124a5601983612104565b91506124b08261246f565b602082019050919050565b600060208201905081810360008301526124d481612498565b9050919050565b7f6c6f74746572696573207468617420617265206e6f74206c6976652063616e2760008201527f74206265206a6f696e6564000000000000000000000000000000000000000000602082015250565b6000612537602b83612104565b9150612542826124db565b604082019050919050565b600060208201905081810360008301526125668161252a565b9050919050565b7f6c696d6974206f66206a6f696e65727320666f722074686973206c6f7474657260008201527f7920776173207265616368656400000000000000000000000000000000000000602082015250565b60006125c9602d83612104565b91506125d48261256d565b604082019050919050565b600060208201905081810360008301526125f8816125bc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061264657607f821691505b602082108103612659576126586125ff565b5b50919050565b7f77696e6e696e67206e756d626572206c656e6774682073686f756c642062652060008201527f3400000000000000000000000000000000000000000000000000000000000000602082015250565b60006126bb602183612104565b91506126c68261265f565b604082019050919050565b600060208201905081810360008301526126ea816126ae565b9050919050565b60006126fc826118a8565b9150612707836118a8565b9250828202612715816118a8565b9150828204841483151761272c5761272b61208d565b5b5092915050565b7f76616c75652073686f756c642062652067726561746572207468656e20302e3060008201527f3100000000000000000000000000000000000000000000000000000000000000602082015250565b600061278f602183612104565b915061279a82612733565b604082019050919050565b600060208201905081810360008301526127be81612782565b9050919050565b7f73746172742074696d652073686f756c6420626520736d616c6c65722074686560008201527f6e20656e642074696d6500000000000000000000000000000000000000000000602082015250565b6000612821602a83612104565b915061282c826127c5565b604082019050919050565b6000602082019050818103600083015261285081612814565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026128b97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261287c565b6128c3868361287c565b95508019841693508086168417925050509392505050565b6000819050919050565b60006129006128fb6128f6846118a8565b6128db565b6118a8565b9050919050565b6000819050919050565b61291a836128e5565b61292e61292682612907565b848454612889565b825550505050565b600090565b612943612936565b61294e818484612911565b505050565b5b818110156129725761296760008261293b565b600181019050612954565b5050565b601f8211156129b75761298881612857565b6129918461286c565b810160208510156129a0578190505b6129b46129ac8561286c565b830182612953565b50505b505050565b600082821c905092915050565b60006129da600019846008026129bc565b1980831691505092915050565b60006129f383836129c9565b9150826002028217905092915050565b612a0c82611d36565b67ffffffffffffffff811115612a2557612a24611b41565b5b612a2f825461262e565b612a3a828285612976565b600060209050601f831160018114612a6d5760008415612a5b578287015190505b612a6585826129e7565b865550612acd565b601f198416612a7b86612857565b60005b82811015612aa357848901518255600182019150602085019450602081019050612a7e565b86831015612ac05784890151612abc601f8916826129c9565b8355505b6001600288020188555050505b505050505050565b6000604082019050612aea6000830185611ce0565b612af76020830184611ce0565b939250505056fea2646970667358221220a3a333c72210fe2b18363b55674f339d2f34177a60db1e10b3f629804474747064736f6c63430008140033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: PayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Lottery & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lottery__factory {
    return super.connect(runner) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new Interface(_abi) as LotteryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lottery {
    return new Contract(address, _abi, runner) as unknown as Lottery;
  }
}
