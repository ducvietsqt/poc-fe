<template>
  <div
    class="roulette-wheel-container"
    :class="{
      'z-index-visible': spin.loading,
      'roulette-wheel-visible': spin.loading,
    }"
  >
    <div class="roulette-wheel">
      <div
        class="roulette-wheel-main roulette-image"
        :class="{
          'roulette-wheel-spin': spin.loading,
        }"
      ></div>
      <div class="roulette-center roulette-image"></div>
      <div
        class="roulette-cross-shadow roulette-image"
        :class="{
          'roulette-wheel-spin': spin.loading,
        }"
      ></div>
      <div
        class="roulette-cross roulette-image"
        :class="{
          'roulette-wheel-spin': spin.loading,
        }"
      >
        <div class="number-glow-container"></div>
      </div>
      <div class="ball-container" :key="spin.number">
        <div class="ball-spinner">
          <div class="ball"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ROULETTE_NUMBERS_AMOUNT,
  ROULETTE_NUMBERS,
} from "@/constants/roulette.constant";

export default {
  name: "molecule-roulette-wheel",
  props: {
    spin: {
      type: Object,
    },
  },
  watch: {
    spin() {
      this.rouletteWheelAnimation();
    },
  },
  methods: {
    calcBallLandingNumber() {
      for (let i = 0; i < ROULETTE_NUMBERS_AMOUNT; i++) {
        if (this.rouletteNumber == ROULETTE_NUMBERS[i]) {
          return i;
        }
      }
      return 0;
    },
    rouletteWheelAnimation() {
      const ballLandingNumber = this.calcBallLandingNumber();
      var style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `
      @-webkit-keyframes ball-container-animation{
        0%{ 
          transform: rotate(1440deg);
        }
        100%{
          transform: rotate(${
            (360 / ROULETTE_NUMBERS_AMOUNT) * ballLandingNumber
          }deg);
        }`;
      document.getElementsByTagName("head")[0].appendChild(style);
    },
  },
};
</script>
<style lang="less">
</style>
