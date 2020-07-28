import React, { Component } from "react";
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Forecast from "./Forecast";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      description: "",
      main: "Clear",
      temp: "",
      highestTemp: "",
      lowestTemp: "",
      sunrise: "",
      sunset: "",
      clouds: "",
      humidity: "",
      wind: "",
      lat: "",
      lon: "",
      icon:"",
      load: false,
      error: false,
      forecastData:[],
    };
  }

  getWeather = async (e) => {
    const name = e.target.elements.city.value;
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(weatherApiKey);
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${weatherApiKey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${weatherApiKey}&units=metric`;
    
    e.preventDefault();
    Promise.all([fetch(weather),fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        this.setState({
          city: data1.name,
          country: data1.sys.country,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          icon:data1.weather[0].icon,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          lon: data1.coord.lon,
          lat: data1.coord.lat,
          load: true,
          error: false,
          forecastData:data2.list,
        });
      })
      .catch((error) => {
        console.log("Sorry cannot find the city with the name");
        this.setState({
          error: true,
          load: true,
          main: "Clear",
        });
      });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className={`mainPage bg-img ${this.state.main}`} >
              <Navigation />
              <WeatherForm loadWeather={this.getWeather} />
              {this.state.load ? (
                this.state.error ? (
                  <div className="errorDisplay">
                    <h3> No matching cities found. Try searching with a valid city
                    name!</h3>
                  </div>
                ) : (
                    <div className="weather-data">
                      <Weather
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        main={this.state.main}
                        temperature={this.state.temp}
                        highestTemp={this.state.highestTemp}
                        lowestTemp={this.state.lowestTemp}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        clouds={this.state.clouds}
                        humidity={this.state.humidity}
                        wind={this.state.wind}
                        lon={this.state.lon}
                        lat={this.state.lat}
                        error={this.state.error}
                        icon={this.state.icon}
                      />
                      <Forecast forecastData={this.state.forecastData} theme={this.state.main}/>
                    </div>
                 
                )
              ) : (
                  
                this.state.error
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;

// Icons made by <a href="https://www.flaticon.com/authors/linector" title="Linector">Linector</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>