import {observable, computed, action, flow} from 'mobx';

export default class Store  {
    @observable location = {};

    @action
    changeLocation = (location: {}): void => {
        this.location = location;
    };


    loadWeatherGenerator = flow(function*(city) {

        this.loadWeatherError = '';
        this.weatherData = {};

        const response = yield fetch(
            `https://abnormal-weather-api.herokuapp.com/cities/search?city=${this.location}`
        );

        // const weatherOpenApi = yield fetch(
        //     `http://api.openweathermap.org/data/2.5/forecast?APPID=ae6050de6496b1c975184a7b097f43cb&q=Minsk&units=metric`
        // );


        //  const weatherOpenApi = yield fetch(
        //     `api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&APPID=ae6050de6496b1c975184a7b097f43cb`
        // );

        // http://api.openweathermap.org/data/2.5/forecast?APPID=ae6050de6496b1c975184a7b097f43cb&q=Minsk&units=metric

        const data = yield response.json();
        if (data.error) {
            this.loadWeatherError = data.error
        } else {
            this.weatherData = data;
        }

    });
}
