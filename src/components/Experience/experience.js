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
                <a href="https://gtri.gatech.edu/" target="_blank" rel="noopener noreferrer">
                    <img src={GTRILogo} className="experience-photo" alt="GTRI Logo" />
                </a>
                <div className="experience-info">
                    <div className="experience-title">Georgia Tech Research Institute- <span className="job-title">Software Engineering Intern</span></div>
                    <div className="experience-date">August 2023 - December 2023</div>
                    <div className="experience-description">
                        - Member of the Systems Development Division of GTRI's Aerospace, Transportation, and Advanced Systems Laboratory (ATAS)
                        <br></br>
                        - Developed software for a Department of Defense contract utilizing a Model-View-ViewModel software design pattern to fully integrate numerous software modules layered on top of one another through a dependency injection framework using C#, XAML, .NET, and WPF
                        <br></br>
                        - Collaboratively developed NuGet libraries to allow the reuse of code throughout multiple projects in ATAS
                        <br></br>
                        - Ensured robustness and accuracy of code through test-driven development following the MSTest framework
                        <br></br>
                        - Implemented networking practices to allow sending and receiving of data between simulators using unicast, broadcast, and multicast communication types- including UDP and TCP transmission protocols
                    </div>
                </div>
            </div>
            <div className="d-flex experience-item">
                <a href="https://www.joinrunway.io/" target="_blank" rel="noopener noreferrer">
                    <img src = {RunwayLogo} className="experience-photo" alt="Runway Logo"/>
                </a>
                <div className="experience-info">
                    <div className="experience-title">Runway- <span className="job-title">Software Engineering Intern</span></div>
                    <div className="experience-date">May 2023 - August 2023</div>
                    <div className="experience-description">
                        - Helped develop and improve full stack website that utilizes Java Spring Boot, React.js, and AWS S3/EC2
                        <br></br>
                        - Coordinated with UI/UX designers utilizing Figma to create friendly interfaces and intuitive interactions through the use of JavaScript. CSS, and HTML
                        <br></br>
                        - Troubleshot and debugged applications to optimize product performance
                    </div>
                </div>
            </div>
            <div className="d-flex experience-item">
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">
                    <img src = {GTCoCLogo} className="experience-photo" alt="GT CoC Logo"/>
                </a>
                <div className="experience-info">
                    <div className="experience-title">Georgia Tech- <span className="job-title">Teaching Assistant</span></div>
                    <div className="experience-date">December 2022 - December 2023</div>
                    <div className="experience-description">
                        - Collaborated with 4 professors and 31 TAs to serve a course consisting of over 850 students
                        <br></br>
                        - Tutored students in computer science concepts, created and graded homework assignments and exams
                        <br></br>
                        - Planned and led a weekly recitation of 50 students to foster a deeper understanding of the course
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
                    - Member of a 9-member council to manage a fraternity of over 85 active members
                    <br></br>
                    - Meet weekly to collaborate with the council in conducting the business of the chapter
                    <br></br>
                    - Coordinate and lead chapter special events on a monthly basis
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
