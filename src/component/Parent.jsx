import React, { useContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { MyContext } from "../App";
export default function Parent() {
    const {currLang} = useContext(MyContext);
    return (
        <div className="parent">
            <h1>Parent</h1>
            <h2>Curr Lang is: {currLang}</h2>
        </div>
    )
}