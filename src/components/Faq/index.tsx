const Faq = () => {
    return (
        <section id='faq' className='faq section-bg'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Here are some frequently asked questions by our
                        customers:
                    </p>
                </div>

                <div className='faq-list'>
                    <ul>
                        <li data-aos='fade-up' data-aos-delay='100'>
                            <i className='bx bx-help-circle icon-help'></i>{' '}
                            <a
                                data-toggle='collapse'
                                className='collapse'
                                href='#faq-list-1'
                            >
                                Is it safe to order medications online from a
                                pharmaceutical website?
                                <i className='bx bx-chevron-down icon-show'></i>
                                <i className='bx bx-chevron-up icon-close'></i>
                            </a>
                            <div
                                id='faq-list-1'
                                className='collapse show'
                                data-parent='.faq-list'
                            >
                                <p>
                                    Yes, it is safe to order medications online
                                    from a reputable pharmaceutical website.
                                    Make sure to choose a website that is
                                    licensed and follows regulatory guidelines
                                    for online pharmacies.
                                </p>
                            </div>
                        </li>

                        <li data-aos='fade-up' data-aos-delay='200'>
                            <i className='bx bx-help-circle icon-help'></i>{' '}
                            <a
                                data-toggle='collapse'
                                href='#faq-list-2'
                                className='collapsed'
                            >
                                Are the medications sold on pharmaceutical
                                websites the same as those sold in physical
                                pharmacies?
                                <i className='bx bx-chevron-down icon-show'></i>
                                <i className='bx bx-chevron-up icon-close'></i>
                            </a>
                            <div
                                id='faq-list-2'
                                className='collapse'
                                data-parent='.faq-list'
                            >
                                <p>
                                    Yes, the medications sold on pharmaceutical
                                    websites are the same as those sold in
                                    physical pharmacies. They are subject to the
                                    same regulations and undergo the same
                                    quality control checks.
                                </p>
                            </div>
                        </li>

                        <li data-aos='fade-up' data-aos-delay='300'>
                            <i className='bx bx-help-circle icon-help'></i>{' '}
                            <a
                                data-toggle='collapse'
                                href='#faq-list-3'
                                className='collapsed'
                            >
                                How can I ensure that the pharmaceutical website
                                I choose is legitimate?
                                <i className='bx bx-chevron-down icon-show'></i>
                                <i className='bx bx-chevron-up icon-close'></i>
                            </a>
                            <div
                                id='faq-list-3'
                                className='collapse'
                                data-parent='.faq-list'
                            >
                                <p>
                                    Make sure to choose a website that is
                                    licensed and follows regulatory guidelines
                                    for online pharmacies. You can also check
                                    for customer reviews and ratings to help you
                                    make an informed decision.
                                </p>
                            </div>
                        </li>

                        <li data-aos='fade-up' data-aos-delay='400'>
                            <i className='bx bx-help-circle icon-help'></i>{' '}
                            <a
                                data-toggle='collapse'
                                href='#faq-list-4'
                                className='collapsed'
                            >
                                Can I get advice from a healthcare professional
                                on Conwell?
                                <i className='bx bx-chevron-down icon-show'></i>
                                <i className='bx bx-chevron-up icon-close'></i>
                            </a>
                            <div
                                id='faq-list-4'
                                className='collapse'
                                data-parent='.faq-list'
                            >
                                <p>
                                    Yes, we have a team of healthcare
                                    professionals who can provide advice and
                                    answer any questions you may have about the
                                    products they offer.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Faq;
