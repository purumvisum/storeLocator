import {observable, computed, action, flow} from 'mobx';
import {restaurantsForLocation} from './interfaces/zomatoRestaurants';

interface locationInterface {
    geometry: geometryInterface;
}

interface geometryInterface {
    location: locationInnerInterface;
}

interface locationInnerInterface {
    lat() : () => number
    lng() : () => number
}

interface zomatoLocationInfo {
    id: number,
    name: string
}

export default class Store  {
    @observable location = {};
    @observable zomatoLocation: zomatoLocationInfo;
    @observable restaurants: restaurantsForLocation;

    @action
    changeLocation = (location: locationInterface): void => {
        this.location = location;
        const lat = location.geometry.location.lat();
        const lng = location.geometry.location.lng();
        this.getZomatoLocation(lat, lng);
    };

    @action
    zomatoLocationInfo = (zomatoLocation: zomatoLocationInfo): void => {
        this.zomatoLocation = zomatoLocation;
    };

    @action
    getZomatoLocationSuccess = (): void => {
        this.getRestaurants(this.zomatoLocation.id);
    };

    @action
    getReataurantsSuccess = (restaurants: restaurantsForLocation): void => {
        this.setRestaurants(restaurants);
    };

    @action
    setRestaurants = (restaurants: restaurantsForLocation): void => {
        this.restaurants = restaurants
    };

    getRestaurants = (cityId: number) => {
        fetch(
            `https://developers.zomato.com/api/v2.1/collections?city_id=${cityId}&count=500`,
            {
                headers: {
                    'Accept': 'application/json',
                    'X-Zomato-API-Key': '6a7926b6be91198f8a6d90d6c5fcea82'
                }
            }
        ).then(response => {
            return response.json()
        }).then(data => {
            this.getReataurantsSuccess(data)
        })
    };

   getZomatoLocation = (lat, lng) => {
        fetch(
            `https://developers.zomato.com/api/v2.1/cities?lat=${lat}&lon=${lng}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'X-Zomato-API-Key': '6a7926b6be91198f8a6d90d6c5fcea82'
                }
            }
        ).then(response => {
            return response.json()
        }).then(data => {
            this.zomatoLocationInfo(data.location_suggestions[0]);
            this.getZomatoLocationSuccess();
        })
    };
}
