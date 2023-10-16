import Sociallinks from '../sociallinks/Sociallinks'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-menu">
                        <div className="footer-menu-title">
                            <h4>get started</h4>
                        </div>
                        <ul className="footer-menu-body">
                            <li><a href="#">resources</a></li>
                            <li><a href="#">tutorials</a></li>
                            <li><a href="#">examples</a></li>
                            <li><a href="#">docs</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">
                            <h4>About</h4>
                        </div>
                        <ul className="footer-menu-body">
                            <li><a href="#">stories</a></li>
                            <li><a href="#">community</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">brand assets</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">
                            <h4>Features</h4>
                        </div>
                        <ul className="footer-menu-body">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu-title">
                            <h4>Follow us</h4>
                        </div>
                        <Sociallinks classes={"flex-row justify-content-center align-items-center"} />
                    </div>

                </div>
                <div className="copyright-trademark">
                    <p>© 2021 All rights reserved. <Link to="#">Terms of use</Link> and <Link to="#">Privacy Policy</Link></p>
                </div>
            </footer>
        </>
    )
}

export default Footer