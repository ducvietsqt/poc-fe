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
          @click="handleBet(0)"
        >
          <MoleculeChip v-if="betting.indexOf(0) != -1" />
        </div>
        <div
          class="number number3 hover:bg-white hover:bg-opacity-50"
          v-for="item in RENDER_NUMBERS"
          :key="item"
          @click="handleBet(item)"
        >
          <MoleculeChip v-if="betting.indexOf(item) != -1" />
        </div>
        <div class="number bet2to1-1 part bg-gray-900 bg-opacity-50"></div>
        <div class="number bet2to1-2 part bg-gray-900 bg-opacity-50"></div>
        <div class="number bet2to1-3 part bg-gray-900 bg-opacity-50"></div>
      </div>
      <div class="bottom-area">
        <div
          class="
            bottom-column bottom-column1
            column-1st12
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column2
            column-2nd12
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column3
            column-3rd12
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column4
            column-1to18
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>

        <div
          class="
            bottom-column bottom-column5
            column-even
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column6
            column-red
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column7
            column-black
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column8
            column-odd
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
        <div
          class="
            bottom-column bottom-column9
            column-19to36
            part
            bg-gray-900 bg-opacity-50
          "
        ></div>
      </div>
    </div>
    <div class="selections-container">
      <div class="betting-chips-container">
        <MoleculeChip
          class="betting-chip-menu betting-chip-menu5 betting-chip5 active-chip"
        />
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
    <OrganismBettingsHistory class="pt-5 pb-32" :bettings="detail.history" />

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
import MoleculeChip from "@/components/molecules/chip.molecule";
import MoleculeAlertSpinResult from "@/components/molecules/alerts/spin-result.alert.molecule";
import OrganismTopBar from "@/components/organisms/top-bar.organism";
import OrganismBettingsHistory from "@/components/organisms/bettings-history.organism";
import AtomSpin from "@/components/atoms/icons/spin.icon.atom";
import { RENDER_NUMBERS } from "@/constants/roulette.constant";

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
    MoleculeChip,
    AtomSpin,
  },
  data() {
    return {
      RENDER_NUMBERS,
      alerBets: false,
      rouletteNumbersAmount: 37,
      ballLandingNumber: 0,
      alertMessageVisible: false,
      betting: [],
      betPending: false,
      spinPending: false,
    };
  },
  watch: {
    detail() {
      this.betting = [].concat(this.detail.betting || []);
    },
  },
  computed: {
    ...mapState({
      account: (state) => state.wallet.provider?.address || "",
      userList: (state) => state.user.list || "",
      history: (state) => state.roulette.history || {},
      detail: (state) => state.user.detail || {},
      spined: (state) => state.roulette.spin.loading || false,
      current: (state) => state.roulette.spin.id || false,
      rouletteNumber: (state) => state.roulette.spin.number || 0,
    }),
    ...mapGetters({
      win: "roulette/win",
    }),
  },
  methods: {
    ...mapMutations({
      updateBetting: "roulette/UPDATE_BETTING",
      updateUserDetail: "user/UPDATE_USER_DETAIL",
    }),
    ...mapActions({
      spin: "roulette/spin",
      fetchUserList: "user/list",
      fetchUserDetail: "user/detail",
    }),
    handleReset() {
      this.betting = [];
    },
    handleSpin() {
      this.spinPending = true;
      setTimeout(async () => {
        try {
          await this.spin();
          await this.fetchUserDetail({
            userId: this.$route.params.userId || 1,
          });
        } catch (error) {
          Notify.error(this.$notify, error);
        } finally {
          this.spinPending = false;
        }
      }, 100);
    },
    handleBet(item) {
      const index = this.betting.indexOf(item);
      if (index != -1) this.betting.splice(index, 1);
      else this.betting.push(item);
    },
    handleBetSet() {
      if (this.betting.length == 0) return (this.alerBets = true);

      this.betPending = true;
      setTimeout(async () => {
        try {
          await this.$http.post(
            `/users/${this.$route.params.userId}/bettings`,
            {
              spin: this.current,
              bet_layout: this.betting,
            }
          );
          this.fetchUserDetail({
            userId: this.detail.id,
            spin: this.current,
            address: this.detail.address,
          });
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
    const user = this.userList.find(
      (item) => item.id == this.$route.params.userId
    );
    this.fetchUserDetail({
      userId: this.$route.params.userId || 1,
      spin: this.current,
      address: user ? user.address : "",
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
