import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserRound, Search, Menu, X } from 'lucide-react';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex justify-between items-center px-16 md:px-16 py-4 md:py-8 bg-[#FDF8F5] ' >
      {/* Mobile Menu Button */}
      <div className='flex md:hidden items-center'>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/*Logo */}
      <div>
        <div className='flex flex-col items-start gap-0.5'>
          <div className='w-5 h-1 bg-black '></div>
          <div className='w-2 h-1 bg-black'></div>
          <Link to="/" className='text-lg font-semibold text-black'>
            Dewllo
          </Link>
        </div>
      </div>
      
      {/*Desktop Navigation */}
      <div className='hidden md:flex gap-10 text-lg font-semibold'>
        <Link to="home">Home</Link>
        <Link to="services">Services</Link>
        <Link to="agents">Agents</Link>
        <Link to="contact">Contact</Link>
      </div>

      {/* Desktop Actions */}
      <div className=' md:flex items-center gap-10'>
        <Search className="cursor-pointer" />
        <UserRound className="cursor-pointer" />
        <Link to="signin" className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition">
          Sign In
        </Link>
      </div>
    

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col p-6 gap-6 z-50 md:hidden'>n
          {/* Links */}
          <div className='flex flex-col gap-4 text-lg font-semibold'>
            <Link to="home" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="agents" onClick={() => setIsOpen(false)}>Agents</Link>
            <Link to="contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
      
    </div>
  )
}