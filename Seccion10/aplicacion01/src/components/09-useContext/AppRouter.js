import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>

                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/" element={<HomeScreen />} /> {/*La ruta mas general debe estar siempre abajo*/}
                    <Route path="*" element={<HomeScreen />} /> {/*Cualquier ruta que no coincida con las anteirores me la panda al HomeScreens*/}

                </Routes>

            </div>
        </Router>

    )
}


