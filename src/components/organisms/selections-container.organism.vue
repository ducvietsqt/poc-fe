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
  </div>
</template>
<script>
export default {
  name: "organism-selections-container",
  props: {
    account: {
      type: String,
    },
  },
  methods: {
    handleSpin() {
      
    },
  },
};
</script>
<style lang="less">
</style>
