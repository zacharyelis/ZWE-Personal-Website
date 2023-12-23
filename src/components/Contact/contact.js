import "./contact.css";

export default function contact() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:zelis3@gatech.edu';
    }

    return (
        <div className="contact-area" id="contact">
            <div className="d-flex contact-header">Contact Me!</div>
            <div className="d-flex contact-body">Whether you'd like to discuss work opportunities, collaboraltion on a project, or anything
                else, feel free to reach out!</div>
            <div className="d-flex justify-content-center">
                <button className="email-button" onClick={handleEmailClick}>
                    Email
                </button>
            </div>
        </div>
    );
}