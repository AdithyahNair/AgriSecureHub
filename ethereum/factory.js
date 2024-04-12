import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xf70a0db15b5c591b46167455646c3a4567d6738c"
);

export default instance;
