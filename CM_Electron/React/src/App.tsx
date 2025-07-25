import { HashRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/UserContext';
export default function App() {
  return (
    <HashRouter>
      <UserProvider>
        <ToastContainer />
        <AppRoutes />
      </UserProvider>
    </HashRouter>
  );
}
