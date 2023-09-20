import React from 'react';
import off from "./../../assets/img/11.svg"
import car from "./../../assets/img/12.svg"
import cat from "./../../assets/img/13.svg"

const Home = () => {
    return (
        <section id="home">
            <div className='container'>
                <div className="home">
                    <h3>Why Choose US?</h3>
                    <p>Organic food is grown without the use of synthetic chemicals</p>
                    <div className='home--too'>
                        <div className='home--car'>
                            <img src={off} alt=""/>
                            <h4>Easy to order</h4>
                            <h5>foods include fresh produce, <br/>
                                meats as well as processed</h5>
                        </div>
                        <div className='home--car'>
                            <img src={car} alt=""/>
                            <h4>Live Order</h4>
                            <h5>Place your online Order easily <br/>
                                and get the food instantly</h5>
                        </div>
                        <div className='home--car'>
                            <img src={cat} alt=""/>
                            <h4>100% Organic</h4>
                            <h5>Organic food is grown without <br/>
                                the use of synthetic chemicals</h5>
                        </div>
                    </div>
                    <div className="home--anna">
                        <div className='home--can'>
                            {/*<img src={} alt=""/>*/}
                            <h2>40+</h2>
                            <h5>Food Partners</h5>
                        </div>
                        <div className='home--can'>
                            <h2>459+</h2>
                            <h5>Trusted Clients </h5>
                        </div>
                        <div className='home--can'>
                            <h2>12k+</h2>
                            <h5>Order Online</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;