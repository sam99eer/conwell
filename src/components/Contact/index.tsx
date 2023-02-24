const Contact = () => {
    return (
        <section id='contact' className='contact'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Contact</h2>
                </div>

                <div className='row'>
                    <div className='col-lg-12 d-flex align-items-stretch'>
                        <div className='info'>
                            <div className='address'>
                                <i className='icofont-google-map'></i>
                                <h4>Location:</h4>
                                <p>
                                    Conwell Pharmaceuticals, Ward 10, Kharar,
                                    Punjab, 140301
                                </p>
                            </div>

                            <div className='email'>
                                <i className='icofont-envelope'></i>
                                <h4>Email:</h4>
                                <p>conwell@example.com</p>
                            </div>

                            <div className='phone'>
                                <i className='icofont-phone'></i>
                                <h4>Call:</h4>
                                <p>+91 99999 99999</p>
                            </div>

                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27431.91576855025!2d76.61727445176668!3d30.746797248263285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe555e7bf2e91%3A0xffb409b433075d3!2sKharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1677223872441!5m2!1sen!2sin'
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
