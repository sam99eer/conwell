const MobileNav = (props: {
    isVisible: boolean;
    toggleHandler: () => void;
}) => {
    const url = window.location.href.split('/').at(-1);

    return (
        <nav
            className={`${
                props.isVisible ? 'mobile-nav-active' : ''
            } mobile-nav d-lg-none`}
        >
            <ul>
                <li className={url === '#home' ? 'active' : ''}>
                    <a onClick={props.toggleHandler} href='#home'>
                        Home
                    </a>
                </li>
                <li className={url === '#about' ? 'active' : ''}>
                    <a onClick={props.toggleHandler} href='#about'>
                        About
                    </a>
                </li>
                <li className={url === '#products' ? 'active' : ''}>
                    <a onClick={props.toggleHandler} href='#products'>
                        Products
                    </a>
                </li>
                <li className={url === '#contactus' ? 'active' : ''}>
                    <a onClick={props.toggleHandler} href='#contactus '>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNav;
