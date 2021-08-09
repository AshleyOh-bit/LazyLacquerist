export const cleanData = data => {
  const freshData = data.map(currentPolish => {
    return {
      id: currentPolish.id,
      brand: currentPolish.brand,
      image: currentPolish.image_link,
      colors: currentPolish.product_colors
    }
  })

  const findUnrepeated = array => [...new Set(array)]

  const justBrandNames = freshData.map(element => {
    return element.brand
  })

  const uniqueBrands = findUnrepeated(justBrandNames)

  const organizedData = uniqueBrands.map(name => {
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
    const cleanColors = uniqueColors.map(color => {
      const newColor = {}
      newData.colors.forEach(origCol => {
        if (origCol.colour_name === color) {
          newColor.colorway = color
          newColor.hue = origCol.hex_value
        }
      })
      return newColor
    })
    newData.colors = cleanColors
    return newData
  })
  return organizedData
}

export const checkForErr = response => {
  console.log(response)
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}