import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';
import Project from './pages/Project';
import Learn from './pages/Learn';
import News from './pages/News';
import Donate from './pages/Donate';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ChevronUpCircleIcon } from 'lucide-react';

const App = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="*" element={<NotFound404 />} />
                </Routes>

                <div
                    onClick={() => window.scrollTo(0, 0)}
                    className={`${
                        isVisible ? 'opacity-100' : 'opacity-0 cursor-auto'
                    } transition-all duration-500 w-16 h-16 rounded-full bg-primary-red fixed bottom-8 right-6 md:bottom-10 md:right-8 grid place-items-center cursor-pointer`}
                >
                    <ChevronUpCircleIcon className="stroke-white w-8 h-8" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
