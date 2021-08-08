import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export const Home = props => {
  return (
    <section className="home-view">
      <section className="buttons">
        <Link to="/mani-maker"> <button className="nav-home">Mani-Maker</button> </Link>
        <Link to="/collection"> <button className="nav-home">My Collection</button> </Link>
      </section>
      <section className="polish-bottle">
        <img src="../../bottle-icon.jpeg" />
      </section>
    </section>
  )
}