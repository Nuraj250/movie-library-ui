import { useEffect } from 'react'

const HamburgerMenu = ({
  links,
  onClose,
}: {
  links: string[]
  onClose: () => void
}) => {
  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg animate-slide-in flex flex-col p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="text-3xl font-thin self-end mb-8"
        >
          &times;
        </button>

        {/* Nav Links */}
        <nav className="flex flex-col items-end space-y-4 pr-2">
          {links.map(link => (
            <a
              key={link}
              href="#"
              onClick={onClose}
              className="w-full text-right px-4 py-2 hover:bg-gray-800 transition"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default HamburgerMenu
