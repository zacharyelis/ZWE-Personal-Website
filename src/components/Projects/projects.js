import "./projects.css";

export default function projects() {
    return(
        <div className="projects-area" id="projects">
           <div className="d-flex projects-header">Projects</div>
           <div className="d-flex project-list">
                <div className="d-flex project-box">
                    <div className="project-title">Personal Website</div>
                </div>
                <div className= "d-flex project-box">
                <div className="project-title">Pong-Style Video Game</div>
                </div>
           </div>
        </div>
    );
}