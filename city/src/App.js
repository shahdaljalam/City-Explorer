import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootsrap.min.css';
import FormSearch from './components/Form';
import AlertMess from './components/Alertmass';
import Map from './Components/Map';
import CityData from './Components/CityData';
import Weather from './Components/Weather';
import Movie from './Components/Movie';
import Footer from './Components/Footer';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
      lat:'',
      lon:'',
      alert:false,
      error:'',
      weatherData:'',
      movieData:''
     
    }
  }

  updateCityName = (e) =>{
    // console.log(e.target.value);
    this.setState({
      cityNme:e.target.value,

    });
  }
  

  getCity=async(e)=>{
    e.preventDefault();
  try{
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.43f046aa6530fabe68fd7b1718facc51&
    city=${this.state.cityNme}&format=json`).then(locatioIqRes=>{

      this.setState({
        cityDat:locatioIqRes.data[0],
        lat:locatioIqRes.data[0].lat,
        lon:locatioIqRes.data[0].lon,
      })
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherReponse=>{
        this.setState({
          weatherData: weatherReponse.data,
          // displayD:true,
          alert:false
        });
        axios.get(`${process.env.REACT_APP_URL}/movies?qurey=${this.state.cityNme}`).then(movieRes=>{
         console.log('movieRes', movieRes);
          this.setState({

            movieData:movieRes.data,
             displayD:true
          })
        })

      })
     
    }); 
  }  catch(error){
      this.setState({
        error:error.message,
        alert:true,
       
      })
  }
   
  
   }

  

  

  render(){
    return (

    
      <div style={{margin : 'auto',background:'#CDF0EA'}}>
        {this.state.alert &&
        <AlertMess 
        error={this.state.error}
        />
      }
      <div>
      <FormSearch
          getCity={this.getCity}
          updateCityName={this.updateCityName}
          gitMovie={this.gitMovie}
          />
           
          {(this.state.displayD) && 
            <div style={{}}>
               {/*  The Map  */}
              <Map
              cityDat={this.state.cityDat}
              />
               {/*  City Data  */}
              <CityData
              cityDat={this.state.cityDat}
              />
              {/*  Weather Data  */}
              <div>
              <Weather 
            weather={this.state.weatherData}
            />
              </div>
               
            {/* movie Data */}
           <Movie

              movieData={this.state.movieData}
           />
            </div>
          }
            
          <Footer/>
      </div>
                   
        </div>
         
    );
  }
    
  
  
}

export default App
