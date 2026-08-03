import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react';
import { UserRound } from 'lucide-react';
export default function Header() {
  return (
      <div>
          <div>
              {/* Logo */}
              <Link to="/">
                  Dewllo
              </Link>
          </div>
          <div>
              <Link to="home">Home</Link>
              <Link to="services">Services</Link>
              <Link to="agents">Agents</Link>
             <Link to="contact">Contact</Link>
          </div>

          <div>
              <Search />
              <UserRound />
              <Link to="signin">Sign In</Link>
          </div>
      
    </div>
  )
}
