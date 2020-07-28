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
                            <h3>{Math.floor(item.main.temp)}&#176;</h3> 
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Forecast

    // < span > Photo by < a href = "https://unsplash.com/@valentinmuellerandalanmueller?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" > Valentin Müller</ > on < a href = "https://unsplash.com/s/photos/rain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" > Unsplash</ ></span > - rain


//Photo by Brett Sayles from Pexels - cloudy day 

//Photo by Francesco Ungaro from Pexels- day
//Photo by Johannes Plenio from Pexels- lighting
//<span>Photo by <a href="https://unsplash.com/@chanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chandler Cruttenden</a> on <a href="https://unsplash.com/s/photos/snow?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>- snow


//Photo by Ray Bilcliff from Pexels - storm
//Photo by Johannes Plenio from Pexels - tornado


//<span>Photo by <a href="https://unsplash.com/@tomlaudiophile?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Thomas Millot</a> on <a href="https://unsplash.com/s/photos/atmosphere?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> - mist