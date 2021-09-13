<template>
  <div id="app">
    <div class="website-wrapper" id="website-wrapper">
      <div class="roulette-table">
        <div class="top-bar">
          <div class="roulette-rolls-container">
            <div class="roll roll5"></div>
            <div class="roll roll4"></div>
            <div class="roll roll3"></div>
            <div class="roll roll2"></div>
            <div class="roll roll1"></div>
            <div class="roll roll-last"></div>
          </div>
          <div class="game-name">ROULETTE</div>
          <div class="min-max-bet">
            <div class="min-bet bet-size">
              <span class="text-color">MIN:</span> $5.00
            </div>
            <div class="max-bet bet-size">
              <span class="text-color">MAX:</span> $1000.00
            </div>
          </div>
        </div>
        <div class="roulette-wheel-container">
          <div class="roulette-wheel">
            <div class="roulette-wheel-main roulette-image"></div>
            <div class="roulette-center roulette-image"></div>
            <div class="roulette-cross-shadow roulette-image"></div>
            <div class="roulette-cross roulette-image">
              <div class="number-glow-container"></div>
            </div>
            <div class="ball-container"></div>
          </div>
        </div>

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
               @click="bettingChips.zero++"
            >
              <div
                v-if="bettingChips.zero"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.zero * 5 }}
              </div>
            </div>
            <div
              class="number number3 hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.three++"
            >
              <div
                v-if="bettingChips.three"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.three * 5 }}
              </div>
            </div>
            <div
              class="number number2 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.two++"
            >
              <div
                v-if="bettingChips.two"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.two * 5 }}
              </div>
            </div>
            <div
              class="number number1 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.one++"
            >
              <div
                v-if="bettingChips.one"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.one * 5 }}
              </div>
            </div>
            <div
              class="number number6 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.six++"
            >
              <div
                v-if="bettingChips.six"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.six * 5 }}
              </div>
            </div>
            <div
              class="number number5 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.five++"
            >
              <div
                v-if="bettingChips.five"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.five * 5 }}
              </div>
            </div>
            <div
              class="number number4 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.four++"
            >
              <div
                v-if="bettingChips.four"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.four * 5 }}
              </div>
            </div>
            <div
              class="number number9 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.nine++"
            >
              <div
                v-if="bettingChips.nine"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.nine * 5 }}
              </div>
            </div>
            <div
              class="number number8 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.eight++"
            >
              <div
                v-if="bettingChips.eight"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.eight * 5 }}
              </div>
            </div>
            <div
              class="number number7 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.seven++"
            >
              <div
                v-if="bettingChips.seven"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.seven * 5 }}
              </div>
            </div>
            <div
              class="number number12 hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.twelve++"
            >
              <div
                v-if="bettingChips.twelve"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twelve * 5 }}
              </div>
            </div>
            <div
              class="number number11 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.eleven++"
            >
              <div
                v-if="bettingChips.eleven"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.eleven * 5 }}
              </div>
            </div>
            <div
              class="number number10 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column1st12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.ten++"
            >
              <div
                v-if="bettingChips.ten"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.ten * 5 }}
              </div>
            </div>
            <div
              class="number number15 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.fifteen++"
            >
              <div
                v-if="bettingChips.fifteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.fifteen * 5 }}
              </div>
            </div>
            <div
              class="number number14 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.fourteen++"
            >
              <div
                v-if="bettingChips.fourteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.fourteen * 5 }}
              </div>
            </div>
            <div
              class="number number13 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.thirteen++"
            >
              <div
                v-if="bettingChips.thirteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirteen * 5 }}
              </div>
            </div>
            <div
              class="number number18 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.eighteen++"
            >
              <div
                v-if="bettingChips.eighteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.eighteen * 5 }}
              </div>
            </div>
            <div
              class="number number17 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.seventeen++"
            >
              <div
                v-if="bettingChips.seventeen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.seventeen * 5 }}
              </div>
            </div>
            <div
              class="number number16 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column1to18Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.sixteen++"
            >
              <div
                v-if="bettingChips.sixteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.sixteen * 5 }}
              </div>
            </div>
            <div
              class="number number21 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.twentyone++"
            >
              <div
                v-if="bettingChips.twentyone"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyone * 5 }}
              </div>
            </div>
            <div
              class="number number20 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twenty++"
            >
              <div
                v-if="bettingChips.twenty"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twenty * 5 }}
              </div>
            </div>
            <div
              class="number number19 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.nineteen++"
            >
              <div
                v-if="bettingChips.nineteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.nineteen * 5 }}
              </div>
            </div>
            <div
              class="number number24 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twentyfour++"
            >
              <div
                v-if="bettingChips.twentyfour"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyfour * 5 }}
              </div>
            </div>
            <div
              class="number number23 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.twentythree++"
            >
              <div
                v-if="bettingChips.twentythree"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentythree * 5 }}
              </div>
            </div>
            <div
              class="number number22 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column2nd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twentytwo++"
            >
              <div
                v-if="bettingChips.twentytwo"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentytwo * 5 }}
              </div>
            </div>
            <div
              class="number number27 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.twentyseven++"
            >
              <div
                v-if="bettingChips.twentyseven"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyseven * 5 }}
              </div>
            </div>
            <div
              class="number number26 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twentysix++"
            >
              <div
                v-if="bettingChips.twentysix"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentysix * 5 }}
              </div>
            </div>
            <div
              class="number number25 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnRedHover,
              }"
              @click="bettingChips.twentyfive++"
            >
              <div
                v-if="bettingChips.twentyfive"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyfive * 5 }}
              </div>
            </div>
            <div
              class="number number30 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.thirty++"
            >
              <div
                v-if="bettingChips.thirty"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirty * 5 }}
              </div>
            </div>
            <div
              class="number number29 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twentynine++"
            >
              <div
                v-if="bettingChips.twentynine"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentynine * 5 }}
              </div>
            </div>
            <div
              class="number number28 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.twentyeight++"
            >
              <div
                v-if="bettingChips.twentyeight"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyeight * 5 }}
              </div>
            </div>
            <div
              class="number number33 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.thirtythree++"
            >
              <div
                v-if="bettingChips.thirtythree"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtythree * 5 }}
              </div>
            </div>
            <div
              class="number number32 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.thirtytwo++"
            >
              <div
                v-if="bettingChips.thirtytwo"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtytwo * 5 }}
              </div>
            </div>
            <div
              class="number number31 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.thirtyone++"
            >
              <div
                v-if="bettingChips.thirtyone"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtyone * 5 }}
              </div>
            </div>
            <div
              class="number number36 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  one2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.thirtysix++"
            >
              <div
                v-if="bettingChips.thirtysix"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtysix * 5 }}
              </div>
            </div>
            <div
              class="number number35 black hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
                'bg-opacity-50':
                  two2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnOddHover ||
                  columnBlackHover,
              }"
              @click="bettingChips.thirtyfive++"
            >
              <div
                v-if="bettingChips.thirtyfive"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtyfive * 5 }}
              </div>
            </div>
            <div
              class="number number34 red hover:bg-white hover:bg-opacity-50"
              :class="{
                'bg-white':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
                'bg-opacity-50':
                  three2to1Hover ||
                  column3rd12Hover ||
                  column19to36Hover ||
                  columnEvenHover ||
                  columnRedHover,
              }"
              @click="bettingChips.thirtyfour++"
            >
              <div
                v-if="bettingChips.thirtyfour"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirtyfour * 5 }}
              </div>
            </div>
            <div
              class="number bet2to1-1 part hover:bg-white hover:bg-opacity-50"
              @mouseover="one2to1Hover = true"
              @mouseout="one2to1Hover = false"
              @click="bettingChips.lineOne++"
            >
              <div
                v-if="bettingChips.lineOne"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.lineOne * 5 }}
              </div>
            </div>
            <div
              class="number bet2to1-2 part hover:bg-white hover:bg-opacity-50"
              @mouseover="two2to1Hover = true"
              @mouseout="two2to1Hover = false"
              @click="bettingChips.lineTwo++"
            >
              <div
                v-if="bettingChips.lineTwo"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.lineTwo * 5 }}
              </div>
            </div>
            <div
              class="number bet2to1-3 part hover:bg-white hover:bg-opacity-50"
              @mouseover="three2to1Hover = true"
              @mouseout="three2to1Hover = false"
              @click="bettingChips.lineThree++"
            >
              <div
                v-if="bettingChips.lineThree"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.lineThree * 5 }}
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
              @click="bettingChips.oneToTwelve++"
            >
              <div
                v-if="bettingChips.oneToTwelve"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.oneToTwelve * 5 }}
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
              @click="bettingChips.thirteenToTwentyfour++"
            >
              <div
                v-if="bettingChips.thirteenToTwentyfour"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.thirteenToTwentyfour * 5 }}
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
              @click="bettingChips.twentyfiveToThirtysix++"
            >
              <div
                v-if="bettingChips.twentyfiveToThirtysix"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.twentyfiveToThirtysix * 5 }}
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
              @click="bettingChips.oneToEighteen++"
            >
              <div
                v-if="bettingChips.oneToEighteen"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.oneToEighteen * 5 }}
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
              @click="bettingChips.even++"
            >
              <div
                v-if="bettingChips.even"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.even * 5 }}
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
              @click="bettingChips.red++"
            >
              <div
                v-if="bettingChips.red"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.red * 5 }}
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
              @click="bettingChips.black++"
            >
              <div
                v-if="bettingChips.black"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.black * 5 }}
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
              @click="bettingChips.odd++"
            >
              <div
                v-if="bettingChips.odd"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.odd * 5 }}
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
              @click="bettingChips.nineteenToThirtysix++"
            >
              <div
                v-if="bettingChips.nineteenToThirtysix"
                id="5"
                class="betting-chip betting-chip-shadow betting-chip5"
              >
                {{ bettingChips.nineteenToThirtysix * 5 }}
              </div>
            </div>
          </div>
        </div>
        <div class="selections-container">
          <div class="betting-chips-container">
            <div
              class="
                betting-chip betting-chip-menu betting-chip-menu5 betting-chip5
              "
              id="chip5"
            >
              5
            </div>
          </div>
          <div class="menu-container">
            <div class="button button-spin">
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

        <div class="money-container">
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
        <div class="alert-message-container alert-bets">
          <div class="alert-message">PLEASE PLACE YOUR BETS</div>
        </div>

        <div class="alert-message-container alert-money">
          <div class="alert-message">NOT ENOUGH MONEY</div>
        </div>

        <div class="alert-message-container alert-max-bet">
          <div class="alert-message">
            YOU SHOULD NOT EXCEED MAXIMUM BET OF $1000
          </div>
        </div>

        <div class="alert-message-container alert-spin-result">
          <div class="results">
            <div class="odd-even text">ODD</div>
            <div class="high-low text">HIGH</div>
            <div class="roll-number text">26</div>
            <div class="win-lose text">WIN</div>
            <div class="win-amount text">100</div>
          </div>
        </div>

        <div class="alert-message-container alert-game-over">
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
    <MoleculeModalLogout :address="address" />
  </div>
