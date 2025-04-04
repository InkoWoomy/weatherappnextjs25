'use client'

import { GetCurrentDay, GetFiveDay, GetLocation } from '@/lib/services';
import React, { use, useEffect, useState } from 'react'

export default  function Home()
{
  const [locData, setLocData] = useState<any>();
  const [curData, setCurData] = useState<any>();
  const [forCast, setForCast] = useState<any>();
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('sacramento');

  useEffect(()=> {
    const getData = async () => {
      const locationData = await GetLocation(userInput);

      let lat = locationData[0].lat;
      let lon = locationData[0].lon;
      const currentData = await GetCurrentDay(lat, lon);
      const forcastData = await GetFiveDay(lat, lon);
      setLocData(locationData);
      setCurData(currentData);
      setForCast(forcastData);
      setFirstLoad(true)

      console.log(locationData)

      
    }
    getData();
  },[firstLoad])
  
  const handleKeyDown = (event: {[x: string]: any; key: string; }) => {
    if (event.key === "Enter") {
      console.log("ENTER KEY PRESSED", event.currentTarget.value);
      setFirstLoad(false);
      setUserInput(event.currentTarget.value);
    }
  } 
  
  console.log("Location Data\n", locData, "\nCurrent Day Data\n", curData, "\nForecast Data\n", forCast);
  return (
    <>
    {firstLoad == false ? <>
      <div>
      <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 size-[90%] place-self-center align-middle my-4'>
        {/*  */}
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl lg:col-span-3 text-center tracking-widest'>
          <h1>{`${locData[0].name}, ${locData[0].state}`}</h1>

          <div className='lg:flex justify-items-center'>
            <div className='lg: w-full lg:justify-items-end sm:justify-items-center me-10'>
              <img src={`https://openweathermap.org/img/wn/${curData.weather[0].icon}@4x.png`} alt="weatherIconDay1" id='iconDay1'/>
              <h2>{curData.main.temp.toFixed(0)}°F</h2>
            </div>
            <div className='lg: w-full lg:justify-items-start sm:justify-items-center ms-10'>
              <h3 className="lg:text-[54px] sm:text-[32px]">{`>`} ↑ {curData.main.temp_max.toFixed(0)}°F</h3>
              <h3 className="lg:text-[54px] sm:text-[32px]">{`>`} ↓ {curData.main.temp_min.toFixed(0)}°F</h3>
              <h3 className="lg:text-[54px] sm:text-[32px]">{`>`}⏲{curData.main.pressure}mb</h3>
              <h3 className="lg:text-[54px] sm:text-[32px]">{`>`}☂ {curData.main.humidity}%</h3>
            </div>
          </div>

        </div>
        <div className='lg:col-span-2'>
        <div className='bg-[#2E5F97] rounded-xl grid grid-cols-6 mb-5'>
        <div className='col-span-5 bg-gray-300 my-4 ms-4 rounded-md'>
            <input type="text" name="search" id="citySearch" onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown} placeholder='Search For A City' className='ps-3 align-self-center w-full h-full font-bold lg:text-3xl py-2 focus:rounded-md'/>
        </div>
        <div className='bg-gray-300 my-4 lg:ms-8 ms-2 lg:me-4 me-2 rounded-md'>
            <button type="button"  className='flex justify-self-center py-3'>
            <img src="/images/FavoriteAdd.png" alt="AddFavorite" className='cursor-pointer'/>
            {/* onClick={() => (saveToFavorites(`${locData[0].name}, ${locData[0].state}`))} */}
            </button>
        </div>
        </div>
        <div className='bg-[#2E5F97] rounded-xl py-2 h-100'>
        
        </div>
    </div>
        


        
        
        <div className='sm:justify-center sm:flex lg:block bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day1</h1>
          <div className='place-self-center'>
            <img src={`https://openweathermap.org/img/wn/${forCast.list[0].weather[0].icon}@2x.png`} alt="weatherIconDay1" id='iconDay1'/>
          </div>
          <h3 className='text-[54px]'>{`${forCast.list[0].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forCast.list[4].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='sm:justify-center sm:flex lg:block bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day2</h1>
          <div className='place-self-center'>
            <img src={`https://openweathermap.org/img/wn/${forCast.list[8].weather[0].icon}@2x.png`} alt="weatherIconDay2" id='iconDay2'/>
          </div>
          <h3 className='text-[54px]'>{`${forCast.list[8].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forCast.list[12].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='sm:justify-center sm:flex lg:block bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day3</h1>
          <div className='place-self-center'>
            <img src={`https://openweathermap.org/img/wn/${forCast.list[16].weather[0].icon}@2x.png`} alt="weatherIconDay3" id='iconDay3'/>
          </div>
          <h3 className='text-[54px]'>{`${forCast.list[16].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forCast.list[20].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='sm:justify-center sm:flex lg:block bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day4</h1>
          <div className='place-self-center'>
            <img src={`https://openweathermap.org/img/wn/${forCast.list[24].weather[0].icon}@2x.png`} alt="weatherIconDay4" id='iconDay4'/>
          </div>
          <h3 className='text-[54px]'>{`${forCast.list[24].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forCast.list[28].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='sm:justify-center sm:flex lg:block bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day5</h1>
          <div className='place-self-center'>
            <img src={`https://openweathermap.org/img/wn/${forCast.list[32].weather[0].icon}@2x.png`} alt="weatherIconDay5" id='iconDay5'/>
          </div>
          <h3 className='text-[54px]'>{`${forCast.list[32].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forCast.list[36].main.temp.toFixed(0)}°F`}</h4>
        </div>
        
      </div>
    </div>
    </> : <h1>Loading...</h1>}
    </>
  )
}


