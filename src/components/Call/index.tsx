const Call = () => {
    return (
        <section id='cta' className='cta'>
            <div className='container' data-aos='zoom-in'>
                <div className='row'>
                    <div className='col-lg-9 text-center text-lg-left'>
                        <h3>Need Instant Support?</h3>
                        <p>
                            You can connect with us on WhatsApp by clicking to
                            the "Chat Now" button.
                        </p>
                    </div>
                    <div className='col-lg-3 cta-btn-container text-center'>
                        <a className='cta-btn align-middle d-flex align-items-center justify-content-center'>
                            <div className='icon d-flex align-items-center'>
                                <i className='bx bxl-whatsapp whatsappicon'></i>
                            </div>
                            <p className='m-0 px-2'>Chat Now</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Call;
