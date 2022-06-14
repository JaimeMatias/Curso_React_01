import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AuthRouthes from '../auth/routes/AuthRouthes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'



const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
            <Route path='/auth/*' element={<AuthRouthes />} />

            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
        </BrowserRouter>

    )
}

export default AppRouter
