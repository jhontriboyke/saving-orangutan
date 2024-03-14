import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound404 from './pages/NotFound404';

/*
TODO
- Build About Us page
*/

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
