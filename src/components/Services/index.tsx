const Services = () => {
    return (
        <section id='services' className='services'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Services</h2>
                    <p>
                        Conwell provides a range of services to help you get the
                        products you need quickly and easily. Here are some of
                        the services we offer:
                    </p>
                </div>

                <div className='row'>
                    <div
                        className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'
                        data-aos='zoom-in'
                        data-aos-delay='100'
                    >
                        <div className='icon-box'>
                            <div className='icon'>
                                <i className='bx bx-info-circle'></i>
                            </div>
                            <h4>
                                <a href=''>Product Information</a>
                            </h4>
                            <p>
                                Conwell provides detailed information about the
                                pharmaceutical products we offer, including
                                their uses, side effects, dosages, and
                                precautions.
                            </p>
                        </div>
                    </div>

                    <div
                        className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0'
                        data-aos='zoom-in'
                        data-aos-delay='200'
                    >
                        <div className='icon-box'>
                            <div className='icon'>
                                <i className='bx bx-star'></i>
                            </div>
                            <h4>
                                <a href=''>Product Reviews</a>
                            </h4>
                            <p>
                                Conwell features product reviews from other
                                customers, which can help you make informed
                                decisions about the products you want to
                                purchase.
                            </p>
                        </div>
                    </div>

                    <div
                        className='col-xl-3 col-md-6 d-flex align-items-stretch'
                        data-aos='zoom-in'
                        data-aos-delay='300'
                    >
                        <div className='icon-box'>
                            <div className='icon'>
                                <i className='bx bx-headphone'></i>
                            </div>
                            <h4>
                                <a href=''>Customer Support</a>
                            </h4>
                            <p>
                                Our customer support team is available 24/7 to
                                answer any questions you may have about our
                                products or services. You can reach us via
                                phone, email, or live chat.
                            </p>
                        </div>
                    </div>

                    <div
                        className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0'
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <div className='icon-box'>
                            <div className='icon'>
                                <i className='bx bx-check-shield'></i>
                            </div>
                            <h4>
                                <a href=''>Regulatory Compliance</a>
                            </h4>
                            <p>
                                We comply with all applicable regulations and
                                guidelines to ensure that our products are safe,
                                effective, and of the highest quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
