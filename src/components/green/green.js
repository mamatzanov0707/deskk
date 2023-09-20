import React from 'react';
import off from './../../assets/img/15.svg'

const Green = () => {
    return (
        <section id="green">
            <div className='container'>
                <div className='green'>
                    <div className="green--blue">
                        <h2>Cooked by the <br/>
                            Best Chefs</h2>
                        <p>Believing neglected so so allowance existence <br/>
                            departure in. In design active temper be <br/>
                            uneasy. Thirty for remove plenty regard you <br/>
                            summer though. He preference connection <br/>
                            astonished on of ye.</p>
                        <div className="green--how">
                            <input type="checkbox"/>
                            <p>A guaranteed delicious meal</p>
                        </div>
                        <div className="green--how">
                            <input type="checkbox"/>
                            <p>Food is guaranteed hygienic</p>
                        </div>
                        <div className="green--how">
                            <input type="checkbox"/>
                            <p>Cooked quickly</p>
                        </div>

                    </div>
                    <img src={off} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Green;