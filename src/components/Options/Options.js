import React from "react"
import PropTypes from "prop-types"

export const Options = ({ filteredPolishes, brand, name, polishes }) => {
  if (filteredPolishes) {
    const listOptions = filteredPolishes.map(polish => {
      return (
        <option key={polish.id} value={polish.brand}>
          {polish.brand}
        </option>
      );
    });
    return listOptions
  }


  const buildColorOptions = () => {
    const chosenBrand = this.state.brand
    const foundBrand = this.state.polishes.find(polish => {
      return polish.brand === chosenBrand
    })
    if (!foundBrand) {
      return
    } else {
      const listOptions = foundBrand.colors.map(color => {
        return (
          <option key={color.hue} value={color.colorway}>
            {color.colorway}
          </option>
        );
      });
      return listOptions
    } 
  }
  return (
    <div></div>
  )

}