import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x54a1f7fedbcbd72c31a6a84c5eb39024c4da6d4b"
);

export default instance;
