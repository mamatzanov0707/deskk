import React from 'react';

const Dell = () => {
    return (
        <section id="dell">
            <div className="container">
                <div className="dell">
                    <h3>Subscribe to the Newsletter</h3>
                    <p>Enter your email below to get our daily offers and news</p>
                    <div className='dell--off'>
                        <input type="text" placeholder="Enter your email."/>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dell;