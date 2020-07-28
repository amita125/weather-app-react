import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "react-moment";
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
    };
  }

  componentDidMount() {
    this.getTime();
    this.interval = setInterval(() => {
      this.getTime();
    }, 60000);
  }
  async getTime() {
    const timeApiKey = process.env.REACT_APP_TIME_API_KEY;
    const cityTime = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeApiKey}&format=json&by=position&lat=${this.props.lat}&lng=${this.props.lon}`;
    
     fetch(cityTime)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          time: data.formatted,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="weather-view">
        <Container fluid>
          <Row>
            <Col>
              <div className="locationName">
                <h2 className="cityTitle">
                  {this.props.city}, {this.props.country}
                </h2>
                <h4 className="subtext">
                  <Moment format="dddd D MMMM">{this.state.time}</Moment>
                  <span> | </span>
                  <Moment format="h:mm A">{this.state.time}</Moment>
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}  md={6}>
              <div className="weather-container">
                <div className="weather-icon">
                  {this.props.main === "Mist" ||
                    this.props.main === "Smoke" ||
                    this.props.main === "Haze" ||
                    this.props.main === "Dust" ||
                    this.props.main === "Fog" ||
                    this.props.main === "Sand" ||
                    this.props.main === "Ash" ||
                    this.props.main === "Squall" ||
                    this.props.main === "Tornado" ? (
                      <img
                        id="weather-icon"
                        src={require(`../Images/Icons/tornado.svg`)}
                        alt={this.props.main}
                      />
                    ) : (
                      <img
                        id="weather-icon"
                        src={require(`../Images/Icons/${this.props.main.toLowerCase()}.svg`)}
                        alt={this.props.main}
                      />
                    )}

                </div>
                
                <div className="temp-info">
                  <h3 className="currentTemp">{Math.floor(this.props.temperature)}&#176;</h3>
                  <h4 className="currentDescription">{this.props.description}</h4>
                </div>
              </div>
            </Col>
            <Col xs={12}  md={6}>
              <div className={`weather-info ${this.props.main}` + "bg"}>
                <div className="current-info">
                  <h4 className="info">{Math.floor(this.props.highestTemp)}&#176;</h4>
                  <span className="infoName">High</span>
                </div>
                <div className="current-info">
                  <h4 className="info"> {this.props.wind}mph</h4>
                  <span className="infoName">Wind</span>
                </div>
                <div className="current-info">
                  <h4 className="info">{this.props.sunrise}</h4>
                  <span className="infoName">Sunrise</span>
                </div>
                <div className="current-info">
                  <h4 className="info">{Math.floor(this.props.lowestTemp)}&#176;</h4>
                  <span className="infoName">Low</span>
                </div>
                <div className="current-info">
                  <h4 className="info">{this.props.humidity}%</h4>
                  <span className="infoName">Humid</span>
                </div>
                <div className="current-info">
                  <h4 className="info">{this.props.sunset}</h4>
                  <span className="infoName">Sunset</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Weather;