</template>

<script>
import MixinMetamaskConnect from "@/mixins/metamask-connect.mixin";
import AtomNotify from "@/components/atoms/notify.atom";
import MoleculeModalLogout from "@/components/molecules/modals/logout.modal.molecule";

import { mapState } from "vuex";

// const NUMBERS_RED = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
// const NUMBERS_BLACK = [2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 24, 22, 26, 28, 29, 31, 33, 35]

const columns = [
  {
    title: "Spin",
    dataIndex: "spin",
    key: "spin",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Bet Unit",
    dataIndex: "betUnit",
    key: "betUnit",
  },
  {
    title: "Win",
    key: "win",
    dataIndex: "win",
  },
  {
    title: "Lost",
    key: "lost",
    dataIndex: "lost",
  },
  {
    title: "Bet Layout",
    key: "betLayout",
    dataIndex: "betLayout",
  },
];

const data = [
  {
    key: "1",
    spin: 2,
    number: 36,
    betUnit: 9,
    win: 0,
    lost: -9,
    betLayout: "1,2,3,8,9,12,24,30,32",
  },
  {
    key: "2",
    spin: 1,
    number: 23,
    betUnit: 5,
    win: 1,
    lost: -4,
    betLayout: "2,5,6,8,23",
  },
  {
    key: "3",
    spin: 0,
    number: 3,
    betUnit: 6,
    win: 0,
    lost: -6,
    betLayout: "2,5,7,9,12,34",
  },
];

