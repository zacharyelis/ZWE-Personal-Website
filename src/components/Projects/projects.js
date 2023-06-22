import "./projects.css";
import WebsiteScreenshot from "./WebsiteScreenshot.png";
import GameScreenshot from "./GameScreenshot.png";

export default function projects() {
    return(
        <div className="projects-area" id="projects">
           <div className="d-flex projects-header">Projects</div>
           <div className="d-flex project-list">
                <div className="d-flex project-box">
                    <img src = {WebsiteScreenshot} className="project-photo" alt="Personal website screenshot"/>
                    <div className="d-flex project-text-area">
                        <div className="project-title">Personal Website</div>
                        <div className="project-description">This website! I created it to share some personal 
                        information, display my experience, and show off some web development skills. I used 
                        React.js, Bootstrap, Git, CSS, HTML, and JavaScript.</div>
                    </div>
                </div>
                <div className= "d-flex project-box">
                    <img src = {GameScreenshot} className="project-photo" alt="Pong game screenshot"/>
                    <div className="d-flex project-text-area">
                        <div className="project-title">Pong-Style Video Game</div>
                        <div className="project-description">Here is some text</div>
                    </div>
                </div>
           </div>
        </div>
    );
}