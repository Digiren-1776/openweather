import React, { useState } from "react";
import "../index.css";

const Wcard = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const key = "d091d4910d29cbf3152845e1c73956a9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const fetchWeather = (e) => {
    if (e.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLocation("");
          console.log(result);
        });
    }
  };

  // Timestamps
  const sunriseUnix = data.sys?.sunrise || null;
  const sunriseFormatted = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit', 
    minute: '2-digit', 
  }).format(sunriseUnix);

  const sunsetUnix = data.sys?.sunset || null;
  const sunsetFormatted = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit', 
  minute: '2-digit', 
  }).format(sunsetUnix);
  console.log(sunriseFormatted, sunsetFormatted);
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter City"
        value={location}
        onChange={handleChange}
        onKeyPress={fetchWeather}
        className="rounded-md p-2 h-12 text-center placeholder:focus:text-transparent"
      />
      
      {/*Conditionally renders card div ONLY IF request is sent */}
      
      {data.main ? (
        <div
          description="weather card"
          className="mt-8 bg-black/50 rounded-md"
        >
          <h2 className="w-4/5 mx-auto text-teal-400 font-bold text-center mt-5">
            {data.name}, {data.sys.country}
          </h2>

          {/*HERO SECTION*/}
          <div className="h-auto mt-4 border-b-2 border-emerald-400">
            <div description="hero flex" className="flex">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                description="hero left"
                className="w-1/2"
              />
              <div description="hero right" className="w-1/2 mb-1">
                <p className="text-base text-white font-bold flex justify-center text-center px-8 pt-8">
                  Current Temperature
                </p>
                <span
                  description="current temp"
                  className={`p-4 font-bold text-3xl flex justify-center items-center ${data.main.temp >= 70 ? "text-orange-300" : 40 <= data.main.temp < 70   ? "text-stone-400" : data.main.temp < 40 ? "text-blue-400" : ""}`}
                >
                  {data.main.temp.toFixed()}&deg;F
                </span>
              </div>
            </div>

            {/*SMALL DETAILS SECTION*/}
            <div description="details" className="flex mb-4">
              <span 
              className={`basis-1/2 font-bold text-center italic
              ${data.main.temp >= 70 ? "text-orange-300" : 40 <= data.main.temp < 70  ? "text-stone-400" : data.main.temp < 40 ? "text-blue-400" : ""}`}>
                {data.weather[0].description}
              </span>
              <span description="MIN-MAX" className="flex justify-center basis-1/2 mr-2 text-white font-bold">
                <p className="text-center mr-4">
                  Min<span className="block text-blue-400 basis-1/2">{data.main.temp_min.toFixed()}&deg;F</span>
                </p>
                <p className="text-center">
                  Max<span className="block text-red-400 basis-1/2">{data.main.temp_max.toFixed()}&deg;F</span>
                </p>
              </span>
            </div>
          </div>

            {/*CARD BOTTOM*/}
            <div 
            description="sunrise-sunset"
            className="flex text-center py-4">
              <span
              className="basis-1/2  text-white font-bold tracking-widest">
              Sunrise 
              <p className="text-orange-300">
              {sunriseFormatted}
              </p> 
              </span>
              
              <span className="basis-1/2 text-white font-bold tracking-widest">
              Sunset
              <p className="text-purple-500">
              {sunsetFormatted}
              </p>
              </span>
            </div>
        </div>
      ) : (
        ""
      )}{" "}
      {/*END OF CONDITIONAL WRAP*/}
    </>
  );
};

export default Wcard;
