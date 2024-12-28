import React from 'react'
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';
export default function AddProduct() {

    const {data,error,loading} = useFetch('https://dummyjson.com/products/category-list');
    if (loading){
      return <Loading />;
    }
  return (
    <>
    <div className="add-product py-5 " style={{backgroundColor:'#c5bbc7'}}>
    <h1 className='text-center mb-4'>Add Product</h1>
    <div className="container">
    <form>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productName" required />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">Product Price</label>
        <input type="number" className="form-control" id="productPrice" required />
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">Product Description</label>
        <textarea className="form-control" id="productDescription" rows="3" required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="productCategory" className="form-label">Product Category</label>
        <select className="form-select" id="productCategory" required>
        <option>Select Category</option>
        { error? <div className='alert alert-danger'>{error}</div> : data.map(category =>
          <option value={category}>{category}</option>

        )}

        </select>
      </div>
       <div className="mb-3">
        <label htmlFor="productImage" className="form-label">Product Image</label>
        <input type="file" className="form-control" id="productImage" multiple required />
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </div>
    </div>
    </>
  )
}
