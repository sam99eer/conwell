import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../assets/images/logo.png';
import MobileNav from '../MobileNav';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const url = window.location.href.split('/').at(-1);

    const toggleNav = () => {
        setIsNavVisible((x) => !x);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button
                type='button'
                onClick={toggleNav}
                className='mobile-nav-toggle d-lg-none'
            >
                {isNavVisible ? (
                    <i className='bx bx-x'></i>
                ) : (
                    <i className='bx bx-menu'></i>
                )}
            </button>
            <MobileNav isVisible={isNavVisible} toggleHandler={toggleNav} />
            {isNavVisible
                ? ReactDOM.createPortal(
                      <div className='mobile-nav-overly'></div>,
                      document.getElementById('overlay')!
                  )
                : null}
            <header
                id='header'
                className={
                    isScrolled ? 'fixed-top header-scrolled' : 'fixed-top'
                }
            >
                <div className='container d-flex justify-content-between align-items-center'>
                    <p className='logo mr-auto d-flex align-items-center'>
                        <img
                            src={Logo}
                            alt='Conwell Logo'
                            className='img-fluid'
                        />
                        <a
                            className='d-none d-md-block logo ps-3'
                            href='index.html'
                        >
                            Conwell
                        </a>
                    </p>

                    <nav className='nav-menu d-none d-lg-block'>
                        <ul>
                            <li className={url === '#home' ? 'active' : ''}>
                                <a href='#home'>Home</a>
                            </li>
                            <li className={url === '#about' ? 'active' : ''}>
                                <a href='#about'>About</a>
                            </li>
                            <li className={url === '#products' ? 'active' : ''}>
                                <a href='#products'>Products</a>
                            </li>
                            <li
                                className={url === '#contactus' ? 'active' : ''}
                            >
                                <a href='#contactus'>Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <a href='#contactus' className='get-started-btn scrollto'>
                        Get in Touch
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
