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

        <div
          class="alert-message-container alert-spin-result"
          :class="{
            'alert-message-visible': spined,
          }"
          @click="spined = false"
        >
          <div
            class="results"
            :class="{
              'alert-message-opacity': spined,
            }"
          >
            <div class="odd-even text">
              {{ rouletteNumber % 2 == 1 ? "ODD" : "EVEN" }}
            </div>
            <div class="high-low text">
              {{ rouletteNumber >= 19 ? "LOW" : "HIGH" }}
            </div>
            <div class="roll-number text">{{ rouletteNumber }}</div>
            <div class="win-lose text">WIN</div>
            <div class="win-amount text">100</div>
          </div>
        </div>

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
import MoleculeModalLogout from "@/components/molecules/modals/logout.modal.molecule";
import OrganismTopBar from "@/components/organisms/top-bar.organism";
import { NUMBERS } from "@/constants/types.constant";
import {
  RENDER_NUMBERS,
  RED_NUMBERS,
  BLACK_NUMBERS,
  DEFAULT,
} from "@/constants/roulette.constant";

import { mapState } from "vuex";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
    MoleculeRouletteWheel,
    OrganismTopBar
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
      spined: false,
      alerBets: false,
      betting: Object.assign({}, DEFAULT.BETTING),
      NUMBERS,
      rouletteNumbersAmount: 37,
      ballLandingNumber: 0,
      alertMessageVisible: false,
      rouletteNumber: -1,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
      history: (state) => state.roulette.history || {},
    }),
    betSum() {
      let sum = 0;
      for (const key in this.betting) {
        if (Object.hasOwnProperty.call(this.betting, key)) {
          sum += this.betting[key];
        }
      }
      return sum;
    },
    win() {
      if (
        this.areaBetCheck(
          this.rouletteNumber % 2 == 0 && this.rouletteNumber != 0,
          this.betting.even
        )
      ) {
        return true;
      }
      if (this.areaBetCheck(this.rouletteNumber % 2 == 1, this.betting.odd)) {
        return true;
      }
      if (
        this.areaBetCheck(
          this.rouletteNumber <= 18 && this.rouletteNumber != 0,
          this.betting.oneToEighteen
        )
      ) {
        return true;
      }
      if (
        this.areaBetCheck(
          this.rouletteNumber >= 19,
          this.betting.nineteenToThirtysix
        )
      ) {
        return true;
      }
      if (
        this.areaBetCheck(
          this.rouletteNumber <= 12 && this.rouletteNumber != 0,
          this.betting.oneToEighteen
        )
      ) {
        return true;
      }

      if (
        this.areaBetCheck(
          this.rouletteNumber >= 13 && this.rouletteNumber <= 24,
          this.betting.thirteenToTwentyfour
        )
      ) {
        return true;
      }
      if (
        this.areaBetCheck(
          this.rouletteNumber >= 25,
          this.betting.twentyfiveToThirtysix
        )
      ) {
        return true;
      }
      if (
        this.areaBetCheck(
          this.rouletteNumber % 3 == 0 && this.rouletteNumber != 0,
          this.betting.lineOne
        )
      ) {
        return true;
      }
      if (
        this.areaBetCheck(this.rouletteNumber % 3 == 2, this.betting.lineTwo)
      ) {
        return true;
      }
      if (
        this.areaBetCheck(this.rouletteNumber % 3 == 1, this.betting.lineThree)
      ) {
        return true;
      }

      // for (let i = 0; i <= 36; i++) {
      //   if (i < 18) {
      //   }
      // }

      return false;
    },
  },
  methods: {
    areaBetCheck(equation, bet) {
      return equation && bet;
    },
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
    handleReset() {
      this.betting = Object.assign({}, DEFAULT.BETTING);
    },
    handleSpin() {
      if (this.betSum == 0) return (this.alerBets = true);

      this.rouletteNumber = Math.floor(
        Math.random() * this.rouletteNumbersAmount + 0
      );
      this.spined = true;
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
