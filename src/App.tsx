import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './components/About';
import Call from './components/Call';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import WhyUs from './components/WhyUs';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 100,
            mirror: true,
        });
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <WhyUs />
            <Services />
            <Call />
            <Products />
            <Faq />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
