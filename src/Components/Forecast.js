import React, { Component } from 'react'
import Moment from "react-moment";
class Forecast extends Component {
    render() {
        return (
            <div className="forecastData">
                {this.props.forecastData.map((item) => (
                    <div key={item.dt} className={`weatherList ${this.props.theme}`+"bg"}>
                        <div>
                            <p className="subtext">
                                <Moment format="D/MM">{item.dt_txt}</Moment>
                                <br />
                                <Moment format="H:mm ">{item.dt_txt}</Moment>
                            </p>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} id="weather-image"  alt={item.weather[0].main}/><br/>
                            <h3 className="forecastTemp">{Math.floor(item.main.temp)}&#176;</h3> 
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Forecast
