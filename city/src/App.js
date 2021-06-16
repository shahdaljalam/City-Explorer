import React, { Component } from 'react'
import 'bootstrap/dist/css/bootsrap.min.css';
import Form from './components/Form';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>City Explorer</h1>
        </header>
        <Form />
      </div>
    )
  }

}

export default App
