import React, { useState, useEffect } from 'react'
import { RestaurantByZipProps } from '../ts/global'

function useRestaurantByZip( { zip, size, numPage, isFullmenu }:RestaurantByZipProps ) {

    const [ restaurantsInZip, setRestaurantsInZip ] = useState(null);

    useEffect(() => {
        fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zip}?size=${size}&page=${numPage}&fullmenu=${isFullmenu}&key=${process.env.REACT_APP_DOCUMENU_API_KEY}`,
        {   method: "GET", 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json',}
        })
        .then(response => response.json())
        .then(res => {
            setRestaurantsInZip(res.data)
        })
        .catch(err => console.log(err))
     
    }, []);

    return restaurantsInZip
}

export default useRestaurantByZip
