import react from 'react';
import Dukaan_logo from '../../Images/Dukaan_logo.png';
import flag from '../../Images/flag.png';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-container-copyright'>
                <div className='footer-container-items'>
                    <div className='logos'>
                        <img src={Dukaan_logo} className='logoimg'  alt='img'/>
                    </div>
                    <div className='footer-items'>
                        <div className='each-item'>
                            <div className='items'>Contact</div>
                            <div className='items'>FAQ's</div>
                        </div>
                        <div className='each-item'>
                            <div className='items'>Tutorials</div>
                            <div className='items'>Blog</div>
                        </div>
                        <div className='each-item'>
                            <div className='items'>Privacy</div> 
                            <div className='items'>Banned items</div>
                        </div>
                        <div className='each-item'>
                            <div className='items'>About</div>
                            <div className='items'>Jobs<span className='round'>3</span></div>
                        </div>
                        <div className='each-item'>
                            <div className='items'>Facebook</div>
                            <div className='items'>Twitter</div>
                            <div className='items'>Linkedin</div>
                        </div>
                    </div>
                </div>
                <hr className='horizontals'></hr>
                <div className='copyright-made'>
                    <div className='copyright-message'>
                      Dukaan 2020,All rights reserved
                    </div>
                    <div className='made'>
                     <img src={flag} className='flagimg'  alt='img'/>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Footer;