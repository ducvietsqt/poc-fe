<template>
  <div class="selections-container">
    <div class="betting-chips-container">
      <div
        class="
          betting-chip betting-chip-menu betting-chip-menu5 betting-chip5
          active-chip
        "
        id="chip5"
      >
        5
      </div>
    </div>
    <div class="menu-container">
      <div class="button button-spin" @click="handleSpin">
        <div class="circle">
          <i class="fas fa-play icon"></i>
        </div>
        <div class="circle-overlay"></div>
        <div class="button-text">SPIN</div>
      </div>
      <div class="button button-reset" @click="handleReset">
        <div class="circle">
          <i class="fas fa-plus icon"></i>
        </div>
        <div class="circle-overlay"></div>

        <div class="button-text">RESET</div>
      </div>
      <div class="button button-sound">
        <div class="circle">
          <i class="fas fa-volume-up icon icon1"></i>
          <div class="cross-line"></div>
        </div>
        <div class="circle-overlay"></div>

        <div class="button-text">SOUNDS</div>
      </div>
    </div>
    <div
      class="alert-message-container alert-bets"
      :class="{
        'alert-message-visible': alerBets,
      }"
      @click="alerBets = false"
    >
      <div class="alert-message">PLEASE PLACE YOUR BETS</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "organism-selections",
  props: {
    betSum: {
      type: Number,
    },
  },
  data() {
    return {
      alerBets: false,
    };
  },
  methods: {
    ...mapActions({
      spin: "roulette/spin",
    }),
    ...mapMutations({
      handleReset: "roulette/RESET_ROULETTE",
    }),
    handleSpin() {
      console.log(`handleSpin`);

      this.alerBets = true;
    },
  },
};
</script>
<style lang="less">
</style>
