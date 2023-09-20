import React from 'react';
import {data} from "../../data/data";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--off">
                        <h2>UI.desk</h2>
                        <p>On formed merits hunted unable merely <br/>
                            by mr whence or. </p>
                    </div>
                    <div className="footer--off">
                        <h2>Home</h2>
                        <a href="#">Company</a>
                        <a href="#">News</a>
                        <a href="#">Team</a>
                    </div>
                    <div className='footer--off'>
                        <h2>About</h2>
                        <a href="#">History</a>
                        <a href="#">Service</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className='footer--off'>
                        <h2>Partner</h2>
                        <a href="#">Business</a>
                        <a href="#">Plan</a>
                        <a href="#">Marketing</a>
                    </div>
                    <div className='footer--off'>
                        <h2>Contact</h2>
                        <a href="#">UI.desk</a>
                        <a href="#">(465)954-8487</a>
                        <a href="#">Lahore, Pakistan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;