import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {MainLayout} from "./components/mainLayout";


export const App =() =>{

        return (
            <MainLayout/>
        );
}

export default App;