import { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <header
            id='header'
            className={isScrolled ? 'fixed-top header-scrolled' : 'fixed-top'}
        >
            <div className='container d-flex justify-content-between align-items-center'>
                <p className='logo mr-auto d-flex align-items-center'>
                    <img src={Logo} alt='Conwell Logo' className='img-fluid' />
                    <a
                        className='d-none d-md-block logo ps-3'
                        href='index.html'
                    >
                        Conwell
                    </a>
                </p>

                <nav className='nav-menu d-none d-lg-block'>
                    <ul>
                        <li className='active'>
                            <a href='index.html'>Home</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#services'>Products</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>

                <a href='#about' className='get-started-btn scrollto'>
                    Get Started
                </a>
            </div>
        </header>
    );
};

export default Header;
