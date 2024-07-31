import React, { useState } from 'react';
import './WeatherApp.css';
import useFetch from '../customHooks/useFetch';

export default function WeatherApp() {

    const [city, setCity] = useState('');
    const [inputValue, setInputValue] = useState('');
    const { data: weather, error, loading, refetch } = useFetch({ url: 'https://api.weatherapi.com/v1/current.json', city });

    const submit = (e) => {
        e.preventDefault();
        if (city !== inputValue) {
            setCity(inputValue);
        }
        if (city) {
            refetch();
        }
    };

    return (
        <div className='weather-app-main-container'>
            <form onSubmit={submit}>
                <input
                    type='text'
                    placeholder='Enter City/Country Name'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <div className='heading'>Weather Details:</div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <ul>
                    {weather && (
                        <>
                            <li>Last Updated: {weather.last_updated}</li>
                            <li>Humidity: {weather.humidity}</li>
                            <li>Wind Speed (kph): {weather.wind_kph}</li>
                            <li>Heat Index (C): {weather.heatindex_c}</li>
                        </>
                    )}
                </ul>
            )}
        </div>
    );
}
