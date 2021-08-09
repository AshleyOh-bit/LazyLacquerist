import React from "react"
import "./ManiMaker.css"
import PropTypes from "prop-types"
import { Swatch } from "../Swatch/Swatch"

export class ManiMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numInput: 0,
      limit: props.collection.length,
      collection: props.collection,
      randomMani: [],
      isValid: true,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
      this.setState({ [name]: value }, () => {
        this.checkValidity(value)
      })
  }

  checkValidity = (value) => {
    const validInput = new RegExp('^[0-9]*$')
    if (validInput.test(value) && value <= this.state.collection.length) {
        this.setState({isValid: false })
    } else {
      this.setState({isValid: true })
    }
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
  }

  render() {
    return (
      <section className="mani-maker-section"> 
      {!this.state.collection.length ? <h2 className="greeting">Please add polishes to your collection to use this feature!</h2>
      :
      <>
      <section className="mm-instructions">
        <h2>Generate a random manicure</h2>
        <h3>Click the arrows to choose up to 10 colors from your collection!</h3>
      </section>
      <section className="generator">
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
        data-cy="generate"
        disabled={this.state.isValid}
        className="submit-generate"
        type="submit"
        onClick={(event) => this.generateMani(event, this.state.numInput)}
      >
        generate!
      </button>
      </section>
      <div className=".format-section">
        <section className="mani-color-section">
          <div className="format-swatches">
            <Swatch randomMani={this.state.randomMani}/>
          </div>
        </section>
      </div>
      </>
    }
    </section>
    )
  }
}

ManiMaker.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    colorway: PropTypes.string.isRequired,
    hue: PropTypes.string
  })).isRequired,
}