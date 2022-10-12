import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import TestDetails from './components/TestDetails/TestDetails';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/test/:id',
          element: <TestDetails></TestDetails>,
          loader: ({params}) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      ],
    },
  ])

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
