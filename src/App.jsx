import React from 'react'
import Navbar from './component/navbar/Nabar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Coin from './pages/Home/Coin/Coin'
import Footer from './component/navbar/Footer/Footer'
import Blog from './component/Blog/Blog'
import Singin from './pages/Home/Singin/Singin'
// import './index.css';
// import './index.css';

const App= () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/Singin' element={<Singin/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App