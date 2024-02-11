import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x9ead9cb0d2b4ce27da17add9da9def46cdfb144d"
);

export default instance;
