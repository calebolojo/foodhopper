import React, { Component } from 'react'
import Footer from './components/Footer'
import Restaurantcard from './components/Restaurantcard'

export class Home extends Component {
    render() {
        return (
            <>
                <section id="hero">
                    <div className="container hero__container">
                        <div className="hero__wrap">
                            <div className="hero__logo"></div>
                            <div className="hero__content">
                                <h1>Restaurant and more delivered to your door</h1>
                                <div id="search__form">
                                    <div className="search__faux-input">
                                        <img src="http://via.placeholder.com/16x20" alt="location" width="16" />
                                        <div className="search__input-wrap">
                                            <input type="text" placeholder="Enter delivery zip address" />
                                            <div className="search__go">
                                                <button type="submit">
                                                    <img src="http://via.placeholder.com/16x14" alt="search" width="16" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

                <Footer />
            </>
        )
    }
}

export default Home
