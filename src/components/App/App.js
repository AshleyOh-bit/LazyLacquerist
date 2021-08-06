import React from 'react';
import './App.css';

import { apiCall } from "../../utilities/apiCalls"
import { cleanData } from "../../utilities/utils"

import { Collection } from "../Collection/Collection"
import { Form } from "../Form/Form"
import { Route, Link } from 'react-router-dom';

// import nails from "../../assets/mani-icon.png"
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
      ],
      error: ""
    }
  }

 findPolishBrand = (userBrand) => {
    const brandMatch = this.state.polishes.find(polish => {
      return polish.brand === userBrand
    })

    if (brandMatch) {
      return true
    } else {
      return false
    }
  }

  componentDidMount() {
    apiCall("nail_polish")
    .then(response => this.setState({polishes: cleanData(response)}))
    .catch(err => this.setState({error: err}))
  }

  render() {
    return (
    <main>
      <header>
        <Link to="/" > <h1 className="title">The Lazy Lacquerist</h1> </Link>
      </header>
        <Route exact path="/" render={(props) => {
          return (
            <>
              {this.state.collection.length && <Collection collection={this.state.collection}/>}
            </>
          )
        }}>
        </Route>
        <Route exact path="/add-a-polish" render={(props) => {
          return (
            <>
              <Form polishes={this.state.polishes}/>
            </>
          )
        }}>

        </Route>
    </main>
    )
  }
}

export default App;
