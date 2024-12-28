import React from 'react'
import MyImg from '../../assets/imgs/store.svg'
export default function About() {
  return (
    <>
    <section className='about py-5' style={{backgroundColor:'#95f5df'}}>
      <h2 className='text-center mb-4'>About Us</h2>    
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 ps-5 d-flex align-items-center ">
            <p  >Welcome to Light Store, your ultimate online destination for premium lighting solutions! We are dedicated to offering a wide variety of high-quality, stylish lighting products to brighten up your home, office, or any space in need of a little extra glow. From elegant chandeliers to modern pendant lights, floor lamps, and energy-efficient bulbs, our collection is designed to suit every taste and budget. At Light Store, we are committed to providing exceptional customer service, easy navigation, and fast delivery, ensuring your shopping experience is seamless and enjoyable. Let us help you illuminate your world with the perfect lighting!</p>  
          </div>  
          <div className="col-lg-6 text-center">
            <img className='img-fluid w-50' src={MyImg} alt="store image" />
          </div>
          
        </div>  
      </div>  
    </section>
    </>
  )
}
