import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    hardhat:{
      forking:{
        url:`Alchemy url`
      }
    }
  }
};

export default config;
