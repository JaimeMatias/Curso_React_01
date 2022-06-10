import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouther from './AuthRouther'

const AppRouter = () => {
    return (
        <>
            <h1>AppRouter</h1>
            {
                /* Routher:
                path=/auth
                No es exact
                component={AuthRouter}
                */
            }
            {
                /* Main route
                exact
                path='/'
                component={JournalScreen}
                
                */
            }
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/login" element={<LoginScreen />}>
                        <Route path="*" element={<LoginScreen />} />
                    </Route>
                    <Route path="/" element={<JournalScreen />}></Route>

                </Routes>


            </BrowserRouter>
        </>
    )
}

export default AppRouter
