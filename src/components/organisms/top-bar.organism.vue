<template>
  <div class="top-bar">
    <div class="grid grid-cols-4 gap-4">
      <a
        :href="`/user/${item.id}`"
        v-for="item in list"
        :key="item.id"
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
      >
        <span class="font-light text-white"> {{ item.user_name }} </span>
      </a>
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
    list: {
      type: Array,
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
