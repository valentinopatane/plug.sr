import React from 'react';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
//CSS Basics
import './App.css';
//NAVBAR
import Navbar from './components/NavBar';
//PAGES
import Home from './views/Home';
import Shop from './views/Shop';
import ItemDetailContainer from './views/ItemDetailContainer';
import Categories from './views/Categories';
import Cart from './views/Cart'
import Checkout from './views/Checkout';
import Archive from './views/Archive';
import About from './views/About';
import Error404 from './views/Error404';

//CONTEXT
import {ItemsProvider} from './components/context/ItemsContext';



function App() {
  return (
    <ItemsProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path={'/plug.sr'} element={<Home/>}/>
          <Route exact path={'shop'} element={<Shop/>}/>
          <Route exact path={'/shop/item/:id'} element={<ItemDetailContainer/>}/>
          <Route exact path={'/category/:id'} element={<Categories/>}/>
          <Route exact path={'/cart'} element={<Cart/>}/> 
          <Route exact path={'/checkout'} element={<Checkout/>}/>
          <Route exact path={'/archive'} element={<Archive/>}/>
          <Route exact path={'/about'}element={<About/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;

