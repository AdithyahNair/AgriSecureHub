import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xf138ab56765193803e42b2afe7e39dc8964eb735"
);

export default instance;
