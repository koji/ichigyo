import { describe, it, expect } from 'vitest'
import { first, last, removeDuplicated, arrToString, findIndex } from '../array'

const mockStrArr = ['a', 'b', 'c', 'd']
const mocNumberArr = [1, 0, 3, 6, 9, 8]
const mockOne = {
  name: 'john',
  age: 20,
}
const mockTwo = {
  name: 'ken',
  age: 100,
}
const mockThree = {
  name: 'alice',
  age: 30,
}
const mockObjArr = [mockOne, mockTwo, mockThree]

describe('last', () => {
  it('should return the last element - string array', () => {
    const result = last(mockStrArr)
    expect(result).toEqual('d')
  })

  it('should return the last element - number array', () => {
    const result = last(mocNumberArr)
    expect(result).toEqual(8)
  })

  it('should return the last element - obj array', () => {
    const result = last(mockObjArr)
    expect(result).toBe(mockThree)
  })
})

describe('first', () => {
  it('should return the last element - string array', () => {
    const result = first(mockStrArr)
    expect(result).toEqual('a')
  })

  it('should return the last element - number array', () => {
    const result = first(mocNumberArr)
    expect(result).toEqual(1)
  })

  it('should return the last element - obj array', () => {
    const result = first(mockObjArr)
    expect(result).toBe(mockOne)
  })
})

describe('removeDuplicated', () => {
  it('should remove duplicated elements str', () => {
    const mockStrArr = ['a', 'b', 'c', 'e', 'a', 'b', 'f']
    const result = removeDuplicated(mockStrArr)
    expect(result).toEqual(['a', 'b', 'c', 'e', 'f'])
  })

  it('should remove duplicated elements number', () => {
    const mockNumArr = [1, 2, 3, 4, 9, 1, 4]
    const result = removeDuplicated(mockNumArr)
    expect(result).toEqual([1, 2, 3, 4, 9])
  })
})

describe('arrToString', () => {
  it('should return the correct string for an array of strings', () => {
    const result = arrToString(['hello', 'world'])
    expect(result).to.equal('hello,world')
  })

  it('should return the correct string for an array of numbers', () => {
    const result = arrToString([1, 2, 3])
    expect(result).to.equal('1,2,3')
  })

  it('should handle empty arrays', () => {
    const result = arrToString([])
    expect(result).to.equal('')
  })
})

describe('findIndex', () => {
  it('should return the correct index when the element is in the array number', () => {
    const arr = [1, 2, 3, 4, 5]
    const element = 3
    const result = findIndex(arr, element)
    expect(result).to.equal(2)
  })

  it('should return -1 when the element is not in the array', () => {
    const arr = [1, 2, 3, 4, 5]
    const element = 6
    const result = findIndex(arr, element)
    expect(result).to.equal(-1)
  })

  it('should return the correct index when the element is in the array string', () => {
    const arr = ['a', 'v', 'd', 'y', 'e']
    const element = 'e'
    const result = findIndex(arr, element)
    expect(result).to.equal(4)
  })

  it('should return the correct index when the element is in the array object', () => {
    const result = findIndex(mockObjArr, mockTwo)
    expect(result).to.equal(1)
  })
})
