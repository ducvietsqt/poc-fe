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