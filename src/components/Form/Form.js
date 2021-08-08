import React from "react";
import "./Form.css";
import { Link } from 'react-router-dom';
import { CirclePicker } from "react-color";
import PropTypes from "prop-types"

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      polishes: props.polishes,
      filtPolishs: [],
      filtColors: [],
      brandOptions: [],
      colorOptions: [],
      brand: "",
      colorway: "",
      hue: "",
      image: "",
      bgBrandColor: "",
      bgColorwayColor: "",
      submitReady: true
    }
  }

  buildBrandOptions = (location, name) => {
    const listOptions = location.map(polish => {
      return (
        <option key={polish.id} value={polish[name]}>
          {polish[name]}
        </option>
      );
    });
    return listOptions
  }

  buildColorOptions = () => {
    const chosenBrand = this.state.brand
    const foundBrand = this.state.polishes.find(polish => {
      return polish.brand === chosenBrand
    })

    if (!foundBrand) {
      return
    } else {
      const listOptions = foundBrand.colors.map(color => {
        return (
          <option key={color.hue} value={color.colorway}>
            {color.colorway}
          </option>
        );
      });
      return listOptions
    } 
  }

  filterByBrand = name => {
    const lowerCase = this.state[name].toLowerCase()
    const filtered = this.state.polishes.filter(polish => {
      const polishCase = polish[name].toLowerCase()
      return polishCase.includes(lowerCase)
    })
    return filtered
  }

  handleBrandChange = event => {
    this.validateInputs()
    this.handleChange(event)
    const filteredPolishes =  this.filterByBrand(event.target.name)
    const brandOpts = this.buildBrandOptions(filteredPolishes, "brand")
    this.setState({ filtPolishes: filteredPolishes, brandOptions: brandOpts }, () => {
      this.handleClick(event, "bgBrandColor", "brand")
    });
  }

  handleColorwayChange = event => {
    this.handleChange(event)
    const colorOpts = this.buildColorOptions()
    this.setState({ colorOptions: colorOpts }, () => { this.handleClick(event, "bgColorwayColor", "colorway")
  });
  }

  handleClick = (event, buttonName, input) => {
    this.validateInputs()
    event.preventDefault()
    if (!this.state[input]) {
      this.setState({ [buttonName]: "" })
    }

    if (this.state[input]) {
      this.setState({ [buttonName]: "#15a584" })
    }
  }

  sendPolish = (event) => {
    const freshPolish = {
      id: Date.now(),
      brand: this.state.brand,
      colorway: this.state.colorway,
      hue: this.state.hue,
      image: this.state.image
    }
    this.props.addPolish(freshPolish)
  }

  setHue = color => {
    this.setState({ hue: color.hex})
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  validateInputs = () => {
    if (this.state.brand && this.state.colorway) {
      this.setState({ submitReady: false })
    } else {
      this.setState({ submitReady: true })
    }
  }

  render() {
    return (
      <section className="add-view polish-display">
        <form className="card add-border">
          <h2>Add a polish!</h2>
          <section className="brand-inputs">
            <input 
            required
            type="search" 
            name="brand" 
            placeholder="Add brand"
            list="brands"
            id="brand" 
            value={this.state.brand} 
            onChange={event => this.handleBrandChange(event)}
            onClick={event => this.handleChange(event)}
            />
            <datalist 
              id="brands">{this.state.brandOptions}
            </datalist>
            <div
              className="add-input" 
              style={{backgroundColor: this.state.bgBrandColor}}
            >
                ok
            </div>
          </section>
          <section className="brand-inputs colorway-input">
            <input 
              required
              type="search" 
              name="colorway" 
              list="colors"
              placeholder="Add colorway" 
              value={this.state.colorway} 
              onChange={event => this.handleColorwayChange(event)}
            />
            <datalist 
              id="colors">{this.state.colorOptions}
            </datalist>
            <div
              className="add-input" 
              style={{backgroundColor: this.state.bgColorwayColor}}
            >
                ok
            </div>
          </section>
          <section className="image-input">
            <input 
              type="text"
              name="image"
              placeholder="Add Image"
              value={this.state.image}
              onChange={event => this.handleChange(event)}
              onClick={event => this.handleChange(event)}
            />
          </section>
          <section className="color-picker">
            <CirclePicker 
              disabled={this.state.inputStatus}
              color={this.state.hue} 
              onChange={this.setHue}
            />
          </section>
          <Link to="/collection"><button 
            disabled={this.state.submitReady}
            type="submit" 
            className="add-button" 
            onClick={(event) => this.sendPolish(event)}>
              Add me!
            </button></Link>
        </form>
      </section>
    )
  }

}

Form.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    colorway: PropTypes.string.isRequired,
    hue: PropTypes.string
  })).isRequired,
  addPolish: PropTypes.func.isRequired
}