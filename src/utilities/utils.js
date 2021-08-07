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
//inside reduce, filter through the current array's polish brands
//return only the brands with duplicates in array
//then, map over this array of duplicates to create a new array of all colors
//.flat that bb
//create a new array without duplicates using Set
//reset the currentPolishes colors to be this new Set
//push the currentPolish into the accumulator
//return the reduce


return freshData

}

export const checkForErr = response => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}