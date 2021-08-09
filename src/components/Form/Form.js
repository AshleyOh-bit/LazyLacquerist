import React from "react";
import "./Form.css";
import { Link } from 'react-router-dom';
import { CirclePicker } from "react-color";
import PropTypes from "prop-types"
import { Options } from "../Options/Options"

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      polishes: props.polishes,
      filtPolishes: [],
      //brandOptions: [],
      //colorOptions: [],
      brand: "",
      colorway: "",
      hue: "",
      image: "",
      bgbrandColor: "",
      bgcolorwayColor: "",
      submitReady: true
    }
  }

  // buildColorOptions = () => {
  //   const chosenBrand = this.state.brand
  //   const foundBrand = this.state.polishes.find(polish => {
  //     return polish.brand === chosenBrand
  //   })
  //   if (!foundBrand) {
  //     return
  //   } else {
  //     const listOptions = foundBrand.colors.map(color => {
  //       return (
  //         <option key={color.hue} value={color.colorway}>
  //           {color.colorway}
  //         </option>
  //       );
  //     });
  //     return listOptions
  //   } 
  // }

  filterByBrand = () => {
    const lowerCase = this.state.brand.toLowerCase()
    const filtered = this.state.polishes.filter(polish => {
      const polishCase = polish.brand.toLowerCase()
      return polishCase.includes(lowerCase)
    })
    this.setState({ filtPolishes: filtered })
    return filtered
  }

  handleBrandChange = event => {
    this.validateInputs()
    this.handleChange(event)
    this.filterByBrand()
  }

  // handleColorwayChange = event => {
  //   this.validateInputs()
  //   this.handleChange(event)
  //   //const colorOpts = this.buildColorOptions()
  //   //this.setState({ colorOptions: colorOpts }, () => { this.changeButton("bgColorwayColor", "colorway")
  // //});
  // }

  changeButton = (buttonName, input) => {
    this.validateInputs()
    if (!this.state[input]) {
      this.setState({ [buttonName]: "" })
    }
    if (this.state[input]) {
      this.setState({ [buttonName]: "#15a584" })
    }
  }

  sendPolish = () => {
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
    this.setState({ [name]: value }, () => {
      this.changeButton(`bg${name}Color`, name)
    })
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
            data-cy="brand-input"
            value={this.state.brand} 
            onChange={event => this.handleBrandChange(event)}
            onClick={event => this.handleChange(event)}
            />
            <datalist 
              id="brands">{<Options filteredPolishes={this.state.filtPolishes}/>}
            </datalist>
            <div
              className="add-input" 
              data-cy="brand-button"
              style={{backgroundColor: this.state.bgbrandColor}}
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
              data-cy="colorway-input"
              value={this.state.colorway} 
              onChange={event => this.handleBrandChange(event)}
            />
            <datalist 
              // id="colors">{this.state.colorOptions}
              id="colors">{<Options polishes={this.state.polishes} brand={this.state.brand}/>}
            </datalist>
            <div
              className="add-input" 
              data-cy="colorway-button"
              style={{backgroundColor: this.state.bgcolorwayColor}}
            >
                ok
            </div>
          </section>
          <section className="image-input">
            <input 
              type="text"
              name="image"
              placeholder="Add Image"
              data-cy="image-input"
              value={this.state.image}
              onChange={event => this.handleChange(event)}
              onClick={event => this.handleChange(event)}
            />
          </section>
          <section className="color-picker">
            <CirclePicker 
              data-cy="hue-input"
              disabled={this.state.inputStatus}
              color={this.state.hue} 
              onChange={this.setHue}
            />
          </section>
          <Link to="/collection"><button 
            disabled={this.state.submitReady}
            type="submit" 
            className="add-button" 
            data-cy="form-submit"
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
  })),
  addPolish: PropTypes.func.isRequired
}