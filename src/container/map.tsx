import * as React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from 'react-google-maps';

export default  class Map extends React.Component {

    render() {

        const MyGoogleMap = withGoogleMap(() =>
            <GoogleMap
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
                defaultZoom={16}
                center={{lat: -34.397, lng: 150.644 }}
                options={{disableDefaultUI: true}}>
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>);
        const containerElement = <div style={{height: '100vh'}}/>;
        const mapElement = <div style={{height: '100vh'}}/>;

        return (
            <MyGoogleMap
                         containerElement={containerElement}
                         mapElement={mapElement}/>
        )
    }
}

