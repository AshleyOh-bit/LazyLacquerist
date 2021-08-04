import "./Collection.css"
import { Card } from "../Card/Card"

export const Collection = ({ collection }) => {
  //const { image, brand, colorway, hue } = props

  const cards = collection.map(polish => {
    return (
      <Card
        image={polish.image}
        brand={polish.brand}
        colorway={polish.colorway}
        hue={polish.hue}
      />
    )
  })

  return (
    <section className="polish-display">
      {cards}
    </section>
  )
}