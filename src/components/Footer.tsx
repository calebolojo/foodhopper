import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="flex f-row footer__row1">
                    <div className="frow__col">
                        <div>Trending Restaurants</div>
                        <ul>
                            <li><Link to="/">American Deli</Link></li>
                            <li><Link to="/">Subway</Link></li>
                            <li><Link to="/">South Cobb Diner</Link></li>
                            <li><Link to="/">Zaxby's</Link></li>
                            <li><Link to="/">Marco's Pizza</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div>Top Dishes Near Me</div>
                        <ul>
                            <li><Link to="/">Souffle near me</Link></li>
                            <li><Link to="/">Falafel Sandwich near me</Link></li>
                            <li><Link to="/">Philly Roll near me</Link></li>
                            <li><Link to="/">Spider Roll near me</Link></li>
                            <li><Link to="/">Mexican Burgers near me</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div>Top Cousines Near Me</div>
                        <ul>
                            <li><Link to="/">Poke near me</Link></li>
                            <li><Link to="/">Vegetarian near me</Link></li>
                            <li><Link to="/">Italian near me</Link></li>
                            <li><Link to="/">Japanese near me</Link></li>
                            <li><Link to="/">Food near me</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div>Trending Categories</div>
                        <ul>
                            <li><Link to="/">American</Link></li>
                            <li><Link to="/">Chicken</Link></li>
                            <li><Link to="/">Sandwiches</Link></li>
                            <li><Link to="/">Takeout</Link></li>
                            <li><Link to="/">Desserts</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div></div>
                        <ul>
                            <li><Link to="/">Fast Food</Link></li>
                            <li><Link to="/">Pickup</Link></li>
                            <li><Link to="/">Lunch</Link></li>
                            <li><Link to="/">Breakfast</Link></li>
                            <li><Link to="/">Salad</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex f-row footer__row1">
                    <div className="frow__col">
                        <div>Nearby cities</div>
                        <ul>
                            <li><Link to="/">Gainesville, GA</Link></li>
                            <li><Link to="/">Albany</Link></li>
                            <li><Link to="/">Woodstock</Link></li>
                            <li><Link to="/">Dunwoody</Link></li>
                            <li><Link to="/">Douglasville</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex f-row footer__row3">
                    <div className="frow__col">
                        <div>Nearby cities</div>
                        <ul>
                            <li><Link to="/">Gainesville, GA</Link></li>
                            <li><Link to="/">Albany</Link></li>
                            <li><Link to="/">Woodstock</Link></li>
                            <li><Link to="/">Dunwoody</Link></li>
                            <li><Link to="/">Douglasville</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex f-row footer__row3">
                    <div className="frow__col">
                        <div>Get to know us</div>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Investors</Link></li>
                            <li><Link to="/">Company Blog</Link></li>
                            <li><Link to="/">Engineering Blog</Link></li>
                            <li><Link to="/">Merchant Blog</Link></li>
                            <li><Link to="/">Gift Cards</Link></li>
                            <li><Link to="/">Dasher Central</Link></li>
                            <li><Link to="/">DoorDash Stories</Link></li>
                            <li><Link to="/">LinkedIn</Link></li>
                            <li><Link to="/">Glassdoor</Link></li>
                            <li><Link to="/">Accessibility</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div>Let Us help You</div>
                        <ul>
                            <li><Link to="/">Account Details</Link></li>
                            <li><Link to="/">Order History</Link></li>
                            <li><Link to="/">Help</Link></li>
                        </ul>
                    </div>
                    <div className="frow__col">
                        <div>Doing Business</div>
                        <ul>
                            <li><Link to="/">Become a Hopper</Link></li>
                            <li><Link to="/">Be a Partner Restaurant</Link></li>
                            <li><Link to="/">Get Dashers for Deliveries</Link></li>
                            <li><Link to="/">Get DoorDash for Work</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="f-row footer__row3">
                    <ul>
                        <li><Link to="/">Terms of Service</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Notice At Collection</Link></li>
                        <li><Link to="/">Do Not Sell My Personal Information</Link></li>
                        <li><Link to="/">Delivery Locations</Link></li>
                        <li><Link to="/">© 2021 FoodHub</Link></li>
                    </ul>
                </div>

                
            </div>
        </section>
    )
}

export default Footer
