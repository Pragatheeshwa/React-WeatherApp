import { useEffect, useState } from "react";



function App() {

    const [Search,setSearch]=useState('kerala')
    const [city,setCity]=useState(null)


   
   
    useEffect(()=>{
      
            const getData=async()=>{
              try{
              const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=ddd3a47baf4d09ce36dd903342e0a8ae&units=metric`)
              const finalData= await response.json();
              setCity(finalData);
              
            }catch(err){
               console.log(`Error : ${err.status}`)
            }
          }
     getData();
      
    },[Search])
    

  return (
    <div className="App">
      <div className="weather-card" >
        <div className="search">
          <input type="search" placeholder="Enter Your city" spellCheck="false" onChange={(event)=>setSearch(event.target.value)} />
        </div>
        <div className="weather">
          <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
          <h1 className="temp" >
              { city?.main?.temp} °C
          </h1>
          <h2 className="city" >
            {city?.name}
          </h2>

        <div className="details">
            <div className="col">
            <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" alt="..." />
                <div className="info">
                  <p className="humidity" >
                  {city?.main?.humidity} %
                  </p>
                  <p>
                    Humidity
                  </p>
                </div>
            </div>
            <div className="col">
            <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" alt="..." />
              <div className="info">
                  <p className="wind" >
                    {city?.wind?.speed} km/h
                  </p>
                  <p>
                    Wind Speed
                  </p>
                </div>
            </div> 
       </div> 
      </div>
    </div>
   </div> 
  );
}

export default App;
