import React from 'react';
import './App.css';

import { apiCall } from "../../utilities/apiCalls"

import { Collection } from "../Collection/Collection"

import nails from "../../assets/mani-icon.png"
import CNDblackpool from "../../assets/CND-Blackpool.jpeg"

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      polishes: [],
      collection: [
        {
          id: 0,
          image: CNDblackpool,
          brand: "CND",
          colorway: "blackpool",
          hue: "#341555"
        }
      ]
    }
  }

  componentDidMount() {
    apiCall("nail_polish")
    .then(response => this.setState({polishes: response}))
  }

  render() {
    return (
    <main>
      <header>
        <h1 className="title">The Lazy Lacquerist</h1>
      </header>
      <section>
        <Collection collection={this.state.collection}/>
      </section>
    </main>
    )
  }
}

export default App;
