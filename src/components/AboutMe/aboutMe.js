import "./aboutMe.css";
import ProfilePhoto from "./ProfilePhoto.jpg"
import Typewriter from "typewriter-effect";

export default function aboutMe() {
    return (
        <div className="about-me-area" id="aboutMe">
            <div className="d-flex picture-area">
                <img src={ProfilePhoto} className="profile-photo" alt="Zachary's Profile Pic"/>
            </div>
            <div className="d-flex about-me-header">Hi, I'm Zachary!</div>
            <div className="d-flex type-area">
                <Typewriter
                options={{
                strings: [
                    "Georgia Tech Student",
                    "Discrete Math CS TA",
                    "Software Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 90,
                deleteSpeed: 80,
                pauseFor: 800,
                }}
            />
          </div>
          <div className="d-flex about-me-body">
            I'm Zachary Elis, a Georgia Tech student from Raleigh, North Carolina. I'm a junior CS major, 
            and I'm currently on track to graduate early in December of 2024. I've worked in industry as a 
            software engineer and at GT's College of Computing as a teaching assistant.
            <br></br>
            <br></br>
            I started at Georgia Tech as a chemical engineer, but after a single MATLAB course, I knew I had 
            found my passion. I officially changed my major at the end of my freshman year, and have only 
            fallen more in love with software engineering since. I made this website to showcase some 
            of my work and interests; I hope you enjoy!
          </div>
        </div>
    );
}