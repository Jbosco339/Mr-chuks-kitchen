import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Menu from "./pages/Menu.jsx"
import './App.css'
import './MediaQuerries.css'
import Navbar from './component/Navbar.jsx';
import Explore from './pages/Explore.jsx';
import Orders from './pages/Orders.jsx';
import Footer from './component/Footer.jsx';

function App() {
  

  return (
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/Orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
