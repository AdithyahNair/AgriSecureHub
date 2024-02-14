import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xa8afd1b1c8b7a0442a288b525f2e907b6dd960b4"
);

export default instance;
