import { useState } from 'react';
import ReactDOM from 'react-dom';
import { VISUAL_ADD_DATA } from '../../constants/VisualAddData';
import { AddModal } from '../../models/AddModel';
import AddCard from '../AddCard';

const VisualAds = () => {
    const [modal, setModal] = useState<AddModal>({
        isVisible: false,
        images: [],
    });

    const openModalHandler = (data: string[]) => {
        setModal({
            isVisible: true,
            images: data,
        });
    };

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            images: [],
        });
    };

    return (
        <>
            {modal.isVisible
                ? ReactDOM.createPortal(
                      <AddCard
                          images={modal.images}
                          onClose={closeModalHandler}
                      />,
                      document.getElementById('overlay')!
                  )
                : null}
            <section id='products' className='portfolio'>
                <div className='container' data-aos='fade-up'>
                    <div className='section-title'>
                        <h2>Visual Ad</h2>
                    </div>

                    <div className='row portfolio-container'>
                        {VISUAL_ADD_DATA.map((item) => (
                            <div
                                key={item.key}
                                className='col-lg-4 col-md-6 portfolio-item'
                            >
                                <div className='portfolio-img'>
                                    <img
                                        src={item.images[0]}
                                        className='img-fluid'
                                        alt={item.key}
                                    />
                                </div>
                                <div className='portfolio-info py-4'>
                                    <button
                                        className='details-link'
                                        title='Expand'
                                        onClick={openModalHandler.bind(
                                            this,
                                            item.images
                                        )}
                                    >
                                        <i className='bx bx-expand'></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default VisualAds;
