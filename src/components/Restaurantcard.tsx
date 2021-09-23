import React from 'react'
import { RestaurantImage } from '../styledcomponents/styledrestaurant';


function Restaurantcard() {
    return (
        <div className="restaurant__card">
            <div className="res__featuredimg">
                <RestaurantImage bgimage='http://via.placeholder/740x320'>
                </RestaurantImage>
            </div>
            <div className="res__meta">
                <div className="res__meta-left">
                    <div>McDonalds</div>
                    <div>
                        <span>40 min</span> <span>.</span> <span>Free Delivery</span>
                    </div>
                </div>
                <div className="res__meta-right">
                    <img src="http://via.placeholder.com/18x16" width="18" alt="Add to Favorite" />
                </div>
            </div>
        </div>
    )
}

export default Restaurantcard
