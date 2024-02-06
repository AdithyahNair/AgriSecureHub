import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x456f4882Eddec9846C8f3b3Ae68b3B3470AAb965"
);

export default instance;
