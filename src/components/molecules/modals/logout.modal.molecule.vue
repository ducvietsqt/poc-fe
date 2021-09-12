<template>
  <modal
    name="modal-logout"
    id="modal-logout"
    height="auto"
    :reset="true"
    classes="rounded-lg"
    width="90%"
    :maxWidth="520"
    :adaptive="true"
  >
    <div
      class="
        py-3.5
        px-6
        border-0 border-b border-solid border-purple
        flex
        justify-between
        items-center
      "
    >
      <span class="text-xl text-gray-9 font-semibold"> Your wallet </span>
      <a @click="handleCancel">
        <AtomCloseIcon
          class="text-sm text-purple cursor-pointer hover:opacity-70"
        />
      </a>
    </div>
    <div class="p-6">
      <div v-if="address">
        <div class="">
          <div class="py-2 text-lg font-semibold">
            <span class="font-medium break-all"> {{ address }}</span>
          </div>
          <div class="flex text-purple text-sm font-light" ref="container">
            <a
              class="flex items-center mr-6 group text-purple"
              target="_blank"
              :href="`${EXPLORER_URL}/address/${address}`"
            >
              <AtomLinkIcon class="mr-1 group-hover:opacity-70" />
              <span class="group-hover:opacity-70">View on Etherscan</span>
            </a>
            <a
              class="flex items-center text-purple cursor-pointer group"
              @click="copy(address)"
            >
              <AtomCopyIcon class="mr-1 group-hover:opacity-70" />
              <span class="group-hover:opacity-70">Copy address</span>
            </a>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <button
            @click="handleLogout"
            class="
              bg-white
              border border-solid border-purple
              px-6
              py-3
              cursor-pointer
              hover:opacity-70
              text-purple
              rounded-xl
            "
          >
            Logout
          </button>
        </div>
      </div>
      <p v-else class="text-red-6 text-xl font-medium">
        Invalid network. Please change network.
      </p>
    </div>
  </modal>
</template>
<script>
import { mapState } from "vuex";
import { EXPLORER_URL } from "@/env";
import AtomCloseIcon from "@/components/atoms/icons/close.icon.atom";
import AtomCopyIcon from "@/components/atoms/icons/copy.icon.atom";
import AtomLinkIcon from "@/components/atoms/icons/link.icon.atom";
import { mapMutations } from "vuex";
import Notify from "@/utils/notify.util";

export default {
  components: {
    AtomCloseIcon,
    AtomCopyIcon,
    AtomLinkIcon,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    address: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    hideConfirmModal: {
      type: Function,
      default: () => {},
    },
    title: {
      type: String,
      default: "",
    },
    btnConfirmTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      EXPLORER_URL,
    };
  },
  computed: {
    ...mapState({
      walletConnect: (state) => state.walletConnect.info,
    }),
  },
  methods: {
    ...mapMutations({
      updateWallet: "wallet/UPDATE_WALLET",
    }),
    handleCancel() {
      this.$modal.hide("modal-logout");
    },

    copy(message) {
      // let self = this;
      let container = this.$refs["container"];
      this.$copyText(message, container).then(
        () => {
          try {
            Notify.success(this.$notify, {
              message: "Copy success!",
            });
          } catch (error) {
            Notify.error(this.$notify, error);
          }
        },
        function (error) {
          Notify.error(this.$notify, error);
        }
      );
    },
    handleLogout() {
      this.updateWallet({
        provider: {
          isMetaMask: false,
          chainId: "",
          address: "",
        },
      });
      this.handleCancel();
    },
  },
};
</script>
<style lang="less">
</style>
