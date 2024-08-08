import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { MyContext } from "../App";
export default function Header () {
    const {data, currLang, setCurrLang} = useContext(MyContext); 
    const handleChange = (e) => {
        console.log(e);
        
        setCurrLang(e.target.value);
    } 
    return (
        <div className="header">
            <div className="logo">
                <h2>Header</h2>
            </div>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/childOne">Child One</Link>
                <Link className="link" to="/childTwo">Child Two</Link>
            </div>
            <div className="mylang">
                <select name="Lang" id="Lang" value={currLang} onChange={handleChange}>
                    {
                        data.map((lang, index) => (
                            <option value={lang} key={index}>{lang}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}