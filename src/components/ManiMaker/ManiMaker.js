import React from "react"
import "./ManiMaker.css"

export const ManiMaker = props => {
  return (
    <section className="mani-maker-section"> 
    <h2>Generate a random manicure</h2>
    <h3>Choose up to 10 colors from your collection!</h3>
      <input
        className="number-input"
        type="number"
        min={0}
        max={10}
        placeholder="0"
      />
      <button
      className="submit-generate"
      type="submit"
      >
        generate!
      </button>
      <section className="mani-color-section">

      </section>
    </section>
  )
}