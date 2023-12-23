import "./contact.css";

export default function contact() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:zelis3@gatech.edu';
    }

    const handleResumeClick = () => {
        window.open('resume.pdf', '_blank');
    }

    return (
        <div className="contact-area" id="contact">
            <div className="d-flex contact-header">Contact Me!</div>
            <div className="d-flex contact-body">Whether you'd like to discuss work opportunities, collaboraltion on a project, or anything
                else, feel free to reach out!</div>
            <div className="d-flex justify-content-center">
                <button className="contact-buttons" onClick={handleEmailClick}>
                    Email
                </button>
                <button className="contact-buttons" onClick={handleResumeClick}>
                    Resume
                </button>
            </div>
        </div>
    );
}