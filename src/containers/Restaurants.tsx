import React, {  } from 'react'
import Layout from '../components/Layout'
import Restaurantcard from '../components/Restaurantcard'
// import { Link } from 'react-router-dom'


function Restaurants(  ) {

    return (
        <Layout>
            <section id="local__restaurants">
                <div className="container restaurant-cards-container">
                    <div className="restaurants__category">
                        <div className="res__category-title">
                            <h3>Favorite Restaurant</h3>
                        </div>
                        <div className="res__wrap">
                            <div className="flex res__card-row">
                                <Restaurantcard />
                                <Restaurantcard />
                                <Restaurantcard />
                            </div>
                            <div className="flex res__card-row">
                                <Restaurantcard />
                                <Restaurantcard />
                                <Restaurantcard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Restaurants
