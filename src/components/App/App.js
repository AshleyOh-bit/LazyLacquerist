import React from 'react';
import './App.css';

import { apiCall } from "../../utilities/apiCalls"

import nails from "../../assets/mani-icon.png"

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      polishes: []
    }
  }

  componentDidMount() {
    apiCall("nail_polish")
    .then(response => console.log(response))
  }

  render() {
    return (
    <main>
      <header>
        <h1 className="title">The Lazy Lacquerist</h1>
      </header>
      <section>
        <img className="nails" src={nails}/>
      </section>
    </main>
    )
  }
}

export default App;
