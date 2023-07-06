import './App.css';
import MainRoutes from './MainRoutes';
import {RouterProvider} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
    <RouterProvider router={MainRoutes} />
    </>
  );
}

export default App;
