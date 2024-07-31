import React from 'react';

function WeatherDisplay({ weather, loading, error }) {
    return (
        <div>
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

export default WeatherDisplay;
