<template>
  <div id="app">
    <div class="website-wrapper" id="website-wrapper">
      <div class="roulette-table">
        <OrganismTopBar :account="account" />
        <MoleculeRouletteWheel
          :spin="spined"
          :rouletteNumber="rouletteNumber"
        />
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
        <div class="pt-5 pb-32">
          <h1 class="text-white">HISTORY</h1>
          <a-table
            class="text-white"
            :columns="history.columns"
            :data-source="history.data"
          >
            <span slot="content" slot-scope="text" class="text-white">{{
              text
            }}</span>
          </a-table>
        </div>

        <div class="money-container fixed bottom-0">
          <div class="cash-area area">
            <div class="text"><span>CASH</span> $</div>
            <div class="cash-total"></div>
          </div>
          <div class="bet-area area">
            <div class="text"><span>BET</span> $</div>
            <div class="bet-total">0.00</div>
          </div>
        </div>

        <!-- Alert messages start ---------------------------------------------------------------->
        <div
          class="alert-message-container alert-bets"
          :class="{
            'alert-message-visible': alerBets,
          }"
          @click="alerBets = false"
        >
          <div class="alert-message">PLEASE PLACE YOUR BETS</div>
        </div>

        <div
          class="alert-message-container alert-money"
          :class="{
            'alert-message-visible': alertMessageVisible,
          }"
          @click="alertMessageVisible = false"
        >
          <div class="alert-message">NOT ENOUGH MONEY</div>
        </div>

        <div
          class="alert-message-container alert-max-bet"
          :class="{
            'alert-message-visible': alertMessageVisible,
          }"
          @click="alertMessageVisible = false"
        >
          <div class="alert-message">
            YOU SHOULD NOT EXCEED MAXIMUM BET OF $1000
          </div>
        </div>

       <MoleculeAlertSpinResult :spined="spined" :rouletteNumber="rouletteNumber" :win="win"/>

        <div
          class="alert-message-container alert-game-over"
          :class="{
            'alert-message-visible': alertMessageVisible,
          }"
          @click="alertMessageVisible = false"
        >
          <div class="alert-message">
            <div class="text text1">YOU ARE OUT OF MONEY.</div>
            <div class="text text2">WOULD YOU LIKE TO PLAY AGAIN?</div>
            <div class="answers">
              <div class="answer answer-no">NO</div>
              <div class="answer answer-yes">YES</div>
            </div>
          </div>
        </div>
        <!-- Alert messages end ---------------------------------------------------------------->
      </div>
    </div>

    <AtomNotify />
    <MoleculeModalLogout :address="account" />
  </div>
</template>

<script>
import MixinMetamaskConnect from "@/mixins/metamask-connect.mixin";
import AtomNotify from "@/components/atoms/notify.atom";
import MoleculeRouletteWheel from "@/components/molecules/roulette-wheel.molecule";
import MoleculeAlertSpinResult from "@/components/molecules/alerts/spin-result.alert.molecule";
import MoleculeModalLogout from "@/components/molecules/modals/logout.modal.molecule";
import OrganismTopBar from "@/components/organisms/top-bar.organism";
import { NUMBERS } from "@/constants/types.constant";
import {
  RENDER_NUMBERS,
  RED_NUMBERS,
  BLACK_NUMBERS,
} from "@/constants/roulette.constant";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
    MoleculeRouletteWheel,
    OrganismTopBar,
    MoleculeAlertSpinResult
  },
  data() {
    return {
      RENDER_NUMBERS,
      one2to1Hover: false,
      two2to1Hover: false,
      three2to1Hover: false,
      column1st12Hover: false,
      column2nd12Hover: false,
      column3rd12Hover: false,
      column1to18Hover: false,
      column19to36Hover: false,
      columnEvenHover: false,
      columnOddHover: false,
      columnRedHover: false,
      columnBlackHover: false,
      alerBets: false,
      NUMBERS,
      rouletteNumbersAmount: 37,
      ballLandingNumber: 0,
      alertMessageVisible: false,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
      history: (state) => state.roulette.history || {},
      betting: (state) => state.roulette.betting || {},
      spined: (state) => state.roulette.spin || false,
      rouletteNumber: (state) => state.roulette.number || 0,
    }),
    ...mapGetters({
      betSum: "roulette/getBetSum",
      win: "roulette/win",
    }),
  },
  methods: {
    ...mapMutations({
      handleReset: "roulette/RESET_ROULETTE",
    }),
    ...mapActions({
      spin: "roulette/spin",
    }),
    compileRenderNumberClass(number) {
      const HOVER_CLASS = "bg-white bg-opacity-50";
      if (this.one2to1Hover && number % 3 == 0) {
        return HOVER_CLASS;
      }
      if (this.two2to1Hover && number % 3 == 2) {
        return HOVER_CLASS;
      }
      if (this.three2to1Hover && number % 3 == 1) {
        return HOVER_CLASS;
      }
      if (this.columnOddHover && number % 2 == 1) {
        return HOVER_CLASS;
      }
      if (this.columnEvenHover && number % 2 == 0) {
        return HOVER_CLASS;
      }
      if (this.column1st12Hover && number <= 12) {
        return HOVER_CLASS;
      }
      if (this.column2nd12Hover && number >= 13 && number <= 24) {
        return HOVER_CLASS;
      }
      if (this.column3rd12Hover && number >= 25) {
        return HOVER_CLASS;
      }
      if (this.column1to18Hover && number <= 18) {
        return HOVER_CLASS;
      }
      if (this.column19to36Hover && number >= 19) {
        return HOVER_CLASS;
      }
      if (this.columnRedHover && RED_NUMBERS.indexOf(number) != -1) {
        return HOVER_CLASS;
      }
      if (this.columnBlackHover && BLACK_NUMBERS.indexOf(number) != -1) {
        return HOVER_CLASS;
      }
      return "";
    },
    handleSpin() {
      if (this.betSum == 0) return (this.alerBets = true);
      this.spin();
    },
  },
};
</script>

<style lang="less">
#app {
  .ant-table-thead > tr > th {
    background: #00ad00;
    color: #fff;
    font-weight: 700;
  }
}
</style>