const BETTING_CHIPS_DEFAULT = {
  zero: 0,
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0,
  seven: 0,
  eight: 0,
  nine: 0,
  ten: 0,
  eleven: 0,
  twelve: 0,
  thirteen: 0,
  fourteen: 0,
  fifteen: 0,
  sixteen: 0,
  seventeen: 0,
  eighteen: 0,
  nineteen: 0,
  twenty: 0,
  twentyone: 0,
  twentytwo: 0,
  twentythree: 0,
  twentyfour: 0,
  twentyfive: 0,
  twentysix: 0,
  twentyseven: 0,
  twentyeight: 0,
  twentynine: 0,
  thirty: 0,
  thirtyone: 0,
  thirtytwo: 0,
  thirtythree: 0,
  thirtyfour: 0,
  thirtyfive: 0,
  thirtysix: 0,
  //Others
  black: 0, //Placed on black
  red: 0, //Placed on red
  even: 0, //Placed on pair
  odd: 0, //Placed on impair
  oneToEighteen: 0, //Placed 1 - 18
  nineteenToThirtysix: 0, //Placed 19 -36
  oneToTwelve: 0, //Placed 1 - 12
  thirteenToTwentyfour: 0, //Placed 13 - 24
  twentyfiveToThirtysix: 0, //Placed 25 - 36
  lineOne: 0,
  lineTwo: 0,
  lineThree: 0,
};

export default {
  name: "App",
  mixins: [MixinMetamaskConnect],
  components: {
    AtomNotify,
    MoleculeModalLogout,
  },
  data() {
    return {
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
      data,
      columns,
      bettingChips: Object.assign({}, BETTING_CHIPS_DEFAULT),
    };
  },
  computed: {
    ...mapState({
      address: (state) => state.wallet.provider?.address || "",
    }),
  },
  methods: {
    handleReset() {
      this.bettingChips = Object.assign({}, BETTING_CHIPS_DEFAULT);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
}
</style>
