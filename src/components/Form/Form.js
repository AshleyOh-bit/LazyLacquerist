import React from "react"
import "./Form.css"

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
      inputStatus: true,
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

  buildColorOptions = (brand) => {
    const foundBrand = this.state.polishes.find(polish => {
      return polish.brand === brand
    })

    if (foundBrand) {
      const listOptions = brand.map(color => {
        return (
          <option key={color.hex_value} value={color.colour_name}>
            {color.colour_name}
          </option>
        );
      });
      return listOptions
    } else {
      return 
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
    const { name, value } = event.target

    this.setState({ [name]: value})
    const filteredPolishes =  this.filterByBrand(name)
    const brandOpts = this.buildBrandOptions(filteredPolishes, "brand")
    // const colorOpts = this.buildColorOptions(name.colors)
    this.setState({ filtPolishes: filteredPolishes, brandOptions: brandOpts });
    //this.setState({ filtPolishes: filteredPolishes, colorOptions: colorOpts });
  }

  handleColorChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value})
    const colorOpts = this.buildColorOptions(name.colors)
    this.setState({ colorOptions: colorOpts });
  }

  render() {
    return (
      <section className="add-view polish-display">
        <form className="card add-border">
        <input 
          required
          type="search" 
          name="brand" 
          placeholder="Add your brand"
          list="brands"
          id="brand" 
          value={this.state.brand} 
          onChange={event => this.handleBrandChange(event)}
          
        />
        <datalist 
          id="brands">{this.state.brandOptions}
        </datalist>
        <input 
          // disabled={this.state.inputStatus}
          required
          type="search" 
          name="colorway" 
          placeholder="Add your colorway" 
          value={this.state.colorway} 
          onClick={event => this.handleColorChange(event)}
        />
        {/* <input 
          disabled
          required
          type="text" 
          name="hue" 
          placeholder="Pick your hue" 
          value={this.state.hue} 
          onChange={}
        /> */}
        <button 
          required
          disabled
          type="submit" className="add-button">Add me!</button>
      </form>
      </section>
    )
  }

}