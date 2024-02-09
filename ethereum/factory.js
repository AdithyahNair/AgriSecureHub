import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xcbcae8dce9b492ca144313ef3ae95aa499946848"
);

export default instance;
