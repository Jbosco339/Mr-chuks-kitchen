import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Cart from "./pages/Cart.jsx"
import Menu from "./pages/Menu.jsx"
import './App.css'
import Navbar from './component/Navbar.jsx';

function App() {
  

  return (
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
