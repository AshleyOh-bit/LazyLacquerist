import React from "react"
import PropTypes, { string } from "prop-types"

export const Options = ({ filteredPolishes, brand, polishes }) => {
  let listOptions, foundBrand;
  if (filteredPolishes) {
    listOptions = filteredPolishes.map(polish => {
      return (
        <option key={polish.id} value={polish.brand}>
          {polish.brand}
        </option>
      );
    });
  } else {
    foundBrand = polishes.find(polish => {
      return polish.brand === brand
    })
    if (!foundBrand) {
      listOptions = <></>
    } else {
      listOptions = foundBrand.colors.map(color => {
        return (
          <option key={color.hue} value={color.colorway}>
            {color.colorway}
          </option>
        );
      });
    } 
  }
  return (
    listOptions
  )
}

Options.propTypes = {
  filteredPolishes: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    hue: PropTypes.string
  })),
  polishes: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    hue: PropTypes.string
  })),
  brand: string
}