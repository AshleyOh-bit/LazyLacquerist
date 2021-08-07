import React from "react"
import { Link } from "react-router-dom"
import "./Error.css"

export const Error = props => {
  return (
    <h2>{props.error}</h2>
  )
}