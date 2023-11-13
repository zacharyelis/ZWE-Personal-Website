import "./experience.css";
import RunwayLogo from "./RunwayLogo.jpg";
import GTCoCLogo from "./GTCoCLogo.jpg";
import FraternityLogo from "./FraternityLogo.png";
import SidechatLogo from "./SidechatLogo.jpg";
import GTRILogo from "./GTRILogo.jpg";

export default function experience() {
    return(
        <div className="experience-area" id="experience">
            <div className="d-flex experience-heading">Experience</div>
            <div className="d-flex experience-item">
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">
                    <img src={GTRILogo} className="experience-photo" alt="GT CoC Logo" />
                </a>
                <div className="experience-info">
                    <div className="experience-title">Georgia Tech Research Institute- <span className="job-title">Software Engineering Intern</span></div>
                    <div className="experience-date">December 2022 - Present</div>
                    <div className="experience-description">
                        - Collaborate with 4 professors and 31 TAs to serve a course consisting of over 850 students
                        <br></br>
                        - Tutor students in computer science concepts, create and grade homework assignments and exams
                        <br></br>
                        - Plan and lead a weekly recitation of 50 students to foster a deeper understanding of the course
                    </div>
                </div>
            </div>
            <div className="d-flex experience-item">
                <a href="https://www.joinrunway.io/" target="_blank" rel="noopener noreferrer">
                    <img src = {RunwayLogo} className="experience-photo" alt="Gigsurf Logo"/>
                </a>
                <div className="experience-info">
                    <div className="experience-title">Runway- <span className="job-title">Software Engineering Intern</span></div>
                    <div className="experience-date">August 2023 - Present</div>
                    <div className="experience-description">
        
                        - Help develop and improve full stack website that utilizes Java Spring Boot, React.js, and AWS S3/DynamoDB/EC2
                        <br></br>
                        - Coordinate with UI/UX designers utilizing Figma to create friendly interfaces and intuitive interactions
                        <br></br>
                        - Troubleshoot and debug applications to optimize product performance
                    </div>
                </div>
            </div>
            <div className="d-flex experience-item">
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">
                    <img src = {GTCoCLogo} className="experience-photo" alt="GT CoC Logo"/>
                </a>
                <div className="experience-info">
                    <div className="experience-title">Georgia Tech- <span className="job-title">Teaching Assistant</span></div>
                    <div className="experience-date">December 2022 - Present</div>
                    <div className="experience-description">
                        - Collaborate with 4 professors and 31 TAs to serve a course consisting of over 850 students
                        <br></br>
                        - Tutor students in computer science concepts, create and grade homework assignments and exams
                        <br></br>
                        - Plan and lead a weekly recitation of 50 students to foster a deeper understanding of the course
                    </div>
                </div>
            </div>
            <div className="d-flex experience-heading">Leadership</div>
            <div className="d-flex experience-item">
                <img src = {FraternityLogo} className="experience-photo" alt="Fraternity Logo"/>
                <div className="experience-info">
                    <div className="experience-title">Fraternity Executive Council- <span className="job-title">Chapter Marshal</span></div>
                    <div className="experience-date">November 2021 - Present</div>
                    <div className="experience-description">
                    - Member of a 9-member council to manage a fraternity of 80 active members
                    <br></br>
                    - Meet weekly to collaborate with the council in conducting the business of the chapter
                    </div>
                </div>
            </div>
            <div className="d-flex experience-item">
                <img src = {SidechatLogo} className="experience-photo" alt="Sidechat Logo"/>
                <div className="experience-info">
                    <div className="experience-title">Sidechat- <span className="job-title">Team Lead</span></div>
                    <div className="experience-date">June 2022 - October 2022</div>
                    <div className="experience-description">
                    - Led a group of 14 members in outreaching to organizations on Georgia Tech’s campus in order to form partners with the app
                    <br></br>
                    - Developed a step-by-step process for facilitating the creation of group partnerships and produced templates for team members to communicate with organization representatives
                    </div>
                </div>
            </div>
        </div>
        
    );
}