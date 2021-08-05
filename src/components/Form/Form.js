import React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allPolishes: props.polishes,
      brand: "",
      colorway: "",
      hue: ""
    }
  }

  render() {
    return (
      <>
        <input type="text" name="brand" value={this.state.brand} onChange={}/>
        <input type="text" name="colorway" value={this.state.colorway} onChange={}/>
        <input type="text" name="hue" value={this.state.hue} onChange={}/>
      </>
    )
  }

}