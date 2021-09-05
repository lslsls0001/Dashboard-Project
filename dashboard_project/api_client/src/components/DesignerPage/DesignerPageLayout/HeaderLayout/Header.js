import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import "./header.css"
import {formatDate} from '../../../../utils/dateUtils'
import menuList from "./menuList";


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: formatDate(Date.now()),
            APIKey: '8731a5cde709b247bd4b66029b8502b8',
            latitude:'latitude',
            longitude:'longitude',
            weatherCity:'#city',
            weatherIcon:'',
            weatherPictureUrl: '',
            weatherDescription: '#description',
        };
    }

    getTime = () => {
        setInterval(()=>{
            const currentTime = formatDate(Date.now())
            this.setState({currentTime})
        },1000)
    }

    getWeather = () =>{
        navigator.geolocation.getCurrentPosition(async (position) => {
            this.state.latitude = position.coords.latitude;
            this.state.longitude = position.coords.longitude;

            const lat = this.state.latitude;
            const lon = this.state.longitude;
            const APIkey = this.state.APIKey;

            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
            .then(res=>res.json())
            .then(result => {
                this.state.weatherCity = result.name;
                this.state.weatherIcon = result.weather[0].icon;
                this.state.weatherPictureUrl = `http://openweathermap.org/img/w/${this.state.weatherIcon}.png`;
                this.state.weatherDescription = result.weather[0].description;
            });
        });
    }

    getTitle = () =>{
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if(item.key===path){
                title=item.title
            }else if (item.children){
                const cItem = item.children.find(cItem => cItem.key === path)

                if(cItem){
                    title = cItem.title
                }
            }
        })
        return title
    }

    componentDidMount(){
        this.getTime()

        this.getWeather()
    }
    
    render(){

        const {currentTime, weatherCity, weatherPictureUrl, weatherDescription} = this.state

        const title = this.getTitle()

        return(
            <div className="header">
                <div className="header-top">
                    <span>welcome, {this.props.username}</span>
                    <a 
                        href="http://127.0.0.1:8000/api_client/login"
                        style={{color:'black'}}
                    >
                        logout
                    </a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <span>{weatherCity}</span>
                        <span>{weatherDescription}</span>
                        <img src={weatherPictureUrl} alt="weather"/>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default withRouter(Header)
