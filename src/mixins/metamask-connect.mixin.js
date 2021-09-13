import web3Modal from "@/plugins/web3-modal.plugin";
import detectEthereumProvider from "@metamask/detect-provider";
import { getWeb3 } from "@/utils/web3.util";
import { CHAIN_ID } from "@/env";
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      updateWallet: 'wallet/UPDATE_WALLET'
    }),
    async handleConnect() {
      try {
        this.loading = true;
        const isDetected = await detectEthereumProvider();

        if (!isDetected) {
          return this.$notify({
            type: "error",
            title: "Error",
            text: "Please install MetaMask!",
          });
        }

        const provider = await web3Modal.connect();
        const isMatchChain = await this.isMatchChain(provider);

        if (isMatchChain) {
          this.subscriber(provider)
          this.updateWallet({
            provider: {
              isMetaMask: provider.isMetaMask,
              chainId: provider.networkVersion,
              address: provider.selectedAddress,
            },
          })
          return;
        }

        this.switchOrAddChain(provider);
      } catch (error) {
        console.log("Could not get a wallet connection", error);
      } finally {
        this.loading = false;
      }
    },
    switchOrAddChain(provider) {
      provider
        .request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x" + CHAIN_ID.toString(16),
            }
          ],
        })
        .then((receipt) => {
          console.log("--------->receipt: ", receipt);
          setTimeout(() => {
            this.subscriber(provider)
            this.updateWallet({
              provider: {
                isMetaMask: provider.isMetaMask,
                chainId: provider.networkVersion,
                address: provider.selectedAddress,
              },
            })
          }, 1000);
        })
        .catch((err) => {
          console.log("--------->err: ", err);
        });
    },
    async isMatchChain(provider) {
      const web3 = getWeb3(provider);
      const chainId = await web3.eth.chainId();
      return chainId == CHAIN_ID;
    },
    async subscriber(provider) {
      if (!provider.on) {
        return;
      }
      provider.on("accountsChanged", async (accounts) => {
        if (accounts && accounts.length !== 0) {
          this.updateWallet({
            provider: {
              address: accounts[0],
            }
          })
        }

        this.$root.$emit("wallet-change-account");
      });
      provider.on("chainChanged", async (chainId) => {
        
        const data = chainId != ("0x" + CHAIN_ID.toString(16)) ? {
          provider: {
            isMetaMask: false,
            chainId: "",
            address: ""
          },
        } : {
          provider: {
            isMetaMask: provider.isMetaMask,
            chainId: provider.networkVersion,
            address: provider.selectedAddress
          },
        }
        this.updateWallet(data)
        this.$root.$emit("wallet-change-chain");
      });
    },
  },
  mounted() {
    if (web3Modal.cachedProvider) {
      this.handleConnect();
    }
    this.$root.$on("btn-wallet-connect", () => {
      console.log(`btn-wallet-connect:>>`)
      this.handleConnect();
    });
  },
  beforeDestroy() {
    this.$root.$off("btn-wallet-connect");
  },
};
