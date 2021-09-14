<template>
  <div class="roulette-table">
    <OrganismTopBar :account="account" :user="detail" :list="userList" />
    <MoleculeRouletteWheel :spin="spined" :rouletteNumber="rouletteNumber" />
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
          @click="handleBet(NUMBERS.ZERO)"
        >
          <div
            v-if="betting[NUMBERS.ZERO]"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
          </div>
        </div>
        <div
          class="number number3 hover:bg-white hover:bg-opacity-50"
          v-for="item in RENDER_NUMBERS"
          :key="item"
          :class="compileRenderNumberClass(item)"
          @click="handleBet(item)"
        >
          <div
            v-if="betting[item]"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
          </div>
        </div>
        <div
          class="number bet2to1-1 part hover:bg-white hover:bg-opacity-50"
          @mouseover="one2to1Hover = true"
          @mouseout="one2to1Hover = false"
          @click="handleBet('lineOne')"
        >
          <div
            v-if="betting.lineOne"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
          </div>
        </div>
        <div
          class="number bet2to1-2 part hover:bg-white hover:bg-opacity-50"
          @mouseover="two2to1Hover = true"
          @mouseout="two2to1Hover = false"
          @click="handleBet('lineTwo')"
        >
          <div
            v-if="betting.lineTwo"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
          </div>
        </div>
        <div
          class="number bet2to1-3 part hover:bg-white hover:bg-opacity-50"
          @mouseover="three2to1Hover = true"
          @mouseout="three2to1Hover = false"
          @click="handleBet('lineThree')"
        >
          <div
            v-if="betting.lineThree"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('oneToTwelve')"
        >
          <div
            v-if="betting.oneToTwelve"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('thirteenToTwentyfour')"
        >
          <div
            v-if="betting.thirteenToTwentyfour"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('twentyfiveToThirtysix')"
        >
          <div
            v-if="betting.twentyfiveToThirtysix"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('oneToEighteen')"
        >
          <div
            v-if="betting.oneToEighteen"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('even')"
        >
          <div
            v-if="betting.even"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('red')"
        >
          <div
            v-if="betting.red"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('black')"
        >
          <div
            v-if="betting.black"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('odd')"
        >
          <div
            v-if="betting.odd"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
          @click="handleBet('nineteenToThirtysix')"
        >
          <div
            v-if="betting.nineteenToThirtysix"
            id="5"
            class="betting-chip betting-chip-shadow betting-chip5"
          >
            {{ CHIP_NUMBER }}
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
        <div class="button button-spin" @click="handleBetSet">
          <div class="circle" id="chip200">
            <AtomSpin class="h-5 w-5 align-middle" v-if="betPending" />
            <div
              v-else
              class="
                betting-chip
                betting-chip-menu
                betting-chip-menu200
                betting-chip200
              "
              id="chip200"
            ></div>
          </div>
          <div class="circle-overlay"></div>
          <div class="button-text">BET</div>
        </div>
        <div class="button button-spin" @click="handleSpin">
          <div class="circle">
            <AtomSpin class="h-5 w-5 align-middle" v-if="spinPending" />
            <i class="fas fa-play icon" v-else></i>
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
      </div>
    </div>
    <OrganismBettingsHistory class="pt-5 pb-32" :bettings="detail.bettings" />

    <div class="money-container fixed bottom-0 z-50">
      <div class="cash-area area">
        <div class="text"><span>BALANCE</span> $</div>
        <div class="cash-total"></div>
      </div>
      <div class="bet-area area">
        <div class="text"><span>BET</span> $</div>
        <div class="bet-total">{{ betSum | toCurrency(2) }}</div>
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
        'alert-message-visible': alerMoney,
      }"
      @click="alerMoney = false"
    >
      <div class="alert-message">NOT ENOUGH MONEY</div>
    </div>

    <MoleculeAlertSpinResult
      :spined="spined"
      :rouletteNumber="rouletteNumber"
      :win="win"
    />
    <!-- Alert messages end ---------------------------------------------------------------->
  </div>
</template>

<script>
import MixinMetamaskConnect from "@/mixins/metamask-connect.mixin";
import MoleculeRouletteWheel from "@/components/molecules/roulette-wheel.molecule";
import MoleculeAlertSpinResult from "@/components/molecules/alerts/spin-result.alert.molecule";
import OrganismTopBar from "@/components/organisms/top-bar.organism";
import OrganismBettingsHistory from "@/components/organisms/bettings-history.organism";
import AtomSpin from "@/components/atoms/icons/spin.icon.atom";
import { NUMBERS } from "@/constants/types.constant";
import {
  RENDER_NUMBERS,
  RED_NUMBERS,
  BLACK_NUMBERS,
  CHIP_NUMBER,
} from "@/constants/roulette.constant";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import Notify from "@/utils/notify.util";

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    MoleculeRouletteWheel,
    OrganismTopBar,
    MoleculeAlertSpinResult,
    OrganismBettingsHistory,
    AtomSpin,
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
      alerMoney: false,
      NUMBERS,
      rouletteNumbersAmount: 37,
      ballLandingNumber: 0,
      alertMessageVisible: false,
      CHIP_NUMBER,
      betPending: false,
      spinPending: false,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
      userList: (state) => state.user.list || "",
      balance: (state) => state.wallet.balance || false,
      history: (state) => state.roulette.history || {},
      detail: (state) => state.user.detail || {},
      betting: (state) => state.roulette.betting || {},
      spined: (state) => state.roulette.spin.loading || false,
      current: (state) => state.roulette.spin.id || false,
      rouletteNumber: (state) => state.roulette.spin.number || 0,
    }),
    ...mapGetters({
      betSum: "roulette/getBetSum",
      win: "roulette/win",
    }),
  },
  methods: {
    ...mapMutations({
      handleReset: "roulette/RESET_ROULETTE_SPIN",
      updateBetting: "roulette/UPDATE_BETTING",
    }),
    ...mapActions({
      spin: "roulette/spin",
      fetchUserList: "user/list",
      fetchUserDetail: "user/detail",
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

      this.spinPending = true;
      setTimeout(async () => {
        try {
          await this.spin();
        } catch (error) {
          Notify.error(this.$notify, error);
        } finally {
          this.spinPending = false;
        }
      }, 100);
    },
    handleBet(index) {
      // if (this.balance < this.betSum + CHIP_NUMBER)
      //   return (this.alerMoney = true);
      this.updateBetting({
        ...this.betting,
        [index]: !this.betting[index],
      });
    },
    handleBetSet() {
      if (this.betSum == 0) return (this.alerBets = true);

      this.betPending = true;
      setTimeout(async () => {
        try {
          await this.$http.post(
            `/users/${this.$route.params.userId}/bettings`,
            {
              spin: this.current,
              bet_layout: [],
            }
          );
          Notify.success(this.$notify, {
            title: "Bet successfully!",
            message:
              "Your bet request has been submitted. It might take some time for changes to appear.",
          });
        } catch (error) {
          Notify.error(this.$notify, error);
        } finally {
          this.betPending = false;
        }
      }, 100);
    },
  },
  mounted() {
    this.fetchUserDetail({
      userId: this.$route.params.userId || 1,
    });
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
  .ant-table-placeholder {
    background: #00ad00;
    border-bottom: none;
    .ant-empty-description {
      color: white;
    }
  }
}
</style>
