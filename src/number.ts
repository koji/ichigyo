/**
 * Finds the maximum number in an array.
 * @param arr - The array to find the maximum number from.
 * @returns The maximum number in the array.
 */
export const findMax = (arr: number[]): number => Math.max(...arr)

/**
 * Finds the minimum number in an array.
 * @param arr - The array to find the minimum number from.
 * @returns The minimum number in the array.
 */
export const findMin = (arr: number[]): number => Math.min(...arr)

/**
 * Sorts an array of numbers in ascending order.
 * @param arr - The array to sort.
 * @returns A new array sorted in ascending order.
 */
export const sortNumAsc = (arr: number[]) => arr.slice().sort((a, b) => a - b)

/**
 * Sorts an array of numbers in descending order.
 * @param arr - The array to sort.
 * @returns A new array sorted in descending order.
 */
export const sortNumDesc = (arr: number[]) => arr.slice().sort((a, b) => b - a)

/**
 * Generates a random number between min (inclusive) and max (inclusive).
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 */
export const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Converts minutes to hours and minutes.
 *
 * @param mins - The number of minutes to be converted.
 * @returns An object with the number of hours and minutes.
 *
 * @example
 * ```typescript
 * const result = minsToHoursAndMins(90);
 * console.log(result); // { hours: 1, minutes: 30 }
 * ```
 */
type HoursAndMinutes = {
  hours: number
  minutes: number
}

export const minsToHoursAndMins = (mins: number): HoursAndMinutes => ({
  hours: Math.floor(mins / 60),
  minutes: mins % 60,
})

/**
 * Calculates the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average of the array of numbers.
 */
export const average = (arr: number[]) =>
  arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length

/**
 * Converts a binary number (as a string or number) to a decimal number.
 * @param binary - The binary number to be converted. Can be a string or a number.
 * @returns The decimal representation of the binary number.
 */
export const binaryToDecimal = (binary: string | number): number =>
  typeof binary === 'number'
    ? parseInt(binary.toString(), 2)
    : binary.length === 0
    ? 0
    : parseInt(binary, 2)
