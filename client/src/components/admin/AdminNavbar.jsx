import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const AdminNavBar = () => {
  return (
    <div className='flex items-center justify-start px-6 md:px-10 h-16 border-b border-gray-300/30'>
      <Link to='/' className='flex items-center'>
        <img src={logo} alt='logo' className='w-23 h-10 rounded-2xl'/>
      </Link>
    </div>
  )
}

export default AdminNavBar
