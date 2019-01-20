import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "743b06204e391ea5d6f562f5531f3842";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {

        e.preventDefault();

        const city = e.target.city.value;
        const country = e.target.country.value;
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await apiCall.json();

        console.log(data);

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        })
    };
  render() {
    return (
        <div>
            <Titles/>
            <Form getWeather={this.getWeather}/>
            <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                erorr={this.state.error}
            />
        </div>
    );
  }
}

export default App;