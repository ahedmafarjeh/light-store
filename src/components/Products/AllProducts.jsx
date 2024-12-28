import React from 'react'
import useFetch from '../useFetch/useFetch';
import Loading from '../Loading/Loading';
import { Link, useParams } from 'react-router-dom';

export default function AllProducts() {

  const { data, error, loading } = useFetch('https://dummyjson.com/products');

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className='category-products py-5' style={{ backgroundColor: '#8bd1e0' }}>
        <h2 className='text-center mb-4'>All PRODUCTS</h2>
        <div className="container">
          <div className="row g-2">
            {error ? <div className='alert alert-danger'>{error}</div> : data.products.map((product, index) =>
              <div className="col-lg-3">
                <div className="card" style={{ width: '18rem' ,height:'26rem'}}>
                  <img src={product.thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title ">{product.title}</h5>
                    <Link className='btn btn-primary ' to={`/product/${product.id}`}>Show More</Link>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

      </section>
    </>
  )
}

