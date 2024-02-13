import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x49f91732e7c9fad3ceb3ca8151b9f1ac157b369d"
);

export default instance;
