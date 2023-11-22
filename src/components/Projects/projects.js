import "./projects.css";
import WebsiteScreenshot from "./WebsiteScreenshot.png";
import { FaGithub } from "react-icons/fa";

export default function projects() {
    return(
        <div className="projects-area" id="projects">
           <div className="d-flex projects-header">Personal Projects</div>
           <div className="d-flex project-list">
                <div className="d-flex project-box">
                    <img src = {WebsiteScreenshot} className="project-photo" alt="Personal website screenshot"/>
                    <div className="d-flex project-text-area">
                        <div className="project-title">Personal Website</div>
                        <div className="project-description">This website! I created it to share some personal 
                        information, display my experience, and show off some web development skills. I used 
                            React.js, Bootstrap, CSS, HTML, and JavaScript.</div>
                        <a href="https://github.com/zacharyelis/zwe-personal-website" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </div>
                </div>
           </div>
        </div>
    );
}