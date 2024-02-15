import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x71708e04c9fbcb5e2040f420e8a3bde9ab4edece"
);

export default instance;
