import certificate from '../../assets/documents/certification.pdf';

const Certification = () => {
    return (
        <section id='certification' className='certification'>
            <div className='container' data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Certifications</h2>
                </div>

                <iframe src={certificate} width='100%' height='500px' />
            </div>
        </section>
    );
};

export default Certification;
