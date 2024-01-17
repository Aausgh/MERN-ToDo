import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
      return (
            <nav className='bg-transparent'>
                  <div className='w-11/12 m-auto py-4 '>
                        <Link to={'/'} >
                              <h1 className='text-3xl font-bold text-gray-200'>DoListo</h1>
                        </Link>
                  </div>

            </nav>
      )
}

export default Header