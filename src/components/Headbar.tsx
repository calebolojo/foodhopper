import React from 'react'
import { Link } from 'react-router-dom'
import { HeadbarProps } from '../ts/global'


function Headbar( props:HeadbarProps ) {
    return (
        <section>
            <div>
                <div className="menubtn">
                    <button>
                        <img src="http://via.placeholder.com/24x24" width="24" alt="menu" />
                    </button>
                </div>

                <div className="delivery__meta">
                    <div className="delivery__date-wrap">
                        <button id="delivery_datetime">
                            <div className="datetime__value">
                                ASAP 
                            </div>
                            <img src="http://via.placeholder.com/11x8" alt="drop" />
                        </button>
                    </div>
                    <span>to</span>
                    <div className="delivery__location-wrap">
                        <button>
                            <div className="location__value">
                                1272 Grampian Pass
                            </div>
                            <img src="http://via.placeholder.com/11x8" alt="drop" />
                        </button>
                    </div>
                </div>


                <div id="hopper__logo">
                    <Link to="/">
                        <img src="http://via.placeholder.com/160x30" width="160" alt="Foodhopper" />
                    </Link>
                </div>


                <div id="search__cart">
                    <div className="hopper__search">
                        <div>
                            <img src="http://http://via.placeholder.com/24x24" width="24" alt="Search" />
                        </div>
                    </div>
                    <div className="hopper__cart">
                        <button className="cart__pill">
                            <div className="cart__icon">
                                <img src="http://http://via.placeholder.com/24x24" width="24" alt="Search" />
                            </div>
                            <div className="cart__numitems">2</div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Headbar