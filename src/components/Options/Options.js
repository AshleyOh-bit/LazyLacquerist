import React from "react"
import PropTypes from "prop-types"

export const Options = ({ filteredPolishes, brand, name, polishes }) => {
  let listOptions, chosenBrand, foundBrand;
  if (filteredPolishes) {
    listOptions = filteredPolishes.map(polish => {
      return (
        <option key={polish.id} value={polish.brand}>
          {polish.brand}
        </option>
      );
    });
    return listOptions
  } else {
    chosenBrand = brand
    foundBrand = polishes.find(polish => {
      return polish.brand === chosenBrand
    })
    if (!foundBrand) {
      return listOptions = <></>
    } else {
      listOptions = foundBrand.colors.map(color => {
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
    listOptions
  )
}