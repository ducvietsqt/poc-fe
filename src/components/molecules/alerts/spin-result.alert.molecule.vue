<template>
  <div
    class="alert-message-container alert-spin-result"
    :class="{
      'alert-message-visible': spined,
    }"
    @click="handleReset"
  >
    <div
      class="results"
      :class="{
        'alert-message-opacity': spined,
        'roll-green': rouletteNumber == 0,
        'roll-red': RED_NUMBERS.indexOf(rouletteNumber) != -1,
        'roll-black': BLACK_NUMBERS.indexOf(rouletteNumber) != -1,
      }"
    >
      <div class="odd-even text">
        {{ rouletteNumber % 2 == 1 ? "ODD" : "EVEN" }}
      </div>
      <div class="high-low text">
        {{ rouletteNumber >= 19 ? "HIGH" : "LOW" }}
      </div>
      <div class="roll-number text">{{ rouletteNumber }}</div>
      <div class="win-lose text">{{ win ? "YOU WON" : "NO WIN" }}</div>
      <!-- <div class="win-amount text">100</div> -->
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { RED_NUMBERS, BLACK_NUMBERS } from "@/constants/roulette.constant";

export default {
  name: "molecule-spin-result",
  props: {
    spined: {
      type: Boolean,
    },
    rouletteNumber: {
      type: Number,
    },
    win: {
      type: Boolean,
    },
  },
  data() {
    return {
      RED_NUMBERS,
      BLACK_NUMBERS,
    };
  },
  methods: {
    ...mapMutations({
      handleReset: "roulette/RESET_ROULETTE",
    }),
  },
};
</script>
<style lang="less">
</style>
