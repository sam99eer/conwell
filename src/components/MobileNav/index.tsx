const MobileNav = (props: {
    isVisible: boolean;
    toggleHandler: () => void;
}) => {
    return (
        <nav
            className={`${
                props.isVisible ? 'mobile-nav-active' : ''
            } mobile-nav d-lg-none`}
        >
            <ul>
                <li className='active'>
                    <a onClick={props.toggleHandler} href='#home'>
                        Home
                    </a>
                </li>
                <li>
                    <a onClick={props.toggleHandler} href='#about'>
                        About
                    </a>
                </li>
                <li>
                    <a onClick={props.toggleHandler} href='#products'>
                        Products
                    </a>
                </li>
                <li>
                    <a onClick={props.toggleHandler} href='#contactus '>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNav;
