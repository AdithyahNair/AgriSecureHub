import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(ContractFactory.interface),
  "0xc9116feead3e66c97809d3234d36e52961e7069c"
);

export default instance;
