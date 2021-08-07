export const cleanData = data => {
  const freshData = data.map(currentPolish => {
    return {
      id: currentPolish.id,
      brand: currentPolish.brand,
      image: currentPolish.image_link,
      colors: currentPolish.product_colors
    }
  })
  console.log(freshData)

//reduce through the array
// const consolidatedBrands = freshData.reduce((acc, currentBrand, index, array) => {
// //inside reduce, filter through the current array's polish brands
// //return only the brands with duplicates in array
// const duplicateBrands = array.filter(brand => {
//   return currentBrand.brand === brand.brand
// })
// console.log("duplicatedBrands", duplicateBrands)

// //then, map over this array of duplicates to create a new array of all colors
// const allColors = duplicateBrands.map(dupBrand => {
//   return dupBrand.colors
// })
// //.flat that bb
// console.log("allColors", allColors)
// const allColorsList = allColors.flat()
// //create a new array without duplicates using Set
// console.log("allColorsList", allColorsList)
// const findUnrepeated = array => [...new Set(array)]
// //reset the currentPolishes colors to be this new Set
// currentBrand.colors = findUnrepeated(allColorsList)
// //push the currentPolish into the accumulator
// console.log(currentBrand.colors)

// const addBest = () => {
//   console.log("here")
//   for (var i = 0; i < array.length; i++) {
//   console.log(array[i])
//   console.log("hey")
//   if (acc[i].brand === currentBrand.brand) {
//     console.log("WIN")
//   } else {
//     console.log(acc[i].brand)
//   }
// }
// }
// addBest()


// acc.push(currentBrand)
// //return the reduce

//   return acc
// }, [])

const consolidatedBrands = []
const sorted = freshData.sort((polA, polB) => {
  return (polA.brand < polB.brand) ? -1 : (polA.brand > polB.brand) ? 1 : 0;
})

console.log("sorted", sorted)
const justBrands = sorted.map(element => {
  return element.brand
})

console.log(justBrands)
const findUnrepeated = array => [...new Set(array)]
const uniqueNames = findUnrepeated(justBrands)
console.log(uniqueNames)

const justOnce = uniqueNames.map(name => {
  const newData = {}
  newData.colors = []
  freshData.forEach(polObj => {
    if (polObj.brand === name) {
      newData.brand = name;
      newData.id = polObj.id;
      newData.image = polObj.image;
      polObj.colors.forEach(color => {
        newData.colors.push(color)
      })
    }
  })
  const justColorNames = newData.colors.map(color => {
    return color.colour_name
  })
  const uniqueColors = findUnrepeated(justColorNames)
  
  const justNames = uniqueColors.map(color => {
    const newColor = {}
    newData.colors.forEach(savCol => {
      if (savCol.colour_name === color) {
        newColor.colorway = color
        newColor.hue = savCol.hex_value
      }
    })
    return newColor
  })
  console.log(justNames)
  console.log(newData.colors)
  newData.colors = justNames
  return newData
})

console.log(justOnce)

// for (var i = 0; i < sorted.length; i++) {
//   if (!sorted[i].colors.length) {
//     sorted.splice(1, i)
//   } else if (sorted[i].brand === sorted[i + 1].brand) {
//     console.log("1", freshData[i].colors )
//     console.log("2", freshData[i +1].colors)
//     sorted[i].colors.concat(sorted[i + 1].colors)
//     console.log(sorted[i].colors)
    
//     sorted.splice(1, i + 1)
//     // consolidatedBrands.push(freshData[i])
//   } else {
//     console.log("hi")
//   }
//   console.log(sorted)
// }



return justOnce
}

export const checkForErr = response => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}