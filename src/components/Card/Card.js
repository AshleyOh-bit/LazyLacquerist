import "./Card.css"
import PropTypes from "prop-types"

export const Card = ({ image, brand, colorway, hue }) => {

  return (
    <section className="card collection-border">
      <section className="polish-image">
        {image && <img src={image} alt={ `${brand} nail polish in ${colorway}`}/>}
      </section>
      <section className="polish-details">
        <h3 className="brand-name">Brand: {brand}</h3>
        <h3 className="colorway">Colorway: {colorway}</h3>
        {hue && <div className="hue-display">
                  <h3>Hue: </h3>
                  <div className="hue" style={{backgroundColor: hue}}></div>
                </div>}
      </section>
    </section>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string.isRequired,
  colorway: PropTypes.string.isRequired,
  hue: PropTypes.string
}