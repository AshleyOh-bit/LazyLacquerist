export const cleanData = data => {
  const freshData = data.map(currentPolish => {
    return {
      id: currentPolish.id,
      brand: currentPolish.brand,
      image: currentPolish.image_link,
      colors: currentPolish.product_colors
    }
  })
  // console.log(freshData)

//   freshData.reduce((acc, currentPolish) => {
//     if (acc.inlcudes())

//   }, [])
//   return freshData
// }

//Goal: to iterate over the returned data and check for duplicate brand names
//if the brand name is a duplicate, concatenate that object's colors with the
//matching objects colors to consolidate the brands

//input: the fresh data array of objects
//output: a new (shorter) array of objects with no duplicates

//process: iterate over the freshdata array of objects
//for each polish object, compare the brand name to the next polish object
//if the brand names match, concatenate their polish colors
//splice the second element
//to do this, get into the array with sort
// console.log(freshData)

// const sorted = freshData.sort((polA, polB) => {
//   return (polA.brand < polB.brand) ? -1 : (polA.brand > polB.brand) ? 1 : 0
// })


// for (var i = 0; i < sorted.length; i++) {
//   if (sorted[i].brand === sorted[i + 1].brand) {
//     sorted[i].colors.concat(sorted[i + 1].colors)
//     sorted.splice(1, [i + 1])
//   } else {
//     console.log("booty")
//   }
// }
// console.log(sorted)


return freshData

}

export const checkForErr = response => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}