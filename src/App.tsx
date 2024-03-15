import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';
import Project from './pages/Project';
import Learn from './pages/Learn';
import News from './pages/News';
import Donate from './pages/Donate';
// import { ChevronUpCircleIcon } from 'lucide-react';

/*
TODO
- Design 'to top button' for smaller-screen
*/

const App = () => {
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
                {/* <div className="w-16 h-16 rounded-full bg-primary-red fixed bottom-8 right-6 md:bottom-10 md:right-8 lg:hidden grid place-items-center">
                    <ChevronUpCircleIcon className="stroke-white w-8 h-8" />
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default App;
