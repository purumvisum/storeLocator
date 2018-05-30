import * as React from 'react';
import { inject, observer} from "mobx-react"
import List from '@material-ui/core/List';
import StoreLine from './storeLine';

import store from '../store';
import {restaurantInterface} from '../interfaces/zomatoRestaurants';

interface StoreListProps {
    storeLocatorStore?: store;
}

@inject('storeLocatorStore')
@observer
export default class StoreList extends React.Component<StoreListProps, {} > {
    render() {
        console.warn(this.props.storeLocatorStore)
        return (
            <div className = {'storeList'}>
                { this.props.storeLocatorStore.restaurants  &&
                    <List>
                        {this.props.storeLocatorStore.restaurants.map(
                            (item: restaurantInterface) => {
                                return <StoreLine
                                    key = {item.restaurant.id}
                                    restaurant={item.restaurant}/>
                            }
                        )
                        }
                    </List>
                }
                { !this.props.storeLocatorStore.restaurants &&
               <p>Pick the Location</p>
                }
            </div>
        );
    }
};
