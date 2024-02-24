import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xe4cd0ae9f3af40a6cb7ad01d1b18c103df46f002"
);

export default instance;
