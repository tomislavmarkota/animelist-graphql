import React from 'react'
import { gql, useQuery  } from '@apollo/client'
import ShowChars from './ShowChars';
import Header from './Header';
import Preloader from './Preloader';

const CHARACTER_QUERY = gql`
  query CharacterQuery{
      Page {
          characters{
            id
            name{
              full
            }
            gender
            image{
              large
            }
            age
          } 
      } 
  }
`

export default function Characters() {
  
  const { loading, error, data } = useQuery(CHARACTER_QUERY);
  

  if(loading) return <Preloader />
  if(error) return <h2>{error.message}</h2>


     
  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-center'>
        {data.Page.characters.map((char) => {
            return (
              <ShowChars key={char.id} char={char}/>
            );
        })}
      </div>
    </>
  )
}
