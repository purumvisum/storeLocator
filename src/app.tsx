import * as React from 'react';
import Map from './container/map';
import SearchField from './components/searchField/searchField';

import StoreList from './components/storeList';
import './style.css';

export default class App extends React.Component  {
    render() {
        return (
            <div>
                <SearchField/>
                <div className = {'wrapper'}>
                    <StoreList  />
                    <div className = {'map'}>
                        <Map/>
                    </div>

                </div>
            </div>
        );
    }
}
