import React from "react"
import "./Error.css"
import warning from "../../assets/warning.png"

export const Error = props => {
  return (
    <section className="errors">
      <h2>{props.error}</h2>
      <img className="warning" src={warning} alt="error!"/>
    </section>
  )
}