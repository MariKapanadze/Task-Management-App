import { NavLink } from 'react-router-dom'
import '../styles/navigation.css'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/AddTaskPage', label: 'Add Task' },
]

function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="navigation">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className="navigation__link">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation