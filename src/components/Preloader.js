import React from 'react'
import loader from '../img/preloader.svg'

export default function Preloader() {
  return (
    <div className='d-flex' style={{height: "100vh"}}>
        <img className='m-auto' src={loader}/>
    </div>
  )
}
