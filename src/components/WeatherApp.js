import React, { useState } from 'react'

export default function WeatherApp() {

    const [city, setCity] = useState('');

    const [inputValue, setInputValue] = useState('');

    const submit = (e) => {
        e.preventDefault();
        setCity(inputValue);
    };

    console.log(inputValue)

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <div>Weather:</div>
        </div>
    )
}
