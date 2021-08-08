import "./Collection.css"
import { Card } from "../Card/Card"
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

export const Collection = ({ collection }) => {

  const cards = collection.map((polish, index) => {
    return (
      <Card
        key={index}
        {...polish}
      />
    )
  })

  return (
    <section className="collection">
      <Link to="/add-a-polish"> <button className="polish-button">Add a polish</button> </Link>
      <section className="polish-display">
        {cards}
      </section>
    </section>
  )
}

Collection.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    colorway: PropTypes.string.isRequired,
    hue: PropTypes.string
  }))
}