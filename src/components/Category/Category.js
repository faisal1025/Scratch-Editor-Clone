import React from 'react'

const Category = () => {
  return (
    <div className='text-sm'>
      <ul className='flex-1 justify-center items-center lg:space-y-8 '>
        <li className='p-3 border-2 rounded border-black'><a href='#motion'>Motion</a></li>
        <li className='p-3 border-2 rounded border-black'><a href='#looks'>Looks</a></li>
        <li className='p-3 border-2 rounded border-black'><a href='#events'>Events</a></li>
        <li className='p-3 border-2 rounded border-black'><a href='#control'>Control</a></li>
      </ul>
    </div>
  )
}

export default Category
