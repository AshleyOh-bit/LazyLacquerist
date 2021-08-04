import "./Card.css"

export const Card = ({ image, brand, colorway, hue }) => {

  return (
    <section className="card">
      <section className="polish-image">
        <img src={image}/>
      </section>
      <section className="polish-details">
        <h3 className="brand-name">Brand: {brand}</h3>
        <h3 className="colorway">Colorway: {colorway}</h3>
        <div className="hue-display">
          <h3>Hue: </h3>
          <div className="hue" style={{backgroundColor: hue}}></div>
        </div>
      </section>
    </section>
  )
}