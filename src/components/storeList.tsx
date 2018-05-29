import * as React from 'react';
import List from '@material-ui/core/List';
import StoreLine from './storeLine';

export default class StoreList extends React.Component {
    render() {
        return (
            <div >
                <List>
                    <StoreLine/>
                    <StoreLine/>
                    <StoreLine/>
                    <StoreLine/>
                </List>
            </div>
        );
    }
};
