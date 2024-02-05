import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xd00904db214dc0e91fa7cbe528873b3f518d2b62"
);

export default instance;
