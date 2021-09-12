<template>
  <div id="app">
    <router-view />
    <AtomNotify />
    <MoleculeModalLogout :address="address" />
  </div>
</template>

<script>
import MixinMetamaskConnect from "@/mixins/metamask-connect.mixin";
import AtomNotify from "@/components/atoms/notify.atom";
import MoleculeModalLogout from "@/components/molecules/modals/logout.modal.molecule";

import { mapState } from "vuex";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
  },
  computed: {
    ...mapState({
      address: (state) => state.wallet.provider?.address || "",
    }),
  },
};
</script>

<style>
#app {
}
</style>
