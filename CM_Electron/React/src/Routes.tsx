//Hash routes se encontra no app.tsx

import PgLogin from './Pages/Login/pgLogin';
import PagHome from './Pages/PagHome/PagHome';

import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login/" replace />} />
      <Route path="/login/*" element={<PgLogin />} />
      <Route path="/home" element={<PagHome />} />
    </Routes>
  );
}