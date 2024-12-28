import React from 'react'

export default function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>

  )
}
