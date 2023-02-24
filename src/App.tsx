import About from './components/About';
import Call from './components/Call';
import Faq from './components/Faq';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <WhyUs />
            <Services />
            <Call />
            <Faq />
        </>
    );
};

export default App;
