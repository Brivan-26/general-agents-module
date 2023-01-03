import { ethers } from "forta-agent";

export const MAX_USD_VALUE = 500000;

export const wrappedNativeTokens: Record<number, string> = {
  1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  10: "0x4200000000000000000000000000000000000006",
  56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  137: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  43114: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
};

export const PREPARATION_BOT = ["0x0b241032ca430d9c02eaa6a52d217bbff046f0d1b3f3d2aa928e42a97150ec91"]; // suspicious contract creation
export const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

export const ZERO = ethers.constants.Zero;
export const ERC20_TRANSFER_EVENT = "event Transfer(address indexed from, address indexed to, uint256 value)";
export const WRAPPED_NATIVE_TOKEN_EVENTS = [
  "event Deposit(address indexed to, uint256 value)",
  "event Withdrawal(address indexed from, uint256 value)",
];

export const TOKEN_ABI = [
  "function balanceOf(address account) external view returns (uint256)",
  "function symbol() external view returns (string)",
  "function name() public view returns (string)",
  "function decimals() external view returns (uint8)",
  "function totalSupply() external view returns (uint256)",
];

export const MKR_TOKEN_ABI = ["function symbol() external view returns (bytes32)"];
