
import { Link } from 'react-router';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';

export default function Categories() {

  const {data,error,loading} = useFetch('https://dummyjson.com/products/category-list');
  if (loading){
    return <Loading />;
  }
  return (
    <>
      <section className='categories bg-light py-5'>
        <h2 className='text-center mb-4'>Categories</h2>
        <div className="container">
          <div className="row g-2">
            { error? <div className='alert alert-danger'>{error}</div> : data.map(category =>

            <div key={category} className="col-lg-3">
                <div  className="card bg-info" style={{ width: '20rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{category}</h5>
                  <Link className='btn btn-dark' to={`/categories/${category}`} >see products</Link>
                
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
