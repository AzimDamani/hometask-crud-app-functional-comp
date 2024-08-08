import React, { useContext } from "react";
import { MyContext } from "../App";

export default function ChildTwo (){
    const {currLang} = useContext(MyContext);
    return(
        <div className="child">
            <h1>Child Two</h1>
            <h2>Curr Lang is : {currLang}</h2>
        </div>
    )
}