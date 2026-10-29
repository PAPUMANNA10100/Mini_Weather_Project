import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './weatherApp.css';
export default function WeatherApp(){
    let [info,setInfo]= useState({
        city: "delhi",
         feels_like: 40,
       grnd_level: 667,
        humidity: 9,
        pressure: 8 ,
        sea_level: 34,
        temp : 78,
       temp_max:89,
      temp_min : 8,
      weather : "hjad",
    });
    let updateInfo = (newInfo)=>{
        setInfo(newInfo);
    }

    return(
        <div className="weather">
            <h1 style={{textAlign:"center"}}>weather api by ......</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={info}/>
        </div>
    )
}