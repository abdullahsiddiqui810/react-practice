import React from 'react'
import {useParams} from 'react-router-dom'

export default function User() {
  const { userid } = useParams()
  return (
    <div className='text-center'>
      <h1 className='text-white bg-mauve-600'>USer: {userid}</h1>
    </div>
  )
}
