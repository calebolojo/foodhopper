import React, { Component } from 'react'
import Layout from '../components/Layout'

export class ViewRestaurant extends Component {
    render() {
        return (
            <Layout>
                <section id="single-resturant">
                    <div className="single__res-wrapper">
                        <div className="restaurant__data-list-wrap">
                            <div className="restaurant__featuredimg">
                                <div className="restaurant__logo"></div>
                            </div>
                            <div className="resturant__actions">
                                <div className="res__action-left">
                                    <button>
                                        <span>All Day</span>
                                        <div><img src="http://via.placeholder.com/12x11" alt="more" /></div>
                                    </button>
                                    <div>
                                        10:00 am - 9:30 pm
                                    </div>
                                </div>
                                <div className="res__action-right">
                                    <button>
                                        <img src="http://via.placeholder.com/24x24" alt="love" width="24" />
                                        <div>Save</div> 
                                    </button>
                                </div>
                            </div>
                            <div className="restaurant__menu-category-tabs">
                                <div className="category__tabs">
                                    <button>
                                        <img src="http://via.placeholder.com/24x24" width="24" alt="options" />
                                    </button>
                                    <div className="tabs__items">
                                        <div className="tabitem">
                                            <button>Popular Items</button>
                                        </div>
                                        <div className="tabitem">
                                            <button>Entrees</button>
                                        </div>
                                        <div className="tabitem">
                                            <button>Sides</button>
                                        </div>
                                        <div className="tabitem">
                                            <button>Beverages</button>
                                        </div>
                                        <div className="tabitem">
                                            <button>Salads</button>
                                        </div>
                                        <div className="tabitem">
                                            <button>Treats</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menulist__block category-1">
                                <div className="menulist__title">
                                    <h4>Popular Items</h4>
                                    <p>Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis </p>
                                </div>
                            </div>
                        </div>
                        <aside id="orderlist__aside">
                            <div className="orderlist__wrap">
                                
                            </div>
                        </aside>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default ViewRestaurant
