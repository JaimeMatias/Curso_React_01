import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import LoginScren from '../components/Login/LoginScren'

import { DashboardRoutes } from './DashboardRoutes'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScren />} />
                <Route path="/*" element={<DashboardRoutes/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
