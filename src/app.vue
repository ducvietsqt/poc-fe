<template>
  <div id="app">
    <div class="website-wrapper" id="website-wrapper">
      <router-view></router-view>
    </div>

    <AtomNotify />
    <MoleculeModalLogout :address="account" />
  </div>
</template>

<script>
import MixinMetamaskConnect from "@/mixins/metamask-connect.mixin";
import AtomNotify from "@/components/atoms/notify.atom";
import MoleculeModalLogout from "@/components/molecules/modals/logout.modal.molecule";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
  },
  created() {
    console.log(`created:>>created`)
    this.resetRoulette();
    this.resetUser();
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
    }),
  },
  methods: {
    ...mapMutations({
      resetRoulette: "roulette/RESET_ROULETTE_SPIN",
      resetUser: "user/RESET_USER",
    }),
  },
};
</script>

<style lang="less">
</style>
