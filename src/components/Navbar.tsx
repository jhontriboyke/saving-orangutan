import { MenuIcon } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    return (
        <div className="sticky top-0 z-10">
            <nav className=" bg-primary-green">
                <div className="py-3 px-5 flex flex-row items-center justify-between lg:justify-center lg:gap-48">
                    <div
                        className="lg:hidden"
                        onClick={() => setIsShowSidebar(!isShowSidebar)}
                    >
                        <MenuIcon className="stroke-primary-yellow w-8 h-8 cursor-pointer" />
                    </div>
                    <div>
                        <Link to={'/'}>
                            <img src="\photos\logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex flex-row items-center font-playfair gap-8 text-white">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About Us</Link>
                        <Link to={'/project'}>Projects</Link>
                        <Link to={'/learn'}>Learn</Link>
                        <Link to={'/news'}>News</Link>
                        <Button className="bg-primary-red hover:bg-primary-red-darker p-2">
                            <Link to={'/donate'}>Donate Now</Link>
                        </Button>
                    </div>
                </div>
            </nav>
            {isShowSidebar && (
                <Sidebar
                    isShowSidebar={isShowSidebar}
                    setIsShowSidebar={setIsShowSidebar}
                />
            )}
        </div>
    );
};

export default Navbar;
