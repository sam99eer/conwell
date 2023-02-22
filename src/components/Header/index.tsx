import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header id='header' className='fixed-top '>
            <div className='container d-flex align-items-center'>
                <p className='logo mr-auto'>
                    <img src={Logo} alt='Conwell Logo' className='img-fluid' />
                    <a className='logo pl-4' href='index.html'>
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
