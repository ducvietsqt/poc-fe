<template>
  <div class="top-bar">
    <div class="grid grid-cols-4 gap-4">
      <a
        href="#"
        @click="handleUserClick(item)"
        v-for="item in list"
        :key="item.id"
        class="roulette-rolls-container h-12 px-3 font-normal text-base"
        :class="{
          active: item.id == user.id,
        }"
      >
        <span class="font-light text-white"> {{ item.user_name }} </span>
      </a>
    </div>
    <div class="game-name">ROULETTE</div>
    <div>
      <a
        :href="`${EXPLORER_URL}/address/${address}`"
        class="roulette-rolls-container h-12 px-7 font-normal"
        style="font-size: 2rem"
        target="_blank"
      >
        <span class="font-light text-white">
          {{ address | truncate(8, 4, 4) }}
        </span>
      </a>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import { EXPLORER_URL } from "@/env";

export default {
  name: "organism-top-bar",
  props: {
    account: {
      type: String,
    },
    user: {
      type: Object,
    },
    list: {
      type: Array,
    },
  },
  computed: {
    address() {
      const user = this.list.find((item) => item.id == this.user.id);
      return user ? user.address : "";
    },
  },
  data() {
    return {
      EXPLORER_URL,
    };
  },
  methods: {
    ...mapMutations({
      resetRoulette: "roulette/RESET_ROULETTE_SPIN",
    }),
    ...mapActions({
      fetchUserDetail: "user/detail",
    }),
    async handleUserClick(item) {
      this.resetRoulette();
      await this.fetchUserDetail({
        userId: item.id,
      });
      this.$router.push(`/user/${item.id}`);
    },
  },
};
</script>
<style lang="less">
.roulette-rolls-container {
  &.active {
    background: #00ad00 !important;
  }
}
</style>
