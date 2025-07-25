//Hash routes se encontra no app.tsx

import PgLogin from './Pages/Login/pgLogin';
import PagHome from './Pages/PagHome/PagHome';

import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/PgLogin" />} />
            <Route path="/PgLogin" element={<PgLogin />} />
            <Route path="/PagHome" element={<PagHome />} />
            
        </Routes>   
    );
}
