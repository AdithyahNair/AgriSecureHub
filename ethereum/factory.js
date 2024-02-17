import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x00c484e1d1f42a8b7043bba939e86d458c06dc87"
);

export default instance;
