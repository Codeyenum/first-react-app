import logo from "../images/logo.svg"

function Header() {
    return (
        <nav className="header-nav">
            <img src={logo} alt="react logo" />
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Header;