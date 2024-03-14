import { MenuIcon } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className=" bg-primary-green">
            <div className="py-3 px-5 flex flex-row items-center justify-between lg:justify-center lg:gap-48">
                <div className="lg:hidden">
                    <MenuIcon className="stroke-primary-yellow w-8 h-8 cursor-pointer" />
                </div>
                <div>
                    <img src="\photos\logo.png" alt="" />
                </div>
                <div className="hidden lg:flex flex-row items-center font-playfair gap-8 text-white">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Projects</span>
                    <span>Learn</span>
                    <span>News</span>
                    <Button className="bg-primary-red hover:bg-primary-red-darker p-2">
                        Donate Now
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
