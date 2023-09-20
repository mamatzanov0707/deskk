import React from 'react';
import off from './../../assets/img/off1.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--off">
                        <h2>Just <span>Eat healthy</span> <br/>
                            food to live a <br/>
                            healthier life</h2>
                        <p>Enjoy a healthy life by eating healthy foods <br/>
                            that have extraordinary flavors that make <br/>
                            your life healthier for today and in the future</p>
                        <button>Order Now</button>
                    </div>
                    <img src={off} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;