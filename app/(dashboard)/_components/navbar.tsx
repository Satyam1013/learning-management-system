import React from 'react'
import MobileSidebar from './mobile-sidebar'
import NavbarRouter from '@/components/navbar-routes'

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar/>
      <NavbarRouter/>
    </div>
  )
}

export default Navbar
