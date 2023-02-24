const WhyUs = () => {
    return (
        <section id='why-us' className='why-us section-bg'>
            <div className='container-fluid' data-aos='fade-up'>
                <div className='row'>
                    <div className='col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1'>
                        <div className='content'>
                            <h3>Why Us?</h3>
                        </div>

                        <div className='accordion-list'>
                            <ul>
                                <li>
                                    <a
                                        data-toggle='collapse'
                                        className='collapse'
                                        href='#accordion-list-1'
                                    >
                                        <span>01</span>Quality Products{' '}
                                        <i className='bx bx-chevron-down icon-show'></i>
                                        <i className='bx bx-chevron-up icon-close'></i>
                                    </a>
                                    <div
                                        id='accordion-list-1'
                                        className='collapse show'
                                        data-parent='.accordion-list'
                                    >
                                        <p>
                                            Conwell provides top-quality
                                            pharmaceutical products that have
                                            undergone rigorous testing and are
                                            approved by regulatory agencies.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <a
                                        data-toggle='collapse'
                                        href='#accordion-list-2'
                                        className='collapsed'
                                    >
                                        <span>02</span>Expertise{' '}
                                        <i className='bx bx-chevron-down icon-show'></i>
                                        <i className='bx bx-chevron-up icon-close'></i>
                                    </a>
                                    <div
                                        id='accordion-list-2'
                                        className='collapse'
                                        data-parent='.accordion-list'
                                    >
                                        <p>
                                            Our team of experts has years of
                                            experience in the pharmaceutical
                                            industry, ensuring that you receive
                                            accurate and helpful information on
                                            all our products.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <a
                                        data-toggle='collapse'
                                        href='#accordion-list-3'
                                        className='collapsed'
                                    >
                                        <span>03</span>Convenience{' '}
                                        <i className='bx bx-chevron-down icon-show'></i>
                                        <i className='bx bx-chevron-up icon-close'></i>
                                    </a>
                                    <div
                                        id='accordion-list-3'
                                        className='collapse'
                                        data-parent='.accordion-list'
                                    >
                                        <p>
                                            Our website is easy to navigate,
                                            making it easy for you to find the
                                            products you need
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <a
                                        data-toggle='collapse'
                                        href='#accordion-list-4'
                                        className='collapsed'
                                    >
                                        <span>04</span>Trustworthy{' '}
                                        <i className='bx bx-chevron-down icon-show'></i>
                                        <i className='bx bx-chevron-up icon-close'></i>
                                    </a>
                                    <div
                                        id='accordion-list-4'
                                        className='collapse'
                                        data-parent='.accordion-list'
                                    >
                                        <p>
                                            Conwell is a reputable company with
                                            a proven track record of providing
                                            high-quality products and excellent
                                            customer service. You can trust us
                                            to provide you with the best
                                            products and services in the
                                            pharmaceutical industry.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className='col-lg-5 align-items-stretch order-1 order-lg-2 img why-us-img'
                        data-aos='zoom-in'
                        data-aos-delay='150'
                    >
                        &nbsp;
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
