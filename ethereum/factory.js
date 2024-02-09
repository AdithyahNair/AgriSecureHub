import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xbf57486a6c374a07f82cf45b489d28dd689849e8"
);

export default instance;
