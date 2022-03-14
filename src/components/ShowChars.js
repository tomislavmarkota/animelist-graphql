import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowChars({char}) {
  return (
    <div className='card text-center m-3' style={{width: "12rem"}} key={char.id}>
        <img className='card-img-top' style={{height: "18rem"}} alt={char.name.full} src={char.image.large}/>
        <div className='card-body'>
          <p className='card-title text-white'>
            {char.name.full}
          </p>
          <p className='card-text'>Gender: {char.gender === null ? "unknown" : char.gender}</p>
          <Link className='btn btn-primary' to={`/characterinfo/${char.id}`}>More info</Link>
        </div>
    </div> 
  )
}
