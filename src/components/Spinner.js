import React from 'react'
import "./Spinner.css" ;
export const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='spinner'></div>
        <p className='text-blue-900 text-lg font-semigold'>Loading....</p>
    </div>
  )
}
export default Spinner;