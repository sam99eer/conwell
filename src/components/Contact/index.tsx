const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Contact</h2>
                </div>

                <div className='row'>
                    <div className='col-lg-12 d-flex align-items-stretch'>
                        <div className='info'>
                            <div className='address'>
                                <i className='bx bx-map'></i>
                                <h4>Location:</h4>
                                <p>
                                    Qr. No. 130, Satlapur, Goharganj Mandideep,
                                    Distt. Raisen, Madhya Pradesh (MP) - 426046
                                </p>
                            </div>

                            <div className='email'>
                                <i className='bx bx-envelope'></i>
                                <h4>Email:</h4>
                                <p>conwellpharma@gmail.com</p>
                            </div>

                            <div className='phone'>
                                <i className='bx bx-phone'></i>
                                <h4>Call:</h4>
                                <p>+91 99931-24348</p>
                            </div>

                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.6981323331453!2d77.52508476487094!3d23.112071248498015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c47690497e4e3%3A0xba67108cbfbbe7b4!2sSatlapur%20mandideep!5e0!3m2!1sen!2sin!4v1677232552701!5m2!1sen!2sin'
                                style={{
                                    borderWidth: 0,
                                    width: '100%',
                                    height: 290,
                                }}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
