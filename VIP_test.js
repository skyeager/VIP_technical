let nums = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]
let newArray = []

const allPairs = nums?.map((num) => {
  let x = 10 - num
  let pair = [num + ',' + x]
  newArray.push(pair)
})
console.log(newArray)
return newArray
