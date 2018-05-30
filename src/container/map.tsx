import * as React from 'react';
import { inject, observer} from "mobx-react"
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps';

import store from '../store';
import {restaurantInterface} from '../interfaces/zomatoRestaurants';

interface StoreListProps {
    storeLocatorStore?: store;
}

@inject('storeLocatorStore')
@observer
export default  class Map extends React.Component<StoreListProps, {} >  {

    // centerLat= this.props.storeLocatorStore.location ? this.props.storeLocatorStore.location.geometry.location.lat() : -34.397;
    // centerLng= this.props.storeLocatorStore.location ? this.props.storeLocatorStore.location.geometry.location.lng() : 150.644;


    render() {
        console.warn('123123')
        const MyGoogleMap = withGoogleMap((props: {restaurants: restaurantInterface[] }) =>
            <GoogleMap
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
                defaultZoom={0}


                options={{disableDefaultUI: true}}>


                {props.restaurants && props.restaurants.map(item => (
                    <Marker
                        key = {`${+item.restaurant.location.latitude}${+item.restaurant.location.longitude}`}
                        position={{ lat: +item.restaurant.location.latitude, lng: +item.restaurant.location.longitude }}
                    />
                ))}

            </GoogleMap>);
        const containerElement = <div style={{height: '100vh'}}/>;
        const mapElement = <div style={{height: '100vh'}}/>;

        return (
            <MyGoogleMap
                restaurants={this.props.storeLocatorStore.restaurants}
                containerElement={containerElement}
                mapElement={mapElement}/>
        )
    }
}

