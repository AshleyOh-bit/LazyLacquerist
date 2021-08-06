import React from "react"

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      polishes: props.polishes,
      filtPolishs: [],
      brandOptions: [],
      colorOptions: [],
      brand: "",
      colorway: "",
      hue: ""
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value})
    const lowerCase = this.state[name].toLowerCase()
    console.log(this.state[name])
    const filteredPolishes = this.state.polishes.filter(polish => {
      console.log(polish.brand.includes(this.state.brand))
      const polishCase = polish[name].toLowerCase()
      return polishCase.includes(lowerCase)
    })

    const listOptions = filteredPolishes.map(polish => {
      return (
        <option key={polish.id} value={polish.brand}>
          {polish.brand}
        </option>
      );
    });
    this.setState({ filtPolishes: filteredPolishes, brandOptions: listOptions });
    console.log(this.state.filtPolishes)
    //this.setState({ filtPolishes: filteredPolishes, colorOptions: listOptions });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleChange(event)}>
        <input 
          required
          type="search" 
          name="brand" 
          placeholder="Add your brand"
          list="brands"
          id="brand" 
          value={this.state.brand} 
          onChange={event => this.handleChange(event)}
        />
        <datalist 
          id="brands">{this.state.brandOptions}
        </datalist>
        {/* <input 
          disabled
          required
          type="search" 
          name="colorway" 
          placeholder="Add your colorway" 
          value={this.state.colorway} 
          onChange={}
        />
        <input 
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
          type="submit">Add me!</button>
      </form>
    )
  }

}