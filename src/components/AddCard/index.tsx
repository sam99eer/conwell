import { useState } from 'react';

const AddCard = (props: { images: string[]; onClose: () => void }) => {
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
                        {props.images?.map((item, index) => (
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
                    {props.images?.length > 1 ? (
                        <aside className='side-image  d-flex flex-row flex-lg-column align-items-center'>
                            {props.images?.map((img, index) => (
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
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AddCard;
