<template>
  <div
    class="alert-message-container alert-spin-result"
    :class="{
      'alert-message-visible': spin.loading,
      'delay-5000 transition ease-out': spin.loading,
    }"
    @click="handleHide"
  >
    <div
      class="results"
      :class="{
        'alert-message-opacity': spin.loading,
        'duration-2000 delay-3000': spin.loading,
        'roll-green': spin.number == 0,
        'roll-red': RED_NUMBERS.indexOf(spin.number) != -1,
        'roll-black': BLACK_NUMBERS.indexOf(spin.number) != -1,
      }"
    >
      <div class="roll-number text">{{ spin.number }}</div>
      <div class="win-lose text">{{ win ? "WIN" : "LOST" }}</div>
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
      console.log(`this.betting:>>`, this.betting)
      return this.betting.indexOf(this.spin.number) != -1;
    },
  },
  methods: {
    ...mapMutations({
      updateRouletteSpin: "roulette/UPDATE_ROULETTE_SPIN",
       updateUserDetail: "user/UPDATE_USER_DETAIL",
    }),
    async handleHide() {
      try {
        this.updateRouletteSpin({
          loading: false,
          number: -1,
        });
         this.updateUserDetail({
           betting: []
         })
      } catch (error) {
        console.log(`handleHide:>>`);
      }
    },
  },
};
</script>
<style lang="less">
</style>
