import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePicture from "../../assets/Laura-picture.png"
import './Info.css'

export default function Info() {
    return (
        <div className="info">
            <img src={profilePicture} alt="profile picture" className="profile-picture" />
            <h2 className="username">Laura Smith</h2>
            <h3 className="career">Frontend Developer</h3>
            <h4 className="website">laurasmith.website</h4>
            <div className="buttons">
                <button className="button-email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="button-linkedin"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
            </div>
        </div>
    )
}