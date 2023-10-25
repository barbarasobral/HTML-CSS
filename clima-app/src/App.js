import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {FaSun, FaSnowflake, FaCloud, FaCloudSun} from 'react-icons/fa';
import Logo from "./calor.jpg"

function App() {
  const weatherIconElement = document.querySelector("weather-icon")
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt_br&appid=3ee32176fbc4070662893138e0e9dea6`
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      
      <div className="container">
      <div>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Informe o Local'
          type="text" />
      </div>
      {data.name !== undefined &&
        <div>
          <div>
            {data.main ? <p>{data.name},{data.sys.country}</p> : null}
          </div>
          
          <div>
            {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
          </div>
          <div>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div> <FaSnowflake /> </div>
          
        </div>
        }    

            
          </div>
        
      </div>
   
  );
}  
  
  
export default App;
