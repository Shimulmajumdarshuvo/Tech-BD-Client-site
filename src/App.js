
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventory from './Card/AllInventory/AllInventory';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Inventory from './Components/Home/Inventory/Inventory';
import Login from './Components/Home/Login/Login';
import Register from './Components/Home/Register/Register';
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
        <Route path='/service/:serviceId' element={<StokeUpdate></StokeUpdate>}></Route>
        <Route path='allinventory' element={<AllInventory></AllInventory>}></Route>
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
