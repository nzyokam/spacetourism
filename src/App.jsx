
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';
import MainLayout from './layout/MainLayout';
import CustomRouter from './CustomRouter'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'Destination', element: <Destination /> },
      { path: 'Crew', element: <Crew /> },
      { path: 'Technology', element: <Technology /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <CustomRouter />
    </RouterProvider>
  );
}
