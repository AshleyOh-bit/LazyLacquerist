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

 addPolish = newPolish => {
   const foundPolish = this.state.polishes.find(polish => {
     return polish.brand === newPolish.brand
   })

   if (!foundPolish) {
    this.setState({collection: [...this.state.collection, newPolish]})
    const formattedToCollection = {
      id: newPolish.id,
      brand: newPolish.brand,
      image: newPolish.image,
      colors: [
        {
          colorway: newPolish.colorway,
          hue: newPolish.hue
        }
      ]
    }
    return this.setState({polishes: [...this.state.polishes, formattedToCollection]})
   } else {
    const copy = [...this.state.polishes]
    const index = this.state.polishes.findIndex(foundPolish => {
      return foundPolish.brand === newPolish.brand
    })

    const foundColor = foundPolish.colors.find(color => {
        return color.colorway === newPolish.colorway
      })
    if (!foundColor) {
      copy[index].colors = [...this.state.polishes[index].colors,  
        {
          hue: newPolish.hue,
          colorway: newPolish.colorway
        }
      ]
      this.setState({polishes: copy})
    }
    if (!newPolish.hue && foundColor) {
      newPolish.hue = foundColor.hue
    }
    if (!newPolish.image) {
      newPolish.image = foundPolish.image
    }
  }
  this.setState({collection: [...this.state.collection, newPolish]})
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
              <Form polishes={this.state.polishes} addPolish={this.addPolish}/>
            </>
          )
        }}>

        </Route>
    </main>
    )
  }
}

export default App;
