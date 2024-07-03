import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import Catalog from '../../features/catalog/Catalog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '' , element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/catalog/:productId', element: <ProductDetails /> },
    ],
  },
]);
