import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.pageYOffset > 200);
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}
            onClick={handleClick}
        >
            <i className='bx bx-up-arrow-alt'></i>
        </button>
    );
};

export default ScrollToTop;
