import PagHome from './Pages/Home/PagHome';
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Navigate to="/PagHome" />} />
                <Route path="/PagHome" element={<PagHome />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}