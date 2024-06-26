const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");

const provider = new HDWalletProvider({
  mnemonic:
    "explain milk twice aisle salmon wife garden winter lab crew rocket oxygen",
  providerOrUrl:
    "https://sepolia.infura.io/v3/0b686b82f16249eb965f027541328f36",
});

const web3 = new Web3(provider);
const compiledFactory = require("../ethereum/build/ContractFactory.json");

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Address of the campaignFactory: ", result.options.address);
  // provider.engine.stop();
};
deploy();
