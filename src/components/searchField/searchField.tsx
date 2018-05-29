import * as React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { inject, observer} from "mobx-react"
import './style.css';

import store from '../../store';

interface SearchFieldProps {
    storeLocatorStore?: store;
}

@inject('storeLocatorStore')
@observer
export default class SearchField extends React.Component<SearchFieldProps, {} > {
    render() {
        return (
            <div>
                <Autocomplete
                    className={'searchField'}
                    onPlaceSelected={(place) => {
                        this.props.storeLocatorStore.changeLocation(place)
                    }}
                    placeholder =  {'Enter location'}
                    types={[ '(regions)' ]}
                />
            </div>
        );
    }
}
