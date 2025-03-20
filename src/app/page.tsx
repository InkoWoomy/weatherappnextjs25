import { GetCurrentDay, GetFiveDay, GetLocation } from '@/lib/services';
import React from 'react'

export default async function Home()
{
  const locationData = await GetLocation("stockton");
  let lat = locationData[0].lat;
  let lon = locationData[0].lon;
  const currentData = await GetCurrentDay(lat, lon);
  const forecastData = await GetFiveDay(lat, lon);
  console.log("Location Data", locationData, "Current Day Data", currentData, "Forecast Data", forecastData);
  return (
    <div>
      <div className='grid grid-cols-5 gap-5 size-[98%] place-self-center align-middle my-4'>
        {/*  */}
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl col-span-3 text-center tracking-widest'>
          <h1>{`${locationData[0].name}, ${locationData[0].state}`}</h1>


          <img src="." alt="weatherIconCurrentDay" id='iconMain'/>
          <h2>{`${currentData.main.temp.toFixed(0)}°F`}</h2>
        </div>
        <div className='col-span-2'>
          <div className='bg-[#2E5F97] rounded-xl grid grid-cols-5 mb-5'>
            <div className='col-span-4 bg-gray-300 m-4 rounded-md'>
              <input type="text" name="search" id="citySearch" placeholder='Search For A City' className='ps-3 align-self-center w-full h-full font-bold text-3xl'/>
            </div>
            <div className='bg-gray-300 m-4 rounded-md'>

            </div>
          </div>
          <div className='bg-[#2E5F97] rounded-xl py-2'>
            
          </div>
        </div>

        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day1</h1>
          <img src="." alt="weatherIconDay1" id='iconDay1'/>
          <h3>{`${forecastData.list[0].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forecastData.list[4].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day2</h1>
          <img src="." alt="weatherIconDay2" id='iconDay2'/>
          <h3>{`${forecastData.list[8].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forecastData.list[12].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day3</h1>
          <img src="." alt="weatherIconDay3" id='iconDay3'/>
          <h3>{`${forecastData.list[16].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forecastData.list[20].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day4</h1>
          <img src="." alt="weatherIconDay4" id='iconDay4'/>
          <h3>{`${forecastData.list[24].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forecastData.list[28].main.temp.toFixed(0)}°F`}</h4>
        </div>
        <div className='bg-gradient-to-b from-[#BEDCFF] via-[#86BDFD] via-10% to-[#2E5F97] border-8 border-[#0D55A8] rounded-xl text-center tracking-widest'>
          <h1>Day5</h1>
          <img src="." alt="weatherIconDay5" id='iconDay5'/>
          <h3>{`${forecastData.list[32].main.temp.toFixed(0)}°F`}</h3>
          <h4>{`/${forecastData.list[36].main.temp.toFixed(0)}°F`}</h4>
        </div>
        
      </div>
    </div>
  )
}


