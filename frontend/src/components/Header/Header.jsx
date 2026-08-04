import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react';
import { UserRound } from 'lucide-react';
export default function Header() {
  return (
      <div className='flex justify-between items-center px-12 py-6 bg-white' >
          <div>
              <div className='flex flex-col items-start gap-0.5'>
                  <div className='w-5 h-1 bg-black '></div>
                  <div className='w-2 h-1 bg-black'></div>
                   {/* Logo */}
              <Link to="/" className=' text-lg font-semibold text-black'>
                  Dewllo
              </Link>
              </div>
          </div>
          
          <div className='flex gap-10 text-lg font-semibold'>
              <Link to="home">Home</Link>
              <Link to="services">Services</Link>
              <Link to="agents">Agents</Link>
             <Link to="contact">Contact</Link>
          </div>

          <div className='flex gap-10'>
              <Search />
              <UserRound />
              <Link to="signin" className="bg-black text-white px-4 py-2 rounded-md hover:bg-black">
                Sign In
              </Link>
            </div>
      
    </div>
  )
}



