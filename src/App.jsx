import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Qoutes from './components/Qoutes/Qoutes'
import Categories from './components/Category/Categories'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products/Products'
import Product from './components/Products/Product'
import AllProducts from './components/Products/AllProducts'
import MainContent from './components/MainContent/MainContent'
import AddProduct from './components/Products/AddProduct'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<MainContent />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/categories' element={<Categories />}></Route>
      <Route path='/categories/:category' element={<Products />}></Route>
      <Route path='/categories/:category/:pid' element={<Product />}></Route>
      <Route path='/product/:pid' element={<Product />}></Route>
      <Route path='/allproducts' element={<AllProducts />}></Route>
      <Route path='/addproduct' element={<AddProduct />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
