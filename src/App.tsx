import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import MainLayout from './pages/MainLayout';
import AnalyticsPage from './pages/AnalyticsPage';
import Error from './pages/Error';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<AnalyticsPage/>
        }
      ]

    },
  ]);

  return (
<main >

<RouterProvider router={router} />

</main>
  )
}

export default App
