import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import bottle from "../../assets/bottle-icon.png"

export const Home = () => {
  return (
    <section className="home-view">
      <h2>Welcome!</h2> 
      <h3>Would you like to generate a new mani palette or see your collection?</h3>
      <section className="buttons">
        <Link to="/mani-maker"> <button data-cy="maniMaker" className="nav-home">Mani-Maker</button> </Link>
        <Link to="/collection"> <button data-cy="myColl" className="nav-home">My Collection</button> </Link>
      </section>
      <section className="bottle-section">
        <img className="bottle-icon" src={bottle} alt={"An illustration of a nail polish bottle with a teal background"}/>
      </section>
    </section>
  )
}