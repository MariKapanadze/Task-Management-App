import Navigation from './Navigation'
import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <p className="header__brand">Task Management Application</p>
        <Navigation />
      </div>
    </header>
  )
}

export default Header