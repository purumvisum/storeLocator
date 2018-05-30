import * as React from 'react';
import { inject, observer} from "mobx-react"
import List from '@material-ui/core/List';
import StoreLine from './storeLine';

import store from '../store';
import {restaurantsForLocation} from '../interfaces/zomatoRestaurants';

interface StoreListProps {
    storeLocatorStore?: store;
}

@inject('storeLocatorStore')
@observer
export default class StoreList extends React.Component<StoreListProps, {} > {
    render() {
        // console.warn(this.props.storeLocatorStore.restaurants.collections)
        return (
            <div>
                { this.props.storeLocatorStore.restaurants && this.props.storeLocatorStore.restaurants.collections &&
                    <List>
                        {this.props.storeLocatorStore.restaurants.collections.map(
                            (item) => {
                                return <StoreLine
                                    key = {item.collection.collection_id}
                                    collection={item.collection}/>
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


// Object
// collection_id
//     :
//     (...)
// description
//     :
//     (...)
// image_url
//     :
//     (...)
// res_count
//     :
//     (...)
// share_url
//     :
//     (...)
// title
//     :
//     (...)
// url
//     :
//     (...)