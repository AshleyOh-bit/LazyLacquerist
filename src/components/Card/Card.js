export const Card = (props) => {
  const { image, brand, colorway, hue } = props

  return (
    <section className="card">
      <section className="polish-image">
        <img src={image}/>
      </section>
      <section className="polish-details">
        <h3 className="brand-name">Brand: {brand}</h3>
        <h3 className="colorway">Colorway: {colorway}</h3>
        <h3 className="hue">Hue: {hue}</h3>
      </section>
    </section>
  )
}