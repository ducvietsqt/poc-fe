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
export const CHIP_NUMBER = 1;

export const BETTING = {
  [NUMBERS.ZERO]: false,
  [NUMBERS.ONE]: false,
  [NUMBERS.TWO]: false,
  [NUMBERS.THREE]: false,
  [NUMBERS.FOUR]: false,
  [NUMBERS.FIVE]: false,
  [NUMBERS.SIX]: false,
  [NUMBERS.SEVEN]: false,
  [NUMBERS.EIGHT]: false,
  [NUMBERS.NINE]: false,
  [NUMBERS.TEN]: false,
  [NUMBERS.ELEVEN]: false,
  [NUMBERS.TWELVE]: false,
  [NUMBERS.THIRTEEN]: false,
  [NUMBERS.FOURTEEN]: false,
  [NUMBERS.FIFTEEN]: false,
  [NUMBERS.SIXTEEN]: false,
  [NUMBERS.SEVENTEEN]: false,
  [NUMBERS.EIGHTEEN]: false,
  [NUMBERS.NINETEEN]: false,
  [NUMBERS.TWENTY]: false,
  [NUMBERS.TWENTYONE]: false,
  [NUMBERS.TWENTYTWO]: false,
  [NUMBERS.TWENTYTHREE]: false,
  [NUMBERS.TWENTYFOUR]: false,
  [NUMBERS.TWENTYFIVE]: false,
  [NUMBERS.TWENTYSIX]: false,
  [NUMBERS.TWENTYSEVEN]: false,
  [NUMBERS.TWENTYEIGHT]: false,
  [NUMBERS.TWENTYNINE]: false,
  [NUMBERS.THIRTY]: false,
  [NUMBERS.THIRTYONE]: false,
  [NUMBERS.THIRTYTWO]: false,
  [NUMBERS.THIRTYTHREE]: false,
  [NUMBERS.THIRTYFOUR]: false,
  [NUMBERS.THIRTYFIVE]: false,
  [NUMBERS.THIRTYSIX]: false,
  //Others
  black: false, //Placed on black
  red: false, //Placed on red
  even: false, //Placed on pair
  odd: false, //Placed on impair
  oneToEighteen: false, //Placed 1 - 18
  nineteenToThirtysix: false, //Placed 19 -36
  oneToTwelve: false, //Placed 1 - 12
  thirteenToTwentyfour: false, //Placed 13 - 24
  twentyfiveToThirtysix: false, //Placed 25 - 36
  lineOne: false,
  lineTwo: false,
  lineThree: false,
}