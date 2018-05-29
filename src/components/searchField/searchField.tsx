import * as React from 'react';
import Autocomplete from 'react-google-autocomplete';
import './style.css'

export default class SearchField extends React.Component  {
    render() {
        return (
            <div>
                <Autocomplete
                    className={'searchField'}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                    placeholder =  {'Enter location'}
                    types={[ '(regions)' ]}
                />
            </div>
        );
    }
}
