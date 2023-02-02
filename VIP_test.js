let nums = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]
let newArray = []

function allPairs(nums) {
  return nums.map((num) => {
    let x = 10 - num
    return [num, x]
  })
}
console.log(allPairs(nums))

pairs = allPairs(nums)

function uniqPairs(pairs) {
  const seen = new Set()
  return pairs.filter((pair) => {
    const key = pair.join('')
    if (seen.has(key)) {
      return false
    } else {
      seen.add(key)
      return true
    }
  })
}
console.log(uniqPairs(pairs))

function uniqPairs(pairs) {
  const seen = new Set()
  return pairs.filter((pair) => {
    const key = pair.sort().join('')
    if (seen.has(key)) {
      return false
    } else {
      seen.add(key)
      return true
    }
  })
}
console.log(uniqPairs(pairs))
