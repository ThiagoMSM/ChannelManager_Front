// App.tsx

import PagLogin from './Pages/PagsLogin/PagLogin/PagLogin';
import PagNewAc from './Pages/PagsLogin/PagNewAccount/PagNewAc';
import PagNewPassw from './Pages/PagsLogin/PagNewPassword/PagNewPassw';
import PagForgotPassw from './Pages/PagsLogin/PagForgotPassword/PagForgotPassw';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/PagLogin" />} />
        <Route path="/PagLogin" element={<PagLogin />} />
        <Route path="/PagNewAccount" element={<PagNewAc />} />
        <Route path="/PagNewPassword" element={<PagNewPassw />} />
        <Route path="/PagForgotPassword" element={<PagForgotPassw />} />
        
      </Routes>
    </HashRouter>
  );
}
