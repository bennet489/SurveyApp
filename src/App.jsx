import {Router} from "react-router-dom";
import React from "react";
import "./Style/index.css"
import NavBar from "./Components/Organismes/NavBar.jsx";
export default function App() {
    return(
        <Router>
            <div>
                <NavBar/>
            </div>
        </Router>
    );
}