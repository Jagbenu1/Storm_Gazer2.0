import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    location: null,
    weather: null,
    loading: null,
    error: null
}

const fetchWeatherStart = (state, action) => {
    return updateObject(state, {error: null, loading: true})
};

const fetchWeatherSuccess = (state, action) => {
    return updateObject(state, {
        location: action.location,
        weather: action.weather,
        error: null,
        loading: false
    })
}

const fetchWeatherFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_WEATHER_START: return fetchWeatherStart(state, action);
        case actionTypes.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
        case actionTypes.FETCH_WEATHER_FAIL: return fetchWeatherFail(state, action);
        default: return state;
    }
}

export default reducer;