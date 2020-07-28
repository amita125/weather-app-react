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
    }, 5000);
  }

  getTime() {
    const timeApiKey = process.env.REACT_APP_TIME_API_KEY;
    const cityTime = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeApiKey}&format=json&by=position&lat=${this.props.lat}&lng=${this.props.lon}`;
    
    fetch(cityTime)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          time: data.formatted,
        });
        console.log(data.formatted);
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
              <div className={`locationName ${this.props.main}` + "bg"}>
                <h2 className="cityTitle">
                  {this.props.city}, {this.props.country}
                </h2>
                <h4 className="subtext">
                  <Moment format="dddd D MMMM ">{this.state.time}</Moment>
                  <span> | </span>
                  <Moment format=" h:mm A">{this.state.time}</Moment>
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <div className={`weather-container ${this.props.main}` + "bg"}>
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

                <div className="temp-info">
                  <h1>{Math.floor(this.props.temperature)}&#176;</h1>
                  <h3>{this.props.description}</h3>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div className={`weather-info ${this.props.main}` + "bg"}>
                <div>
                  <h3>{Math.floor(this.props.highestTemp)}&#176;</h3>
                  <span>High</span>
                </div>
                <div>
                  <h3> {this.props.wind}mph</h3>
                  <span>Wind</span>
                </div>
                <div>
                  <h3>{this.props.sunrise}</h3>
                  <span>Sunrise</span>
                </div>
                <div>
                  <h3>{Math.floor(this.props.lowestTemp)}&#176;</h3>
                  <span>Low</span>
                </div>
                <div>
                  <h3>{this.props.humidity}%</h3>
                  <span>Humid</span>
                </div>
                <div>
                  <h3>{this.props.sunset}</h3>
                  <span>Sunset</span>
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