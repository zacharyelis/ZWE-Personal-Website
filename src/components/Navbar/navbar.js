import "./navbar.css"
import ZELogo from "./ZELogo.png";

export default function navbar() {
    return (
        <div className="d-flex nav-area">
            <div className="d-flex nav-profile">
                <img src={ZELogo} className="nav-logo" alt="Z.E.Logo"/>
                <div className="nav-name">Zachary Elis</div>
            </div>
            <ul className= "nav-links">
                <li>
                    <a href="#aboutMe" className="nav-text">About Me</a>
                </li>
                <li>
                    <a href="#experience" className="nav-text">Experience</a>
                </li>
                <li>
                    <a href="#projects" className="nav-text">Projects</a>
                </li>
                <li>
                    <a href="#experience" className="nav-text">Contact</a>
                </li>
                <li>
                    <a href="#experience" className="nav-text">Resume</a>
                </li>
            </ul>
        </div>
    );
}