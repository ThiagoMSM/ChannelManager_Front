//Hash routes se encontra no app.tsx
import PagLogin from './Pages/Login/PagLogin';
import PagFormCadastro from './Pages/Login/Components/FormCadastro';
import PagFormRecuperarSenha from './Pages/Login/Components/FormRecuperarSenha';
import PagFormTrocaSenha from './Pages/Login/Components/FormTrocaSenha';
import PgLogin from './Pages/Login/pgLogin';


import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/PgLogin" />} />
            <Route path="/PgLogin" element={<PgLogin />} />
            <Route path="/PagFormCadastro" element={<PagFormCadastro />} />
            <Route path="/PagFormRecuperarSenha" element={<PagFormRecuperarSenha />} />
            <Route path="/PagFormTrocaSenha" element={<PagFormTrocaSenha />} />
        </Routes>
    );
}
