import React from 'react';
import off from "./../../assets/img/1.svg"
import car from "./../../assets/img/2.svg"
import too from "./../../assets/img/3.svg"

const Blue = () => {
    return (
        <section id="blue">
            <div className="container">
                <div className='blue'>
                    <div className="blue--for">
                        <h2>About US</h2>
                        <p>Organic food is grown without the use of <br/>
                            synthetic chemicals, such as human-made <br/>
                            pesticides and fertilizers, and does not contain <br/>
                            genetically modified organisms (GMOs). <br/>
                            Organic foods include fresh produce, meats, <br/>
                            and dairy products as well as processed foods <br/>
                            such as crackers, drinks, and frozen meals.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="blue--tia">
                        <img src={off} alt=""/>
                        <img src={car} alt=""/>
                    </div>
                    <img src={too} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Blue;