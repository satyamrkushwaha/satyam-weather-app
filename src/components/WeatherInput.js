import React from 'react';

function WeatherInput({ inputValue, setInputValue, submit }) {
    return (
        <form onSubmit={submit}>
            <input
                type='text'
                placeholder='Enter City/Country Name'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default WeatherInput;
