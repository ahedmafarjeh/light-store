import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch/useFetch';
import Loading from '../Loading/Loading';

export default function Product() {
  const { category, pid } = useParams();
  
  const { data, error, loading } = useFetch(`https://dummyjson.com/products/${pid}`);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`} // 'text-warning' for gold, 'text-muted' for gray
        ></i>
      );
    }
    return stars;
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className='product-details py-5'>
        <h2 className='text-center mb-4'>{data.title}</h2>
        <div className="container">
          {error ? <div className='alert alert-danger'>{error}</div> :
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.thumbnail} alt={data.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <p className="card-text"><strong>Price: ${data.price}</strong></p>
                    
                    <div className="row">
                      <div className="col-lg-6">
                      <p className="card-text badge text-bg-danger">Discount%: {data.discountPercentage}</p>
                      <br />
                      <p className="card-text badge text-bg-success">Warranty: {data.warrantyInformation}</p>
                      <br />
                      <p className="card-text  ">Rating: {renderStars(data.rating)} </p>
                      
                    
                      
                      </div>
                      <div className="col-lg-6">
                      <p className="card-text">Dimentions:</p>
                      <ul> 
                        <li>Width: {data.dimensions.width}</li>
                        <li>Height: {data.dimensions.height}</li>
                        <li>Depth: {data.dimensions.depth}</li>
                      </ul>

                      </div>

                    </div>

                      

                        <div className="imgs bg-danger ">
                          <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                              {data.images.map(img =>
                                <div key={img} className={`text-center carousel-item ${img === data.images[0] ? 'active' : ''}`}>
                                  <img className='img-fluid  w-50 ' src={img} alt={data.title} />
                                </div>
                              )}

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true" />
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true" />
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                      
                    



                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}
