import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

const CHAR_INFO = gql`
    query CharInfo($id: Int! ){
        Character(id: $id){
          image{
            large
          }
          name{
            full
          }
          description
          age
        }     
    }
`


export default function CharacterInfo() {
    let {id} = useParams();

    const {loading, error, data} = useQuery(CHAR_INFO, {
        variables: {id}
    })

  if(loading) return <Preloader />
  if(error) return <h2>{error.message}</h2>

  return (
    <>
      <h1 className='display-5 my-3 text-center'>Character info</h1>
      <img className='m-auto d-block' src={data.Character.image.large}/>
      <h3 className='mt-3 text-center'>{data.Character.name.full}</h3>
      <p className='text-center'>Age: {data.Character.age === null ? "Unknown" : data.Character.age}</p>
      <p className='mt-5' style={{fontSize: ".7rem"}}>{data.Character.description}</p>
      <Link className='btn btn-secondary mb-3' to="/">Back</Link>
    </>
  )
}
