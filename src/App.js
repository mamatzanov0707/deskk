import logo from './logo.svg';
import "./styles/style.scss"
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Home from "./components/home/home";
import Blue from "./components/blue/blue"
import Book from "./components/book/book"
import Green from "./components/green/green"
import Watch from "./components/watch/watch"
import Tools from "./components/tools/tools";
import Dell from "./components/dell/dell";
import Footer from "./components/footer/footer";
import './App.css';
import {useState} from "react";


function App() {
    const [dark, setDark] = useState(false)

    function getDark() {
        setDark(!dark)
    }
    return (
        <div style={{
            background: dark ? "#db441f" : 'rgba(22,255,130,0.68)',
            color: dark ? '#2C3847' : ''
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Hero getDark={getDark} dark={dark}/>
            <Home getDark={getDark} dark={dark}/>
            <Blue getDark={getDark} dark={dark}/>
            <Book getDark={getDark} dark={dark}/>
            <Green getDark={getDark} dark={dark}/>
            <Watch getDark={getDark} dark={dark}/>
            <Tools getDark={getDark} dark={dark}/>
            <Dell getDark={getDark} dark={dark}/>
            <Footer getDark={getDark} dark={dark}/>
        </div>
    );

}

export default App;
