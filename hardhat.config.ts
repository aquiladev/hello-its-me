import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const GWEI = 1000 * 1000 * 1000;

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  networks: {
    zkEvmTestnet: {
      url: "https://rpc.public.zkevm-test.net",
      hardfork: "istanbul",
      blockGasLimit: 8000000,
      gasMultiplier: 5,
      gasPrice: 1 * GWEI,
      chainId: 1442,
      accounts: process.env.TT_TESTNET_PRIVATE_KEY
        ? [process.env.TT_TESTNET_PRIVATE_KEY]
        : undefined,
      timeout: 120000,
    },
    coreTestnet: {
      url: "https://rpc.test.btcs.network",
      hardfork: "istanbul",
      blockGasLimit: 8000000,
      gasMultiplier: 5,
      gasPrice: 1 * GWEI,
      chainId: 1115,
      accounts: process.env.TT_TESTNET_PRIVATE_KEY
        ? [process.env.TT_TESTNET_PRIVATE_KEY]
        : undefined,
      timeout: 120000,
    },
  },
};

export default config;
