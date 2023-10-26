import React from 'react';
import '../components/footer.css'

function Footer(props) {
    return (
        <div className='sb__footer'>
             <hr />
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/health-plan'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/individual'>
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href='/resources'>
                        <p>Resources</p>
                    </a>
                    <a href='/testimonials'>
                        <p>Testimonials</p>
                    </a>
                    <a href='/stv'>
                        <p>Stv</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Partners</h4>
                    <a href='/swing'>
                        <p>Swing</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/press'>
                        <p>Press</p>
                    </a>
                    <a href='/career'>
                        <p>Career</p>
                    </a>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src="fb.png" alt="Facebook" /></p>
                        <p><img src="twitter.png" alt="Twitter" /></p>
                        <p><img src="linkedin.png" alt="LinkedIn" /></p>
                        <p><img src="fb.png" alt="Instagram" /></p>
                    </div>
                </div>
            </div>
            
            
            <div className="sb__footer-below">
                <div className="sb__footer-copyright ">
                    <p>&#169;{new Date().getFullYear()} Tecnavis. All rights reserved.</p>
                </div>
                <div className="sb__footer-below-links">
                    <a href='/terms'><div><p>Terms and Conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
