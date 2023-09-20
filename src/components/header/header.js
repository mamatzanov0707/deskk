import React, {useEffect, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai"


const Header = ({getDark, dark}) => {
    const [counter, setCounter] = useState(false)

    return (
        <header id="header">
            <div className="container">
                <div className="header" style={{color: dark ? 'white' : ''}}>
                    <h3 style={{color: dark ? 'white' : ''}}>UI.desk</h3>
                    <nav className="header--off" style={{color: dark ? 'wheat' : 'wheat'}}>
                        <a style={{color: dark ? 'white' : 'black'}} href="#">Home</a>
                        <a style={{color: dark ? 'white' : 'black'}} href="#">About</a>
                        <a style={{color: dark ? 'white' : 'black'}} href="#">Contact</a>
                        <a style={{color: dark ? 'white' : 'black'}} href="#">Testimonials</a>
                    </nav>
                    <div className="header--nov">
                        <input type="search" placeholder="search...." style={{display: counter ? "block" : "none"}}/>
                        <AiOutlineSearch className="header--too" onClick={() => setCounter(!counter)}/>
                        <button onClick={getDark} >Order Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;