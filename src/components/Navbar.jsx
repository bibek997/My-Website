import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold">
          MyPortfolio.
        </Link>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar