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
import AtomNotify from "@/components/atoms/notify.atom";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    AtomNotify,
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
