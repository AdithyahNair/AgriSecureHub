import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x396eb7e8370A6dA3e7662DcACC5044Ec20a99C1D"
);

export default instance;
