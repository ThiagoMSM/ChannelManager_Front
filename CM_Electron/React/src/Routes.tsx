//Hash routes se encontra no app.tsx
import PagLogin from './Pages/Login/PagLogin';

import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/PagLogin" />} />
            <Route path="/PagLogin" element={<PagLogin />} />
        </Routes>
    );
}
