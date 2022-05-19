import React, {useState} from 'react'
import Axios from 'axios'

const HourlyMosam = ({Location, Mosam, IsSearched}) => {
    const [Hour, setHour] = useState(0);
    const [TimeArray, setTimeArray] = useState([]);
    if(IsSearched){
        
    const option = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {
            q: Location,
        },
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': 'cb1730cddbmsh5ccee3275171581p101c1ajsn89456d2322f4'
        }
      };

      Axios.request(option).then(function (response) {
        console.log(response.data.list[0]);
    }).catch(function (error) {
        console.error(error);
    });
}
  return (
    <div>
        <div> Today's Temperature in {Location}</div>
        <div> at </div>
    </div>
  )
}

export default HourlyMosam