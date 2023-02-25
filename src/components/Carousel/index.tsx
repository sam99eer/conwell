import { useState } from 'react';
import { ProductDataModel } from '../../models/ProductDataModel';

const Carousel = (props: { data: ProductDataModel; onClose: () => void }) => {
    const [active, setActive] = useState(0);

    const indexHandler = (idx: number) => {
        setActive(idx);
    };

    return (
        <div className='mobile-nav-overly' onClick={props.onClose}>
            <div className='carousel-wrapper'>
                <button className='carousel-close' onClick={props.onClose}>
                    <i className='bx bx-x'></i>
                </button>
                <div
                    id='indicators'
                    className='carousel slide d-flex flex-column flex-lg-row'
                    data-bs-ride='carousel'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='carousel-inner'>
                        {props.data?.image?.map((item, index) => (
                            <div
                                key={`Image_${index}`}
                                className={`carousel-item ${
                                    index === active ? 'active' : ''
                                }`}
                            >
                                <img
                                    src={item}
                                    className='d-block w-100 rounded'
                                    alt={`Image_${index}`}
                                />
                            </div>
                        ))}
                    </div>
                    <aside className='side-image  d-flex flex-row flex-lg-column align-items-center'>
                        {props.data?.image?.map((img, index) => (
                            <img
                                key={`sideimage_${index}`}
                                src={img}
                                className={
                                    index === active
                                        ? 'carousel_sideimage_active'
                                        : ''
                                }
                                alt={`Image_${index}`}
                                onClick={indexHandler.bind(this, index)}
                            />
                        ))}
                    </aside>
                </div>
                <div className='carousel-content'>
                    <h3>Product Name</h3>
                    <p>{props.data?.title}</p>
                    <h3>Product Description</h3>
                    <p>Test Description</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
