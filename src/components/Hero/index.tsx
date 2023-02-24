import pharmacy from '../../assets/images/pharmacy.png';

const Hero = () => {
    return (
        <section id='hero' className='d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div
                        className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1'
                        data-aos='fade-up'
                        data-aos-delay='200'
                    >
                        <h1>Online Solution For Your Medical Needs</h1>
                        <h2>
                            We at Conwell aim to deliver the best healthcare
                            products and related services.
                        </h2>
                        <div className='d-lg-flex'>
                            <a
                                href='#about'
                                className='btn-get-started scrollto'
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div
                        className='col-lg-6 order-1 order-lg-2 hero-img'
                        data-aos='zoom-in'
                        data-aos-delay='200'
                    >
                        <img
                            src={pharmacy}
                            className='img-fluid animated'
                            alt='Pharmacy'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
