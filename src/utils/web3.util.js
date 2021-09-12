import Web3 from "web3";
import { CHAIN_ID, RPC_URL } from "@/env";

const getWeb3 = provider => {
  let web3 = null;
  if (provider && provider.isMetaMask) {
    provider = window.ethereum;
    web3 = new Web3(provider);
  } else if (
    provider &&
    provider.selectedAddress &&
    provider.chainId === CHAIN_ID
  ) {
    web3 = new Web3(provider);
  } else {
    web3 = new Web3(RPC_URL);
  }

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber
      }
    ]
  });
  return web3;
};

export { getWeb3 };
