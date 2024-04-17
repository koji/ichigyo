/**
 * Removes duplicates from an array of numbers or strings.
 * @param arr - The array to remove duplicates from.
 * @returns A new array with duplicates removed.
 */
export const removeDuplicated = <T extends number | string>(arr: T[]): T[] => [
  ...new Set(arr),
]

/**
 * Gets the last element of an array.
 * @param arr - The array to get the last element from.
 * @returns The last element of the array.
 */
export const last = (arr: Array<any>) => arr[arr.length - 1]

/**
 * Gets the first element of an array.
 * @param arr - The array to get the first element from.
 * @returns The first element of the array.
 */
export const first = (arr: Array<any>) => arr[0]

/**
 * Converts an array to a string.
 *
 * @param arr - The array to be converted.
 * @returns The input array converted to a string, with elements separated by commas.
 *
 * @example
 * ```typescript
 * const result = arrToString(['hello', 'world']);
 * console.log(result); // 'hello,world'
 * ```
 */
export const arrToString = (arr: Array<any>) => arr.join(',')

/**
 * Finds the index of a given element in an array.
 *
 * @param arr - The array in which to find the element.
 * @param element - The element to find.
 * @returns The index of the element in the array, or -1 if the element is not found.
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4, 5];
 * const element = 3;
 * const index = findIndex(arr, element);
 * console.log(index); // 2
 * ```
 */
export const findIndex = <T>(arr: T[], element: T): number =>
  arr.indexOf(element)

/**
 * Checks if an array is sorted in ascending or descending order.
 *
 * @param {T[]} arr - The array to check.
 * @param {SortType} sortType - The type of sort ('asc' or 'desc').
 * @returns {boolean} Returns true if the array is sorted according to the sortType, otherwise false.
 */
type SortType = 'asc' | 'desc'
export const isSorted = <T>(arr: T[], sortType: SortType) =>
  sortType === 'asc'
    ? arr.every(
        (element: T, index: number) => index === 0 || element > arr[index - 1]
      )
    : arr.every(
        (element: T, index: number) => index === 0 || element < arr[index - 1]
      )