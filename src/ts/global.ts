import React from 'react'


export interface HeadbarProps {
    stage?: number,
}

export interface RestaurantByZipProps {
    zip: number, 
    size: number,
    numPage: number, 
    isFullmenu: boolean 
}

export interface RestaurantByState {
    state: string, 
    size: number,
    numPage: number, 
    isFullmenu: boolean 
}