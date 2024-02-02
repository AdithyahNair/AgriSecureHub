import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x8c66f02686aa2e3fddb40d1a716026b51f9d1bf9"
);

export default instance;
