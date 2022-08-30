import React from 'react'
import Search from './Search'

function Header() {
  return (
    <div className='h-40'>
    <p className='font-bold  '>Notes Application</p>

      <Search />
    </div>
  )
}

export default Header