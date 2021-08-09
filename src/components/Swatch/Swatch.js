import React from "react"
import PropTypes from "prop-types"

export const Swatch = ({ randomMani }) => {
  const swatches = randomMani.map((polish, index) => {
    return (
      <section className="swatch" key={index}>
        {polish.hue ? <div className="splotch" style={{backgroundColor: polish.hue}}></div> : <></>}
        <h3 className="swatch-info">{polish.brand}: {polish.colorway}</h3>
      </section>
    )
  })
  return swatches
}