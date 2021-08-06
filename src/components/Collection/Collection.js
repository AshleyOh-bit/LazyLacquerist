import "./Collection.css"
import { Card } from "../Card/Card"
import { Link } from 'react-router-dom';

export const Collection = ({ collection }) => {

  const cards = collection.map(polish => {
    return (
      <Card
        key={polish.id}
        id={polish.id}
        image={polish.image}
        brand={polish.brand}
        colorway={polish.colorway}
        hue={polish.hue}
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