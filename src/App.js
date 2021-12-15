import CallApi from './component/CallApi'
import { ThemeContext } from "./component/ThemeContext";
import SwitchButton from "./component/Button";
import React, { useContext } from "react";
import "./App.css";

function App () {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
           <h2> PENDU </h2>
           <p> Devine Le mot Bg </p>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
      </h1>

                <CallApi />
                <SwitchButton />
                
            </div>


    );
}

export default App;