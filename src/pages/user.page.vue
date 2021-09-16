<template>
  <div class="roulette-table">
    <OrganismTopBar :spin="spin" :user="detail" :list="list" />
    <MoleculeRouletteWheel :spin="spin" />
    <div class="w-full py-12 px-16">
      <div class="betting-area w-full" style="height: 407.2px">
        <div class="top-area border-solid border border-collapse">
          <div
            class="
              number
              number0
              regular
              regular0
              cursor-pointer
              bg-green
              part
              px-px
              border-solid border
            "
            @click="handleBet(0)"
          >
            <div class="w-full h-full bg-green group relative">
              <div
                class="
                  w-full
                  h-full
                  flex
                  justify-center
                  items-center
                  group-hover:bg-white group-hover:bg-opacity-50
                "
              >
                <div
                  class="
                    w-9/12
                    h-1/3
                    xl:w-8/12
                    border-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span class="font-black text-6xl text-white">0</span>
                </div>
              </div>

              <MoleculeChip v-if="betting.indexOf(0) != -1" />
            </div>
          </div>
          <div
            class="number number3 cursor-pointer bg-green border-solid border"
            v-for="item in RENDER_NUMBERS"
            :key="item"
            @click="handleBet(item)"
          >
            <div class="w-full h-full bg-green group">
              <div
                class="
                  w-full
                  h-full
                  bg-green
                  group-hover:bg-white group-hover:bg-opacity-50
                  flex
                  py-1
                  px-2
                  lg:py-3
                  lg:px-1
                  xl:py-2
                  xl:px-2
                  justify-center
                  items-center
                "
              >
                <div class="w-full h-full">
                  <div
                    class="
                      w-full
                      h-full
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    :class="
                      RED_NUMBERS.indexOf(item) != -1
                        ? 'bg-red-600'
                        : 'bg-black'
                    "
                  >
                    <span class="font-black text-3xl text-white">{{
                      item
                    }}</span>
                  </div>
                </div>
              </div>

              <MoleculeChip v-if="betting.indexOf(item) != -1" />
            </div>
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
    </div>

    <div class="selections-container">
      <div class="betting-chips-container">
        <MoleculeChip
          class="betting-chip-menu betting-chip-menu5 betting-chip5 active-chip"
        />
      </div>
      <div class="menu-container">
        <button
          class="
            button button-spin
            group
            disabled:pointer-events-none
            disabled:opacity-50
          "
          :disabled="betPending || spinPending"
          @click="handleBetSet"
        >
          <div
            class="circle"
            id="chip200"
            :class="{
              'group-hover:transform-none': betPending || spinPending,
            }"
          >
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
        </button>
        <button
          class="
            button button-spin
            disabled:pointer-events-none
            disabled:opacity-50
          "
          :disabled="betPending || spinPending"
          @click="handleSpin"
        >
          <div class="circle">
            <AtomSpin class="h-5 w-5 align-middle" v-if="spinPending" />
            <i class="fas fa-play icon" v-else></i>
          </div>
          <div class="circle-overlay"></div>
          <div class="button-text">SPIN</div>
        </button>
        <button
          class="
            button button-reset
            disabled:pointer-events-none
            disabled:opacity-50
          "
          :disabled="betPending || spinPending"
          @click="handleReset"
        >
          <div class="circle">
            <i class="fas fa-plus icon"></i>
          </div>
          <div class="circle-overlay"></div>

          <div class="button-text">RESET</div>
        </button>
      </div>
    </div>
    <OrganismBettingsHistory
      class="mt-5 shadow-inner border-gold border-t"
      :userId="$route.params.userId"
      :history="history"
    />

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

    <MoleculeAlertSpinResult :spin="spin" :betting="detail.betting" />
    <!-- Alert messages end ---------------------------------------------------------------->
  </div>
</template>

<script>
import MoleculeRouletteWheel from "@/components/molecules/roulette-wheel.molecule";
import MoleculeChip from "@/components/molecules/chip.molecule";
import MoleculeAlertSpinResult from "@/components/molecules/alerts/spin-result.alert.molecule";
import OrganismTopBar from "@/components/organisms/top-bar.organism";
import OrganismBettingsHistory from "@/components/organisms/bettings-history.organism";
import AtomSpin from "@/components/atoms/icons/spin.icon.atom";
import { RENDER_NUMBERS, RED_NUMBERS } from "@/constants/roulette.constant";

import { mapState, mapMutations } from "vuex";
import Notify from "@/utils/notify.util";

export default {
  name: "App",
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
      RED_NUMBERS,
      RENDER_NUMBERS,
      alerBets: false,
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
      list: (state) => state.user.list || [],
      detail: (state) => state.user.detail || {},
      history: (state) => state.user.history || {},
      spin: (state) => state.roulette.spin || {},
    }),
  },
  methods: {
    ...mapMutations({
      updateRouletteSpin: "roulette/UPDATE_ROULETTE_SPIN",
      updateUserList: "user/UPDATE_USER_LIST",
      updateUserDetail: "user/UPDATE_USER_DETAIL",
      updateUserHistory: "user/UPDATE_USER_HISTORY",
    }),
    handleReset() {
      this.betting = [];
    },
    handleSpin() {
      this.spinPending = true;
      setTimeout(async () => {
        try {
          const { data: number } = await this.$http.post("/spins");
          const { data: history } = await this.$http.get(
            `/users/${this.detail.id}/bettings`
          );
          const { data: spin } = await this.$http.get("/spins");

          this.updateRouletteSpin({
            id: spin,
            number: number,
            loading: true,
          });
          this.updateUserDetail({
            betting: [],
          });
          this.updateUserHistory(history);
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
              spin: this.spin.id,
              bet_layout: this.betting,
            }
          );
          const result = await this.$http.get(
            `/users/${this.$route.params.userId}/bettings`
          );
          const betting = result.data.items.find(
            (item) => item.bet_spin === this.spin.id
          );
          this.updateUserDetail({
            betting: betting ? betting.bet_layout : [],
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
  async mounted() {
    try {
      const { data: list } = await this.$http.get("/users");
      const user = list.find((item) => item.id == this.$route.params.userId);
      const { data: spin } = await this.$http.get("/spins");
      const result = await this.$http.get(`/users/${user.id}/bettings`);

      const betting = result.data.items.find((item) => item.bet_spin === spin);

      this.updateRouletteSpin({
        id: spin,
      });
      this.updateUserList({
        list: list,
      });
      this.updateUserDetail({
        ...user,
        betting: betting ? betting.bet_layout : [],
      });
      this.updateUserHistory(result.data);
    } catch (error) {
      console.log(`user:>>mounted:>>`, error);
    }
  },
};
</script>

<style lang="less">
</style>
