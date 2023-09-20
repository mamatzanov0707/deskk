import React from 'react';
import off from "./../../assets/img/20.svg"
import open from "./../../assets/img/21.svg"
import car from "./../../assets/img/22.svg"


const Watch = () => {
    return (
        <section id="watch">
            <div className="container">
                <div className="watch">
                    <h2>Special Dishes for you</h2>
                    <p>Made with premium & 100% Organic ingredients</p>
                    <div className="watch--play">
                        <div className="watch--more">
                            <img src={off} alt=""/>
                            <h3>Green Salad</h3>
                            <h4>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</h4>
                        </div>
                        <div className="watch--more">
                            <img src={open} alt=""/>
                            <h3>Beef Salad</h3>
                            <h4>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</h4>
                        </div>
                        <div className="watch--more">
                            <img src={car} alt=""/>
                            <h3>Nut Salad</h3>
                            <h4>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</h4>
                        </div>
                    </div>
                    <button>View All</button>
                </div>
            </div>
        </section>
    );
};

export default Watch;