import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0x25eef05359467b60b5db42d360da41abd1ef6fa4"
);

export default instance;
