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
  return sum;
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
      state.betting.oneToEighteen
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

  if (state.betting[state.number] != 0) return true

  return false;
};