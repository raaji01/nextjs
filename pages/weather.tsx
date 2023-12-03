import React, { ChangeEvent, Component } from 'react';
import axios from 'axios';
import styles from '/styles/Home.module.css';
import 'tailwindcss/tailwind.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface WeatherState {
  sunrise: string;
  sunset: string;
  dawn: string;
  dusk: string;
  dayLength: string;
  solarNoon: string;
  timezone: string;
  error: string;
  searchLocation?: string;
  jsonData: any;
  
}

class Weather extends Component<{}, WeatherState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      sunrise: '',
      sunset: '',
      dawn: '',
      dusk: '',
      dayLength: '',
      solarNoon: '',
      timezone: '',
      error: '',
      searchLocation: '',
      jsonData: null,
      
    };
  }

  searchLocation = () => {
    const location = this.state.searchLocation;
    const apiKey = 'AIzaSyBwAMKFRjZPRybeLrNOIHX9NrAK-U2l7vo';

    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`;

    axios
      .get(geocodeUrl)
      .then(response => {
        const result = response.data.results[0].geometry.location;
        this.getSunriseSunset(result.lat, result.lng);
      })
      .catch(error => {
        this.displayError('Location not found.');
      });
  };

  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getSunriseSunset(latitude, longitude);
        },
        error => {
          this.displayError('Error getting current location.');
        }
      );
    } else {
      this.displayError('Geolocation is not supported by this browser.');
    }
  };

  getSunriseSunset = (latitude: number, longitude: number) => {
    const apiUrl = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&formatted=0`;

    axios
      .get(apiUrl)
      .then(response => {
        const result = response.data.results;
        this.setState({
          sunrise: result.sunrise,
          sunset: result.sunset,
          dawn: result.dawn,
          dusk: result.dusk,
          dayLength: result.day_length,
          solarNoon: result.solar_noon,
          timezone: result.timezone,
          error: '',
        });
      })
      .catch(error => {
        this.displayError('Error fetching sunrise and sunset data.');
      });
  };

  displayError = (message: string) => {
    this.setState({
      error: message,
    });
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchLocation: e.target.value });
  };
  fetchWeatherData = () => {
    // Assume that weatherData.json is in the public folder
    axios.get('/weatherData.json').then((response) => {
      this.setState({
        jsonData: response.data,
        error: '', // Clear any previous errors
      });
    }).catch((error) => {
      this.displayError('Error fetching weather data.');
    });
  };

  navigateToSSR1Page = () => {
    // Redirect to the SSR page
    window.location.href = '/ssr1';
  };
 
  render() {
    return (
      <div id='con'>
        <h2 className="text-3xl font-bold underline"> Check the weather</h2>
        <h3>Third party real time Api</h3>
        <div>
          <input
            type="text"
            value={this.state.searchLocation}
            onChange={this.handleInputChange}
          />
          <button  onClick={this.searchLocation} className="text-sky-500 hover:text-sky-600">Search Location</button>
          <button onClick={this.getCurrentLocation}>Use Current Location</button>
        </div>
        <div>
          <p >
         
            <strong >Sunrise:</strong> {this.state.sunrise}
          </p>
          <p>
            <strong>Sunset:</strong> {this.state.sunset}
          </p>
          <p>
            <strong>Dawn:</strong> {this.state.dawn}
          </p>
          <p>
            <strong>Dusk:</strong> {this.state.dusk}
          </p>
          <p>
            <strong>Day Length(sec):</strong> {this.state.dayLength} 
          </p>
          <p>
            <strong>Solar Noon:</strong> {this.state.solarNoon}
          </p>
          <p>
            <strong>Timezone:</strong> {this.state.timezone}
          </p>
          {this.state.error && <p className="error">{this.state.error}</p>}
        </div>

        <button onClick={this.fetchWeatherData} className="text-sky-500 hover:text-sky-600">
          Fetch Weather Data from local json file
        </button>
        <br/>
        {this.state.jsonData && (
          <div>
            <h3>Weather Information from local json file</h3>
            <p><strong>City:</strong> {this.state.jsonData.city}</p>
            <p><strong>Temperature:</strong> {this.state.jsonData.temperature}</p>
            <p><strong>Humidity:</strong> {this.state.jsonData.humidity}</p>
            <p><strong>Wind Speed:</strong> {this.state.jsonData.windSpeed}</p>
            <p><strong>Conditions:</strong> {this.state.jsonData.conditions}</p>
            <h4>5-Day Forecast</h4>
            <ul>
              {this.state.jsonData.forecast.map((day: any) => (
                <li key={day.day}>
                  <strong>{day.day}:</strong> {day.temperature}, {day.conditions}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <button onClick={this.navigateToSSR1Page} className="text-sky-500 hover:text-sky-600">
          Go to see server(Json Placeholder) and client side rendering
        </button>
      </div>
    );
  }
}

export default Weather;