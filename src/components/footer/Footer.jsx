import './footer.scss';
import { FaTwitter, FaDiscord, FaRedditAlien, FaYoutube, FaRssSquare } from 'react-icons/fa';
import Earth from '../../img/earth.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-icons">
                    <a href='#' className="footer-icon">
                        <FaTwitter />
                    </a>
                    <a href='#' className="footer-icon">
                        <FaDiscord />
                    </a>
                    <a href='#' className="footer-icon">
                        <FaRedditAlien />
                    </a>
                    <a href='#' className="footer-icon">
                        <FaYoutube />
                    </a>
                    <a href='#' className="footer-icon">
                        <FaRssSquare />
                    </a>
                </div>
                <div className="footer-lang">
                    <img src={Earth} alt="" className="footer-lang-icon" />
                    <a href="#" className="footer-lang-link">English(US)</a>
                </div>
                <div className="footer-copyright">
                    Play1st © 2022
                </div>
                <div className="footer-links">
                    <a href="#" className="footer-link">privacy notice</a>
                    <a href="#" className="footer-link">terms of service</a>
                    <a href="#" className="footer-link">cookies preferences</a>
                    <a href="#" className="footer-link">contact us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer