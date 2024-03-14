import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

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
            <Home />
            <Footer />
        </>
    );
};

export default App;
