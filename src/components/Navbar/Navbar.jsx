import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Light Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'/categories'}>Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'/allproducts'}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'/addproduct'}>Add Product</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
