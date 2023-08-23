import fadedlogo from "../images/react-bg-icon.svg"

function Main() {
    return (
        <main className="main-content">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li className="main--list-item">Was first released in 2013</li>
                <li className="main--list-item">Was originally created by Jordan Walke</li>
                <li className="main--list-item">Has well over 100K stars on GitHub</li>
                <li className="main--list-item">Is maintained by Facebook</li>
                <li className="main--list-item">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className="main--bg-image" src={fadedlogo} alt="react logo" />
        </main>
    )
}

export default Main;