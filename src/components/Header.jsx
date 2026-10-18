import '../styles/header.css'

function Header() {
    return (
        <header className="header">
        <div className="header__inner">
            <p className="header__brand">Task Management Application</p>
            <nav aria-label="Main navigation">
            <ul className="header__nav">
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Team</a></li>
            </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header