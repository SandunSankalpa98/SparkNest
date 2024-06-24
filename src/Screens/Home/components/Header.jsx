import React from 'react'
import logo from '../../../assets/SparkNest.png'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg'>
      <button className='btn btn-primary btn-sm md:btn-md'> + New Idea</button>
      <h2 className='font-bold text-sm md:text-2xl'>Top 20- Ideas</h2>
      <div className='items-center flex'>
        <img src={logo} alt=""  className='w-10 h-10 rounded-full'/>
      </div>
    </div>
  )
}

export default Header
