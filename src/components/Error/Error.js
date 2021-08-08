import React from "react"
import "./Error.css"
import PropTypes from "prop-types"

export const Error = ({ errorMessage }) => {
  return (
    <h2>{errorMessage}</h2>
  )
}

Error.propTypes = {
  errorMessage: PropTypes.string
}