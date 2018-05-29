import {observable, computed, action, flow} from 'mobx';

// import zomato from 'zomato'

const API_KEY = 'AIzaSyDLdLg8WNV8fknyJ23IjobtYQEmkUstqXU';
const TYPE = 'restaurant';
const RADIUS = '500';

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

export default class Store  {
    @observable location = {};

    @action
    changeLocation = (location: locationInterface): void => {
        this.location = location;
        const lat = location.geometry.location.lat()
        const lng = location.geometry.location.lng()

        this.getRestaurants(lat, lng)
    };

    @observable getRestaurants = (lat, lng) => {

        // var client = zomato.createClient({
        //     userKey: '6a7926b6be91198f8a6d90d6c5fcea82', //as obtained from [Zomato API](https://developers.zomato.com/apis)
        // });
        //
        // client.getCategories(null, function(err, result){
        //     if(!err){
        //         console.log(result);
        //     }else {
        //         console.log(err);
        //     }
        // });

        // var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
        //
        // var request = {
        //     location: pyrmont,
        //     radius: '500',
        //     types: ['store']
        // };
        //
        // service = new google.maps.places.PlacesService(map);
        // service.nearbySearch(request, callback);


        fetch(
            `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lng}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'X-Zomato-API-Key': '6a7926b6be91198f8a6d90d6c5fcea82'
                }


            }
        ).then(response => {
            return response.json()
        }).then(data => {
            console.warn('data',data)
            return data
        })

        // fetch(
        //     `https://` +
        //     `maps.googleapis.com/maps/api/place/` +
        //     `nearbysearch/json?` +
        //     `location=${lat},${lng}&`+
        //     `radius=${RADIUS}&` +
        //     `type=${TYPE}&` +
        //     `key=${API_KEY}`,
        //     {
        //         mode: 'no-cors',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(response => {
        //     return response
        // }).then(data => {
        //     console.warn(data)
        //     return data
        // })
    };


}


// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY