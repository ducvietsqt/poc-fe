<template>
  <div class="top-bar">
    <!-- <div class="roulette-rolls-container">
      <div class="roll roll5"></div>
      <div class="roll roll4"></div>
      <div class="roll roll3"></div>
      <div class="roll roll2"></div>
      <div class="roll roll1"></div>
      <div class="roll roll-last"></div>
    </div> -->
    <div class="grid grid-cols-4 gap-4">
      <button
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
      >
        <span class="font-light"> User1 </span>
      </button>
      <button
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
      >
        <span class="font-light"> User2 </span>
      </button>
      <button
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
      >
        <span class="font-light"> User3 </span>
      </button>
      <button
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
      >
        <span class="font-light"> User4 </span>
      </button>
    </div>
    <div class="game-name">ROULETTE</div>
    <div>
      <button
        v-if="!account"
        class="roulette-rolls-container h-12 px-7 font-normal"
        style="font-size: 2rem"
        @click="handleConnect"
      >
        <span class="font-light"> Connect </span>
      </button>
      <button
        v-else
        class="roulette-rolls-container h-12 px-7 font-normal"
        style="font-size: 2rem"
        @click="$modal.show('modal-logout')"
      >
        <span class="font-light">
          {{ account | truncate(8, 4, 4) }}
        </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "organism-top-bar",
  props: {
    account: {
      type: String,
    },
  },
  methods: {
    handleConnect() {
      this.$root.$emit("btn-wallet-connect");
    },
  },
};
</script>
<style lang="less">
</style>
