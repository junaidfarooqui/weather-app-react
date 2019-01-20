import React from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "743b06204e391ea5d6f562f5531f3842";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        const data = await apiCall.json();
        console.log(data);
    }
  render() {
    return (
        <div>
            <Titles/>
            <Form getWeather={this.getWeather}/>
            <Weather/>
        </div>
    );
  }
}

export default App;