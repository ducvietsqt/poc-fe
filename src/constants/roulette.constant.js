import { NUMBERS } from "@/constants/types.constant";

function makeRenderNumbers() {
  let results = []
  for (let index = 1; index < 13; index++) {
    const number = index * 3
    results.push(number)
    results.push(number - 1)
    results.push(number - 2)
  }
  return results
}

export const ROULETTE_NUMBERS_AMOUNT = 37;
export const ROULETTE_NUMBERS = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
]
export const RENDER_NUMBERS = makeRenderNumbers()
export const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
export const BLACK_NUMBERS = [2, 4, 6, 8, 11, 10, 13, 15, 17, 20, 24, 22, 26, 28, 29, 31, 33, 35]
export const CHIP_NUMBER = 5;

export const BETTING = {
  [NUMBERS.ZERO]: 0,
  [NUMBERS.ONE]: 0,
  [NUMBERS.TWO]: 0,
  [NUMBERS.THREE]: 0,
  [NUMBERS.FOUR]: 0,
  [NUMBERS.FIVE]: 0,
  [NUMBERS.SIX]: 0,
  [NUMBERS.SEVEN]: 0,
  [NUMBERS.EIGHT]: 0,
  [NUMBERS.NINE]: 0,
  [NUMBERS.TEN]: 0,
  [NUMBERS.ELEVEN]: 0,
  [NUMBERS.TWELVE]: 0,
  [NUMBERS.THIRTEEN]: 0,
  [NUMBERS.FOURTEEN]: 0,
  [NUMBERS.FIFTEEN]: 0,
  [NUMBERS.SIXTEEN]: 0,
  [NUMBERS.SEVENTEEN]: 0,
  [NUMBERS.EIGHTEEN]: 0,
  [NUMBERS.NINETEEN]: 0,
  [NUMBERS.TWENTY]: 0,
  [NUMBERS.TWENTYONE]: 0,
  [NUMBERS.TWENTYTWO]: 0,
  [NUMBERS.TWENTYTHREE]: 0,
  [NUMBERS.TWENTYFOUR]: 0,
  [NUMBERS.TWENTYFIVE]: 0,
  [NUMBERS.TWENTYSIX]: 0,
  [NUMBERS.TWENTYSEVEN]: 0,
  [NUMBERS.TWENTYEIGHT]: 0,
  [NUMBERS.TWENTYNINE]: 0,
  [NUMBERS.THIRTY]: 0,
  [NUMBERS.THIRTYONE]: 0,
  [NUMBERS.THIRTYTWO]: 0,
  [NUMBERS.THIRTYTHREE]: 0,
  [NUMBERS.THIRTYFOUR]: 0,
  [NUMBERS.THIRTYFIVE]: 0,
  [NUMBERS.THIRTYSIX]: 0,
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
}