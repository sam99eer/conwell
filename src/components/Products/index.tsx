import { useState } from 'react';
import ReactDOM from 'react-dom';
import { PRODUCT_DATA } from '../../constants/ProductData';
import { ModalModel } from '../../models/ModalModel';
import { ProductDataModel } from '../../models/ProductDataModel';
import Carousel from '../Carousel';

const Products = () => {
    const [modal, setModal] = useState<ModalModel>({
        isVisible: false,
        data: {
            key: '',
            image: [''],
            title: '',
            description: '',
        },
    });

    const openModalHandler = (data: ProductDataModel) => {
        setModal({
            isVisible: true,
            data,
        });
    };

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            data: {
                key: '',
                image: [''],
                title: '',
                description: '',
            },
        });
    };

    return (
        <>
            {modal.isVisible
                ? ReactDOM.createPortal(
                      <Carousel
                          data={modal.data}
                          onClose={closeModalHandler}
                      />,
                      document.getElementById('overlay')!
                  )
                : null}
            <section id='products' className='portfolio'>
                <div className='container' data-aos='fade-up'>
                    <div className='section-title'>
                        <h2>Products</h2>
                        <p>Conwell has a wide range of variety products</p>
                    </div>

                    <div className='row portfolio-container'>
                        {PRODUCT_DATA.map((item) => (
                            <div
                                key={item.key}
                                className='col-lg-4 col-md-6 portfolio-item'
                            >
                                <div className='portfolio-img'>
                                    <img
                                        src={item.image[0]}
                                        className='img-fluid'
                                        alt={item.key}
                                    />
                                </div>
                                <div className='portfolio-info'>
                                    <h4>{item.title}</h4>
                                    <button
                                        className='details-link'
                                        title='More Details'
                                        onClick={openModalHandler.bind(
                                            this,
                                            item
                                        )}
                                    >
                                        <i className='bx bx-link'></i>
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

export default Products;
