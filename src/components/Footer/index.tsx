const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-top section-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 footer-contact'>
                            <h3>Conwell Pharmaceuticals</h3>
                            <p>
                                Ward 10 <br />
                                Kharar, Punjab 140301
                                <br />
                                India <br />
                                <br />
                                <strong>Phone:</strong> +91 99999 99999
                                <br />
                                <strong>Email:</strong> conwell@example.com
                                <br />
                            </p>
                        </div>

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#'>About us</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#'>Products</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#'>Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Our Social Networks</h4>
                            <p>Connect with us</p>
                            <div className='social-links mt-3'>
                                <a href='#' className='twitter'>
                                    <i className='bx bxl-twitter'></i>
                                </a>
                                <a href='#' className='facebook'>
                                    <i className='bx bxl-facebook'></i>
                                </a>
                                <a href='#' className='instagram'>
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href='#' className='linkedin'>
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container footer-bottom'>
                <p className='m-0 text-center'>
                    &copy; Copyright {new Date().getFullYear()}{' '}
                    <strong>
                        <span>Conwell</span>
                    </strong>
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
