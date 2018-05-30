import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import {restaurantInterface} from '../interfaces/zomatoRestaurants';


export default class StoreLine extends React.Component<restaurantInterface, {} > {
    render() {
        return (
            <ListItem
                style= {{'cursor': 'pointer'}}
                onClick = {() => console.warn('qwe')}>
                <Avatar alt={this.props.restaurant.name} src={this.props.restaurant.thumb} />
                <ListItemText
                    primary={`${this.props.restaurant.name} + ${this.props.restaurant.id}`}
                    secondary={`Cuisines: ${this.props.restaurant.cuisines}`} />
            </ListItem>

        );
     }
};
