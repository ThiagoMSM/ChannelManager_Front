import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <AppRoutes />
    </HashRouter>
  );
}
