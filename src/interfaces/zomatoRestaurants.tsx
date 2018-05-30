
// Zomato Restaurants Collection
// export interface restaurantsCollectionForLocation {
//     collections: restaurantCollection[]
// }
//
// export interface restaurantCollection {
//     collection: {
//         collection_id: number,
//         description: string,
//         image_url: string,
//         title: string,
//         url: string,
//     }
// }


// Zomato Restaurants
// export interface restaurantsInterface {
//     restaurants: restaurantInterface[]
// }

export interface restaurantInterface {
    restaurant: {
        apikey: string,
        id: string,
        name: string,
        url: string,
        thumb: string,
        featured_image: string,
        cuisines: string,
    }
}



// location
//     :
//     Object
// address
//     :
//     "205 East Houston Street, New York 10002"
// city
//     :
//     "New York City"
// city_id
//     :
//     280
// country_id
//     :
//     216
// latitude
//     :
//     "40.7223277778"
// locality
//     :
//     "Lower East Side"
// locality_verbose
//     :
//     "Lower East Side"
// longitude
//     :
//     "-73.9873500000"
// zipcode
//     :
//     "10002"