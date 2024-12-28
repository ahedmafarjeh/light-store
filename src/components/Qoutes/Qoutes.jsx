import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';
import style from './qoutes.module.css';
export default function Qoutes() {

  const { data, error, loading } = useFetch('https://dummyjson.com/quotes?limit=12&skip=10');

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className='qoutes-section bg-danger vh-100  py-5'>

        <h2 className='text-center mb-4'>Qoutes</h2>
        <div className="container">
          <div className="row g-3">
            {error ? <div className='alert alert-danger'>{error}</div> : data.quotes.map((q, index) =>

              <div key={q.id} className="col-lg-3">
                <div className={`card  bg-info ${style.cardStyle}`} style={{ width: '20rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">Quote {index + 1}</h5>
                    <q className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</q>
                    <h6 className="card-subtitle mt-2 text-body-secondary fw-bold ">{q.author}</h6>

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
