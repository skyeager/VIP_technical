let nums = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]
let newArray = []

//pass array of integers
//return an array of 10-integer in string pairs
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

//no repeat indices

// function uniquePairs(arr) {
//   const arrayOfStrings = arr.map((element) => {
//     return element.join('-')
//   })
//   const newSet= new Set(arrayOfStrings)
//   const arrray=[]
//   newSet.forEach(element){
//     //go through each array, filter pair based on whether it exists or not
//   }
// }

// console.log(uniquePairs(allPairs(nums)))

// ******************

//use .sort for the last problem

// const allPairs = nums?.map((num) => {
//   let x = 10 - num
//   let pair = num + '-' + x
//   newArray.push(pair)
//   let uniqueArray = [...new Set(newArray)]

//   return uniqueArray
// })
// console.log(allPairs)

// uniqueArray?.forEach((pair) => {
//   pair = [num + ',' + x]
// })

// const allPairs = nums?.map((num) => {
//   let x = 10 - num
//   let pair = num + '-' + x
//   newArray.push(pair)
//   let uniqueArray = []
//   newArray.forEach((a) => {
//     if (!uniqueArray.includes(a)) {
//       uniqueArray.push(a)
//     }
//   })
//   console.log(uniqueArray)
//   return uniqueArray
// })

// let uniqueArray = newArray.filter((element, index) => {
//   return newArray.indexOf(element) === index
// })

// const uniquePairs = newArray.filter((n, i) => newArray.indexOf(n) === i)
// console.log(uniquePairs)

// let uniqueArray = newArray.filter((element, index) => {
//   return newArray.indexOf(element) === index
// })
// console.log(newArray)

// for (let i = 0; i < nums.length; i++) {
//   if (newArray.indexOf(nums[i]) === -1) {
//     newArray.push(nums[i])
//   }
//   console.log(newArray)
//   return newArray
// }

// remove duplicates first from nums then do allpairs function above

// const allPairs = (num) => {

//   for (let i = 0; i < nums.length; i++) {
//     let x = 10 - num
//     if (num + ',' + x === [i]) {
//       return
//     } else {
//       let pair = [num + ',' + x]
//       newArray.push(pair)
//       console.log(pair)
//     }
//   }
//   return newArray
// }

// allPairs()

// const allPairs = nums?.map((num) => {
//   let x = 10 - num
//   let pair = [num + ',' + x]
//   if (pair) {
//     return
//   } else {
//     newArray.push(pair)
//   }

// })
// console.log(newArray)

// if (!newArray.includes([pair])) {
//   // newArray.push([pair])
// }

// .filter((pair) => {
//   if (newArray.includes([pair])) {
//     newArray.pop([pair])
//   }
// })
// console.log(newArray)
// return newArray

// newArray?.forEach((num) => {
//   if (newArray.includes([num])) {
//     newArray.pop(num)
//   }
// })

// // nums.forEach((pair) => {
//
// // })

// **********THIS WORKED WITH A REGULAR ARRAY*******
// let uniqueArray = newArray.filter((element, index) => {
//   return newArray.indexOf(element) === index
// })

// const allPairs = () => {
//   let a = [i]
//   let x = 10 - a
//   let pair = [a + ',' + x]
//   for (let i = 0; i < newArray.length; i++) {
//     newArray.push(pair)
//   }
//   if (pair) {
//     return
//   }
// }
// console.log(newArray)
// return newArray
