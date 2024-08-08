import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Parent from "./component/Parent"
import ChildOne from "./component/ChildOne";
import ChildTwo from "./component/ChildTwo";
import Header from "./component/Header";
import { createContext, useState } from "react";


export const MyContext = createContext();

function App() {
  const data = ["Eng", "Hindi", "French"];
  const [currLang, setCurrLang] = useState(data[0]);

  const ContextValue = {
    data, 
    currLang,
    setCurrLang
  };

  return (
    <div className="App">
      <MyContext.Provider value={ContextValue}> 
      <BrowserRouter >
        <Header />
      <Routes>
        <Route path="/" element={<Parent />}/>
        <Route path ="/childOne" element={<ChildOne />}/>
        <Route path="/childTwo" element={<ChildTwo />}/>
      </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
