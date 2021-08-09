import React from 'react';
import './App.css';

import { apiCall } from "../../utilities/apiCalls"
import { cleanData } from "../../utilities/utils"

import { Collection } from "../Collection/Collection"
import { Form } from "../Form/Form"
import { Error } from "../Error/Error"
import { Home } from "../Home/Home"
import { ManiMaker } from "../ManiMaker/ManiMaker"

import { Route, Link, Redirect, Switch } from 'react-router-dom';

import loading from "../../assets/loading.png"

// import nails from "../../assets/mani-icon.png"
// import CNDblackpool from "../../assets/CND-Blackpool.jpeg"

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      polishes: [],
      collection: [],
      error: "", 
      isLoading: true,
      // randomMani: []
    }
  }

  componentDidMount() {
    apiCall("nail_polish")
    .then(response => this.setState({polishes: cleanData(response), loading: false}))
    .catch(err => this.setState({error: err, loading: false}))
  }


  findPolish = newPolish => {
    const foundPolish = this.state.polishes.find(polish => {
      return polish.brand === newPolish.brand
    })
    return foundPolish
  }

  addNewBrandToCollection = newPolish => {
    this.setState({collection: [...this.state.collection, newPolish]})
    const formattedToCollection = {
      colors: [
        {
          colorway: newPolish.colorway,
          hue: newPolish.hue
        }
      ],
      ...newPolish
    }
    return this.setState({polishes: [...this.state.polishes, formattedToCollection]})
  }

  addToExistingBrandInCollection = (newPolish, foundPolish) => {
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
    this.setState({collection: [...this.state.collection, newPolish]})
  }

  addPolish = newPolish => {
  const foundBrand = this.findPolish(newPolish)
   !foundBrand ? this.addNewBrandToCollection(newPolish) :
     this.addToExistingBrandInCollection(newPolish, foundBrand)
  }

  // generateMani = (event, num) => {
  //   event.preventDefault()
  //   console.log("here")
  //   // if (!this.state.collection.length || num > this.state.collection.length) {
  //   //   return "Please add more polishes to your stash!"
  //   // } else {
  //     const random = () => {
  //       return Math.floor(Math.random() * this.state.collection.length)
  //      }
  //      const indeces = []
  //      let number;
  //      for (var i = 0; i < num; i++) {
  //        number = random()
  //        indeces.push(number)
  //      }
  //      const randomPols = indeces.reduce((acc, currentNum) => {
  //        acc.push(this.state.collection[currentNum])
  //        return acc
  //      }, [])
  //      return this.setState({ randomMani: randomPols })
  //   //}
  // }

  render() {
    return (
    <main>
      <header>
        <Link to="/" > <h1 className="title">The Lazy Lacquerist</h1> </Link>
      </header>
      {this.state.loading && !this.state.error && <><h2>Loading...</h2><img src={loading}/></>}
      {this.state.error && <Error error={'Something went wrong, please try again!'} />}
      {!this.state.loading && !this.state.error && 
      <Switch>
        <Route exact path="/" render={() => {return (<Home />)}}/>
        <Route exact path="/collection" render={(props) => {
          return (
            <>
              <Collection collection={this.state.collection}/>
            </>
          )
        }} 
        />
        <Route exact path="/add-a-polish" render={(props) => {
          return (
            <>
              <Form polishes={this.state.polishes} addPolish={this.addPolish}/>
            </>
          )
        }}
        />
        <Route exact path="/mani-maker" render={(props) => {
          return (
              <ManiMaker collection={this.state.collection}/>
          )
        }}
        />
        <Route
              exact
              path='/page-not-found'
              render={() => <Error error={'page not found'} />}
        />
        <Route
              exact
              path='/add-a-polish/page-not-found'
              render={() => <Error error={'page not found'} />}
        />
        <Redirect to="/page-not-found" />
      </Switch>
    }
    </main>
    )
  }
}

export default App;
