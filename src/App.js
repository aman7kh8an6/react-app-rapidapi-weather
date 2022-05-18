import './App.css';
import Axios from 'axios';
import React, {useState} from 'react';
import CurrentMosam from './components/CurrentMosam/CurrentMosam';
import HourlyMosam from './components/HourlyMosam/HourlyMosam';
function App() {
  const [Location, setLocation] = useState("Chanderi");
  const [Mosam, setMosam] = useState(35);
 
  
  const searchWeather = () => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: Location,
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': 'cb1730cddbmsh5ccee3275171581p101c1ajsn89456d2322f4'
      }
    };
    Axios.request(options).then(function (response) {
      setMosam((response.data.main.temp - 273.15).toFixed(1));
      console.log(response.data.main);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (<>
    <div className="App">
      <div>
      <input className='input' onChange={(e) => setLocation(e.target.value)}/>
      <button className='but_search' onClick={searchWeather}> Search</button>
      </div>
      <div className='div_text'>
        <CurrentMosam Location={Location} Mosam={Mosam}/>
      </div>
      <div>
        <HourlyMosam />
      </div>
    </div>
        
    </> );
  
}

export default App;
