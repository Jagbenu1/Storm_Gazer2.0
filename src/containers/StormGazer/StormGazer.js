import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

import Background from '../../components/Background/Background';
import Location from '../../components/Location/Location';
import DailySummary from '../../components/DailySummary/DailySummary';
import Humidity from '../../components/Humidity/Humidity';
import PrecipProb from '../../components/PrecipProb/PrecipProb';
import Temperature from '../../components/Temperature/Temperature';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import InfoBlock from '../../components/InfoBlock/InfoBlock';


class StormGazer extends Component {

    state = {
        zipCode: ''
    }

    inputChangedHandler = (event) => {
        this.setState({zipCode: event.target.value})
        console.log(this.state.zipCode);
        
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onWeather(this.state.zipCode)
    }

    render() {
        let icon = '', data = ''; 
        if(this.props.weather && this.props.location){
            
             icon = this.props.weather.currently.icon;
            
             data = (
                <InfoBlock>
                    <Location userCity={this.props.location.city} userState={this.props.location.state}/>
                    <Temperature  temp={Math.round(this.props.weather.currently.temperature)}/>
                    <CurrentWeather currentWeather={this.props.weather.currently.summary} icon={icon}/>
                    <DailySummary dailySummary={this.props.weather.daily.summary}/>
                    <Humidity humidity={this.props.weather.currently.humidity}/>
                    <PrecipProb precipProb={this.props.weather.currently.precipProbability}/>
                </InfoBlock>   
            );
        }
        
        
        return (
            <Background icon={ icon }>
                    <form onSubmit = {this.submitHandler}>
                        <Input 
                            elementType='input'
                            value={this.state.zipCode}
                            changed={event => this.inputChangedHandler(event)}
                        />
                        <Button btnType="success">Submit</Button>
                    </form>
                    {this.props.loading ? <Spinner/> : ''}
                    {this.props.location && this.props.weather ? data : ''}
                    {/* {this.props.location && this.props.weather ? data : ''} */}
            </Background>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        location: state.location,
        weather: state.weather,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onWeather: (zipCode) => dispatch(actions.weather(zipCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StormGazer);