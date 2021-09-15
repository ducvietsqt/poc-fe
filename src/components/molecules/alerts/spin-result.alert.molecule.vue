<template>
  <div
    class="alert-message-container alert-spin-result"
    :class="{
      'alert-message-visible': spin.loading,
      'delay-3000 transition ease-out': spin.loading,
    }"
    @click="handleReset"
  >
  {{spin.loading}}
    <div
      class="results"
      :class="{
        'alert-message-opacity': spin.loading,
        'duration-2000 delay-1000': spin.loading,
        'roll-green': spin.number == 0,
        'roll-red': RED_NUMBERS.indexOf(spin.number) != -1,
        'roll-black': BLACK_NUMBERS.indexOf(spin.number) != -1,
      }"
    >
      <div class="odd-even text">
        {{ spin.number % 2 == 1 ? "ODD" : "EVEN" }}
      </div>
      <div class="high-low text">
        {{ spin.number >= 19 ? "HIGH" : "LOW" }}
      </div>
      <div class="roll-number text">{{ spin.number }}</div>
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
    spin: {
      type: Object,
    },
    betting: {
      type: Array,
    },
  },
  data() {
    return {
      RED_NUMBERS,
      BLACK_NUMBERS,
    };
  },
  computed: {
    win() {
      return this.betting.indexOf(this.spin.number) != -1;
    },
  },
  methods: {
    ...mapMutations({
      handleReset: "roulette/RESET_ROULETTE_SPIN",
    }),
  },
};
</script>
<style lang="less">
</style>
