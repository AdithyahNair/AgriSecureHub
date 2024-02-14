import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x44008dfb818b1286f8c6178c94e61864c5efc049"
);

export default instance;
