import Web3Modal from "web3modal";

const providerOptions = {}
export default new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
  disableInjectedProvider: false // optional. For MetaMask / Brave / Opera.
});
