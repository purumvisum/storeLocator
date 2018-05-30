
// Zomato Restaurants
export interface restaurantsForLocation {
    collections: restaurantCollection[]
}

export interface restaurantCollection {
    collection: {
        collection_id: number,
        description: string,
        image_url: string,
        title: string,
        url: string,
    }
}
