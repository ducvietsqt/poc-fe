<template>
  <div class="betting-area" style="width: 1084px; height: 407.2px">
    <div class="top-area">
      <div
        class="
          number
          number0
          regular
          regular0
          part
          hover:bg-white hover:bg-opacity-50
        "
        @click="betting[NUMBERS.ZERO]++"
      >
        <div
          v-if="betting[NUMBERS.ZERO]"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting[NUMBERS.ZERO] * 5 }}
        </div>
      </div>
      <div
        class="number number3 hover:bg-white hover:bg-opacity-50"
        v-for="item in RENDER_NUMBERS"
        :key="item"
        :class="compileRenderNumberClass(item)"
        @click="betting[item]++"
      >
        <div
          v-if="betting[item]"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting[item] * 5 }}
        </div>
      </div>
      <div
        class="number bet2to1-1 part hover:bg-white hover:bg-opacity-50"
        @mouseover="one2to1Hover = true"
        @mouseout="one2to1Hover = false"
        @click="betting.lineOne++"
      >
        <div
          v-if="betting.lineOne"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.lineOne * 5 }}
        </div>
      </div>
      <div
        class="number bet2to1-2 part hover:bg-white hover:bg-opacity-50"
        @mouseover="two2to1Hover = true"
        @mouseout="two2to1Hover = false"
        @click="betting.lineTwo++"
      >
        <div
          v-if="betting.lineTwo"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.lineTwo * 5 }}
        </div>
      </div>
      <div
        class="number bet2to1-3 part hover:bg-white hover:bg-opacity-50"
        @mouseover="three2to1Hover = true"
        @mouseout="three2to1Hover = false"
        @click="betting.lineThree++"
      >
        <div
          v-if="betting.lineThree"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.lineThree * 5 }}
        </div>
      </div>
    </div>
    <div class="bottom-area">
      <div
        class="
          bottom-column bottom-column1
          column-1st12
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="column1st12Hover = true"
        @mouseout="column1st12Hover = false"
        @click="betting.oneToTwelve++"
      >
        <div
          v-if="betting.oneToTwelve"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.oneToTwelve * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column2
          column-2nd12
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="column2nd12Hover = true"
        @mouseout="column2nd12Hover = false"
        @click="betting.thirteenToTwentyfour++"
      >
        <div
          v-if="betting.thirteenToTwentyfour"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.thirteenToTwentyfour * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column3
          column-3rd12
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="column3rd12Hover = true"
        @mouseout="column3rd12Hover = false"
        @click="betting.twentyfiveToThirtysix++"
      >
        <div
          v-if="betting.twentyfiveToThirtysix"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.twentyfiveToThirtysix * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column4
          column-1to18
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="column1to18Hover = true"
        @mouseout="column1to18Hover = false"
        @click="betting.oneToEighteen++"
      >
        <div
          v-if="betting.oneToEighteen"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.oneToEighteen * 5 }}
        </div>
      </div>

      <div
        class="
          bottom-column bottom-column5
          column-even
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="columnEvenHover = true"
        @mouseout="columnEvenHover = false"
        @click="betting.even++"
      >
        <div
          v-if="betting.even"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.even * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column6
          column-red
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="columnRedHover = true"
        @mouseout="columnRedHover = false"
        @click="betting.red++"
      >
        <div
          v-if="betting.red"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.red * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column7
          column-black
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="columnBlackHover = true"
        @mouseout="columnBlackHover = false"
        @click="betting.black++"
      >
        <div
          v-if="betting.black"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.black * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column8
          column-odd
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="columnOddHover = true"
        @mouseout="columnOddHover = false"
        @click="betting.odd++"
      >
        <div
          v-if="betting.odd"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.odd * 5 }}
        </div>
      </div>
      <div
        class="
          bottom-column bottom-column9
          column-19to36
          part
          hover:bg-white hover:bg-opacity-50
        "
        @mouseover="column19to36Hover = true"
        @mouseout="column19to36Hover = false"
        @click="betting.nineteenToThirtysix++"
      >
        <div
          v-if="betting.nineteenToThirtysix"
          id="5"
          class="betting-chip betting-chip-shadow betting-chip5"
        >
          {{ betting.nineteenToThirtysix * 5 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "organism-betting-area",
  props: {
    account: {
      type: String,
    },
  },
};
</script>
<style lang="less">
</style>
