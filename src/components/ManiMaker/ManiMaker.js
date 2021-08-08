import React from "react"
import "./ManiMaker.css"

export class ManiMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numInput: 0,
      limit: props.collection.length,
      collection: props.collection,
      randomMani: []
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  generateMani = (event, num) => {
    event.preventDefault()
    const random = () => {
      return Math.floor(Math.random() * this.state.collection.length)
    }
    const indeces = []
      let number;
      for (var i = 0; i < num; i++) {
        number = random()
        indeces.push(number)
      }
      const randomPols = indeces.reduce((acc, currentNum) => {
        acc.push(this.state.collection[currentNum])
        return acc
      }, [])
      this.setState({ numInput: 0 })
      this.setState({ randomMani: randomPols })
    return this.createSwatches(this.state.randomMani)
  }

  createSwatches = (randomMani) => {
    const swatches = randomMani.map((polish, index) => {
      return (
        <section className="swatch" key={index}>
          <div className="splotch" style={{backgroundColor: polish.hue}}></div>
          <h3 className="swatch-info">{polish.brand}: {polish.colorway}</h3>
        </section>
      )
    })
    return swatches
  }

  render() {
    return (
      <section className="mani-maker-section"> 
      <h2>Generate a random manicure</h2>
      <h3>Click the arrows to choose up to 10 colors from your collection!</h3>
        <input
          className="number-input"
          type="number"
          min={0}
          max={(this.state.limit < 10) ? this.state.limit : 10}
          placeholder="0"
          value={this.state.numInput}
          name="numInput"
          onChange={event => this.handleChange(event)}
        />
        <button
        disabled={!this.state.numInput}
        className="submit-generate"
        type="submit"
        onClick={(event) => this.generateMani(event, this.state.numInput)}
        >
          generate!
        </button>
        <section className="mani-color-section">
          <div className="format-swatches">
            {this.createSwatches(this.state.randomMani)}
          </div>
        </section>
      </section>
    )
  }
}
