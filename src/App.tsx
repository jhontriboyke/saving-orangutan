import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

/*
TODO
- Sidebar components
- Build other pages
- Define route (react-router-dom)
*/

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Home />} />
                <Route path="/learn" element={<Home />} />
                <Route path="/news" element={<Home />} />
                <Route path="/donate" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
