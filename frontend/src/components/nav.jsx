import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, UserRound, Menu, X } from 'lucide-react'

// Corner-bracket logo icon (matches Dwello brand mark)
function DwelloIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* vertical bar */}
      <rect x="2" y="2" width="3.5" height="18" rx="1" fill="#3b2a1a" />
      {/* horizontal bar (top) */}
      <rect x="2" y="2" width="18" height="3.5" rx="1" fill="#3b2a1a" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

 

  const activeCls = 'text-[#3b2a1a] border-b-2 border-[#3b2a1a]'
  const inactiveCls =
    'text-[#5c3d2e] hover:text-[#3b2a1a] transition-colors duration-200'

  return (
    <header className="bg-[#f5ede8] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 select-none group">
          <DwelloIcon />
          <span className="text-xl font-bold tracking-wide text-[#3b2a1a] group-hover:opacity-80 transition-opacity">
            Dwello
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold pb-0.5 ${isActive ? activeCls : inactiveCls}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div className="hidden md:flex items-center gap-5">
          <button
            aria-label="Search"
            className="text-[#5c3d2e] hover:text-[#3b2a1a] transition-colors"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Account"
            className="text-[#5c3d2e] hover:text-[#3b2a1a] transition-colors"
          >
            <UserRound size={20} />
          </button>
          <Link
            to="/signin"
            className="bg-[#3b2a1a] text-[#f5ede8] text-sm font-semibold px-5 py-2 rounded-md
                       hover:bg-[#5c3d2e] transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-[#3b2a1a]"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5ede8] border-t border-[#e0cfc7] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold ${isActive ? 'text-[#3b2a1a]' : 'text-[#5c3d2e]'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-5 pt-2 border-t border-[#e0cfc7]">
            <Search size={20} className="text-[#5c3d2e]" />
            <UserRound size={20} className="text-[#5c3d2e]" />
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className="bg-[#3b2a1a] text-[#f5ede8] text-sm font-semibold px-5 py-2 rounded-md"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

