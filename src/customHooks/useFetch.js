import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/actions/weatherActions';

const useFetch = ({ url, city }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.weather.data);
    const error = useSelector(state => state.weather.error);
    const loading = useSelector(state => state.weather.loading);

    const fetchWeather = async () => {
        dispatch(fetchWeatherRequest());
        try {
            const response = await fetch(`${url}?key=e95c380d28794fb893e165530243007&q=${city}&aqi=yes`);
            const data = await response.json();
            if (data.error) {
                dispatch(fetchWeatherFailure(data.error.message));
            } else {
                dispatch(fetchWeatherSuccess(data.current));
            }
        } catch (error) {
            dispatch(fetchWeatherFailure(error.message));
        }
    };

    useEffect(() => {
        if (city) {
            fetchWeather();
        }
    }, [city]);

    return { data, error, loading, refetch: fetchWeather };
};

export default useFetch;
