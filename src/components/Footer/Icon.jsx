import React from 'react'

export default function Icon({iconName}) {
  let myClass = 'fa-brands fa-facebook-f fs-5 border border-2 rounded-circle p-2';
  if (iconName === 'twitter'){
    myClass += ' fa-twitter';
  }
  else if (iconName === 'instagram'){
    myClass += ' fa-instagram';
  }
  else if (iconName === 'linkedin'){
    myClass += ' fa-linkedin-in';
  }
  else if (iconName === 'facebook'){
    myClass += ' fa-facebook-f';
  }
  
  return (
    <>
      <i className={myClass} />
    </>
  )
}
