export const cleanData = (data) => {
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

export const checkForErr = (response) => {
  if(response.status >= 500) {
    return "Our servers are currently down. Please try again."
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}