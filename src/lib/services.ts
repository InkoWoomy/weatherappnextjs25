import React from 'react'
import { APIKEY } from './enviroment'

//GetLocation for searching location. Important for the next functions
export const GetLocation = async(city: string) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKEY}`);
    const data = await response.json();
    return data;
}

//GetCurrent Day to get the current location (will reguire that the latitude and longtitude is assigned to their own variables before calling)
export const GetCurrentDay = async(lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`)
    const data = await response.json();
    return data;
}

export const GetFiveDay = async(lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`)
    const data = await response.json();
    return data;
}
 

