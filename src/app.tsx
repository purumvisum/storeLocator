import * as React from 'react';
import Map from './container/map';
import SearchField from './components/searchField/searchField';

import StoreList from './components/storeList';


export default class App extends React.Component  {
    render() {
        return (
            <div>
                <SearchField/>
                <StoreList/>
                <Map/>
            </div>
        );
    }
}
