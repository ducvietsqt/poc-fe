import {
  CHIP_NUMBER,
  ROULETTE_NUMBERS,
  RED_NUMBERS,
  BLACK_NUMBERS
} from "@/constants/roulette.constant";

function areaBetCheck(equation, bet) {
  return equation && bet;
}


export const getBetSum = state => {
  let sum = 0;
  for (const key in state.betting) {
    if (Object.hasOwnProperty.call(state.betting, key)) {
      sum += state.betting[key];
    }
  }
  return sum * CHIP_NUMBER;
};

export const win = state => {
  if (
    areaBetCheck(
      state.number % 2 == 0 && state.number != 0,
      state.betting.even
    )
  ) {
    return true;
  }
  if (areaBetCheck(state.number % 2 == 1, state.betting.odd)) {
    return true;
  }
  if (
    areaBetCheck(
      state.number <= 18 && state.number != 0,
      state.betting.oneToEighteen
    )
  ) {
    return true;
  }
  if (
    areaBetCheck(
      state.number >= 19,
      state.betting.nineteenToThirtysix
    )
  ) {
    return true;
  }
  if (
    areaBetCheck(
      state.number <= 12 && state.number != 0,
      state.betting.oneToTwelve
    )
  ) {
    return true;
  }

  if (
    areaBetCheck(
      state.number >= 13 && state.number <= 24,
      state.betting.thirteenToTwentyfour
    )
  ) {
    return true;
  }
  if (
    areaBetCheck(
      state.number >= 25,
      state.betting.twentyfiveToThirtysix
    )
  ) {
    return true;
  }
  if (
    areaBetCheck(
      state.number % 3 == 0 && state.number != 0,
      state.betting.lineOne
    )
  ) {
    return true;
  }
  if (
    areaBetCheck(state.number % 3 == 2, state.betting.lineTwo)
  ) {
    return true;
  }
  if (
    areaBetCheck(state.number % 3 == 1, state.betting.lineThree)
  ) {
    return true;
  }
  if (
    areaBetCheck(RED_NUMBERS.indexOf(state.number) != -1, state.betting.red)
  ) {
    return true;
  }
  if (
    areaBetCheck(BLACK_NUMBERS.indexOf(state.number) != -1, state.betting.black)
  ) {
    return true;
  }
  if (state.betting[state.number] != 0) return true

  return false;
};


export const betLayout = state => {
  let results = [];
  if (state.betting.even) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 2 == 0 && item != 0));
  }
  if (state.betting.odd) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 2 == 1));
  }
  if (state.betting.red) {
    results = results.concat(RED_NUMBERS);
  }
  if (state.betting.black) {
    results = results.concat(BLACK_NUMBERS);
  }
  if (state.betting.odd) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 2 == 1));
  }
  if (state.betting.oneToEighteen) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item <= 18 && item != 0));
  }
  if (state.betting.nineteenToThirtysix) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item >= 19));
  }
  if (state.betting.oneToTwelve) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item <= 12 && item != 0));
  }

  if (state.betting.thirteenToTwentyfour) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item >= 13 && item <= 24));
  }
  if (state.betting.twentyfiveToThirtysix) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item >= 25));
  }
  if (state.betting.lineOne) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 3 == 0 && item != 0));
  }
  if (state.betting.lineTwo) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 3 == 2));
  }
  if (state.betting.lineThree) {
    results = results.concat(ROULETTE_NUMBERS.filter(item => item % 3 == 1));
  }
  results = results.concat(ROULETTE_NUMBERS.filter(item => {
    return state.betting[item]
  }));

  console.log(`results:>>`, results)
  const res = [...new Set(results)]
  console.log(`res:>>`, res)
  return [...new Set(results)];
};