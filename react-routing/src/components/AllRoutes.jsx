import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import User from './User';
import Product from './Product';
import Help from './Help';
import PageNotFound from './PageNotFound';
import USerDetails from './USerDetails';
import ProductDetails from './ProductDetails';
import PrivateComp from './PrivateComp';

export default function AllRoutes() {
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/user",
      element:<PrivateComp><User /></PrivateComp>
    },
    {
      path: "/products",
      element: <PrivateComp> <Product /></PrivateComp>
    },
    {
      path: "/help",
      element: <Help />
    }, 
    {
      path: "*",
      element: <PageNotFound />
    },
    {
      path: "/userDetails",
      element: <USerDetails  />
    },
    {
      path: "/productdetails/:id",
      element: <ProductDetails/>
    },
  ];

  return (
    <Routes>
      {routes.map((ele, idx) => (
        <Route key={idx} path={ele.path} element={ele.element} />
      ))}
    </Routes>
  );
}
