import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import {restaurantCollection} from '../interfaces/zomatoRestaurants';


export default class StoreLine extends React.Component<restaurantCollection, {} > {
    render() {
        return (
            <ListItem
                style= {{'cursor': 'pointer'}}
                onClick = {() => console.warn('qwe')}>
                <Avatar alt={this.props.collection.description} src={this.props.collection.image_url} />
                <ListItemText
                    primary={`${this.props.collection.title} + ${this.props.collection.collection_id}`}
                    secondary={this.props.collection.description} />
            </ListItem>

        );
     }
};
