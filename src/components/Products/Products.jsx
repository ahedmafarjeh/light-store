import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';
export default function Products({all}) {
  let {category} = useParams() ;
  let url = '';
  
  // if (all=="true"){
  //   category = 'All';
  //     url = 'https://dummyjson.com/products?limit=15&skip=10';
      
  // }
  // else {
  //   category = useParams();
  //   url = `https://dummyjson.com/products/category/${category}`;
    
  // }
  const {data,error,loading} = useFetch(`https://dummyjson.com/products/category/${category}`);
  
    if (loading){
      return <Loading />;
    }
  return (
    <>
    <section className='category-products py-5'>
      <h2 className='text-center mb-4'>{category!='All'?category.toUpperCase():"All"} PRODUCTS</h2>
      <div className="container">
        { error? <div className='alert alert-danger'>{error}</div> : data.products.map((product, index) =>
          <div key={index} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.thumbnail} alt={product.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price: ${product.price}</strong></p>
                  <Link className='btn btn-primary' to={`/categories/${category}/${product.id}`}>Show More</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
    </>
  )
}
