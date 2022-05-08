
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventory from './Card/AllInventory/AllInventory';
import InventoryCard from './Card/InventoryCard/InventoryCard';
import AddItem from './Components/AddItem/AddItem';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Inventory from './Components/Home/Inventory/Inventory';
import Login from './Components/Home/Login/Login';
import Register from './Components/Home/Register/Register';
import RequireAuth from './Components/Home/RequireAuth/RequireAuth';

import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Share/Footer/Footer';
import Header from './Components/Share/Header/Header';
import StokeUpdate from './Components/StokeUpdate/StokeUpdate';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>


        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <StokeUpdate></StokeUpdate>
          </RequireAuth>
        }></Route>


        <Route path='/service/:id' element={
          <RequireAuth>
            <InventoryCard></InventoryCard>
          </RequireAuth>
        }></Route>

        <Route path='allinventory' element={
          <RequireAuth>
            <AllInventory></AllInventory>
          </RequireAuth>
        }></Route>


        <Route path='addItem' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>


        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
