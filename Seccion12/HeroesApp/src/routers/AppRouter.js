import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import LoginScren from '../components/Login/LoginScren'

import { DashboardRoutes } from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScren />
                    </PublicRoute>} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>} />

            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
