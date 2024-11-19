import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <li className="social">
                <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
            </li>
        </footer>
    )
}