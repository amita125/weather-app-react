import React, { Component } from "react";
import Form from "react-bootstrap/Form";
class WeatherForm extends Component {
  render() {
    return (
      <div className="weatherForm">
        <Form onSubmit={this.props.loadWeather}>
          <span className="searchImg"><img id="search"
            src={require(`../Images/Icons/search.svg`)}
            alt="search icon"
          /></span>
          <Form.Control type="text" name="city" placeholder="Enter City" />
        </Form>
      </div>
    );
  }
}

export default WeatherForm;
