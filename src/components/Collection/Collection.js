import "./Collection.css"
import { Card } from "../Card/Card"
import { Link } from 'react-router-dom';

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
      <Link to="/add-a-polish"> <button data-cy="polish-button" className="polish-button">Add a polish</button> </Link>
      {!collection.length ? <h2>Add a polish to get started!</h2> : <section className="polish-display">
         {cards}
      </section>}
    </section>
  )
}