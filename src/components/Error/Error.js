import React from "react"
import "./Error.css"
import warning from "../../assets/warning.png"
import PropTypes from "prop-types"

export const Error = ({ errorMessage }) => {
  return (
    <section className="errors">
      <h2>{errorMessage}</h2>
      <img className="warning" src={warning} alt="error!"/>
    </section>
  )
}

Error.propTypes = {
  errorMessage: PropTypes.string
}