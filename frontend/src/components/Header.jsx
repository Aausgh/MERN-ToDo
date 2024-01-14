import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
      return (
            <nav className='bg-transparent sticky top-0 z-10'>
                  <div className='w-11/12 m-auto py-6 '>
                        <Link to={'/'} >
                              <h1 className='text-2xl font-bold text-gray-200'>DoListo</h1>
                        </Link>
                  </div>

            </nav>
      )
}

export default Header