import React, { Component } from 'react'
export class App extends Component {

constructor(props){
  super(props);
  this.state={
  cityName : ''
 } 
}

updateCityNameState = (e) =>{
this.setState(
  {
    cityName:e.target.value
  }
)
}

  render() {
    return (
      <div>
        <h2>City Evvxplorer</h2>
        <form>
          <lable>
            City Name:
          </lable>
          <input onChange={this.updateCityNameState} type="text" />
          <br></br>
          <br></br>
          <input type="submit" value="get City" />
        </form>
      </div>
    )
  }
}

export default App
