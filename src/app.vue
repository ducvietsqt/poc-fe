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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
  },
  created() {
    this.resetRoulette();
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
    }),
  },
  methods: {
    ...mapMutations({
      resetRoulette: "roulette/RESET_ROULETTE_SPIN",
    }),
    ...mapActions({
      fetchUserList: "user/list",
    }),
  },
  mounted() {
    this.fetchUserList();
  },
};
</script>

<style lang="less">
</style>
