import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox({updateInfo}){
    let [city,setCity]= useState("");
    let [error,setError] = useState(false);
    
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY=import.meta.env.VITE_OPENWEATHER_API_KEY;

   
    let getWeatherInfo= async ()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       let data ={
        city : city,
        feels_like: jsonResponse.main. feels_like,
       grnd_level: jsonResponse.main.grnd_level,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure ,
        sea_level: jsonResponse.main.sea_level,
        temp : jsonResponse.main.temp,
       temp_max: jsonResponse.main.temp_max,
      temp_min : jsonResponse.main.temp_min,
      weather : jsonResponse.weather[0].description,
       }
       setError(false);
       return data;
        }catch(err){
            throw(err);
        }
      
    }

    let handleOnchange=(event)=>{
       setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
      let data= await getWeatherInfo();
        updateInfo(data);
        }catch(err){
            setError(true);
            
            
        }
    }
    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic"
                 label="search city" 
                 variant="outlined" value={city} 
                 onChange={handleOnchange}
                 />
                <br></br> <br></br>

                <Button variant="contained" type="submit" >search</Button>
            </form>
             {error && <p style={{color:"red"}}>error occurd !! no such place available in our API</p>}
        </div>
    )
}