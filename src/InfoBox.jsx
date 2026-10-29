import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import './InfoBox.css';
import { jsx } from 'react/jsx-runtime';
export default function InfoBox({info}){
  
     let HOT_URL="https://media.istockphoto.com/id/2222510772/photo/young-woman-drinking-water-under-the-summer-sun.webp?s=2048x2048&w=is&k=20&c=o503L-ef_cGejm_V2_cZ_eWtH7vZGoMf9JRAH-mHnSY=";
     let COLD_URL="https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     let RAIN_URL="https://images.unsplash.com/photo-1643119222678-131a90659e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJhaW5pbmclMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";

    let image="https://plus.unsplash.com/premium_photo-1727537538673-07a31d71efe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
       return (
        <div className='infoBox'>
         
            <h2>weather info - {info.weather}</h2>
            <div className='cardContaner'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          <p>{ info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ?<SunnyIcon />:<AcUnitIcon/>}</p>
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temperature = {info.temp_min}&deg;C</p>
          <p>Max Temperature = {info.temp_max}&deg;C</p>
          <p>
           <i>
            The weather is described as {info.weather} and feels like {info.feels_like}&deg;C
           </i>
          </p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}