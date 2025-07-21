//Hash routes se encontra no app.tsx

import PgLogin from './Pages/Login/pgLogin';


import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/PgLogin" />} />
            <Route path="/PgLogin" element={<PgLogin />} />

        </Routes>
    );
}
