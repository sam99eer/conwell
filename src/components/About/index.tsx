const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About Us</h2>
                </div>

                <div className='row content'>
                    <div className='col-lg-6'>
                        <p>
                            At Conwell, we are dedicated to improving the health
                            and wellbeing of our customers by providing
                            high-quality medications and healthcare products.
                            Our mission is to provide convenient and affordable
                            access to the medications and healthcare products
                            that people need to live healthy and fulfilling
                            lives.
                        </p>
                        <ul>
                            <li>
                                <i className='ri-check-double-line'></i>
                                Committed to providing exceptional customer
                                service and ensuring that our customers have a
                                positive experience when shopping with us
                            </li>
                            <li>
                                <i className='ri-check-double-line'></i> Highly
                                trained pharmacists and healthcare professionals
                                team
                            </li>
                            <li>
                                <i className='ri-check-double-line'></i> Helping
                                people to live healthier and happier lives
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 pt-4 pt-lg-0'>
                        <p>
                            We believe in the importance of staying up-to-date
                            with the latest research and developments in the
                            field of healthcare, and we are constantly seeking
                            out new products and technologies that can benefit
                            our customers. We also believe in being responsible
                            corporate citizens, and we strive to conduct our
                            business in an ethical and environmentally
                            sustainable manner.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
