import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import Login from './components/Login'
import {  RouterProvider ,Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from './components/layout/layout'

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<Layout/>}>
    <Route index path="/hero" element={< AppHero/>} />
    <Route  path="/Login" element={< Login/>} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
