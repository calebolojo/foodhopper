import React, { useState, useEffect } from 'react'
import { RestaurantByState } from '../ts/global'




function useRestaurantByState( { state, size, numPage, isFullmenu } : RestaurantByState ) {

    const [ restaurantsInState, setRestaurantsInState ] = useState(null);

    useEffect(() => {
        fetch(`https://api.documenu.com/v2/restaurants/state/${state}?size=${size}&page=${numPage}&fullmenu=${isFullmenu}&key=${process.env.REACT_APP_DOCUMENU_API_KEY}`,
        {   method: "GET", 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json',}
        })
        .then(response => response.json())
        .then(res => {
            setRestaurantsInState(res.data)
        })
        .catch(err => console.log(err))
    }, []);

    return restaurantsInState
}

export default useRestaurantByState
