import React from 'react';
import off from "./../../assets/img/14.svg"
const Book = () => {
    return (
        <section id="book">
            <div className="container">
                <div className="book">
                    <img src={off} alt=""/>
                     <div className="book--cop">
                         <h1>Fresh Vegetables <br/>
                             Every Day</h1>
                         <p>Healthy life as informed declared we enjoy the <br/>
                             margaret. Joy horrible moreover man feelings <br/>
                             own shy. Request norland neither mistake for yet. <br/>
                             Between the for morning assured country believe.</p>
                         <button>Learn More</button>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Book;