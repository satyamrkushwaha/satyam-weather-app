import React, { useState } from 'react';
import './WeatherApp.css';
import useFetch from '../customHooks/useFetch';
import WeatherInput from './WeatherInput';
import WeatherDisplay from './WeatherDisplay';

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
            <WeatherInput inputValue={inputValue} setInputValue={setInputValue} submit={submit} />
            <WeatherDisplay weather={weather} loading={loading} error={error} />
        </div>
    );
}
