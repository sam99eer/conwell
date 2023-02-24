import { PRODUCT_DATA } from '../../constants/ProductData';

const Products = () => {
    return (
        <section id='portfolio' className='portfolio'>
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
                                <a
                                    className='details-link'
                                    title='More Details'
                                >
                                    <i className='bx bx-link'></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
