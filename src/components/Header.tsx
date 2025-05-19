import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinks = ['HOME', 'OUR SCREENS', 'SCHEDULE', 'MOVIE LIBRARY', 'LOCATION & CONTACT']

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/70 text-white">
      <div className="text-lg font-bold">Logoipsum</div>

      <nav className="hidden md:flex space-x-6 text-sm">
        {navLinks.map(link => (
          <a key={link} href="#" className="hover:underline">{link}</a>
        ))}
      </nav>

      {/* Hamburger */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="menu">
        ☰
      </button>

      {open && <HamburgerMenu links={[...navLinks, 'GALLERY']} onClose={() => setOpen(false)} />}
    </header>
  )
}

export default Header
