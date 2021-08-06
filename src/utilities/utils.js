export const cleanData = data => {
  const freshData = data.map(currentPolish => {
    return {
      id: currentPolish.id,
      brand: currentPolish.brand,
      image: currentPolish.image_link,
      colors: currentPolish.product_colors
    }
  })
  return freshData
}

//find a way to consolidate multiple brand name matches

export const checkForErr = response => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}