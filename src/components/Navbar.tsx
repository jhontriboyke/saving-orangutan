import { MenuIcon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className=" bg-primary-green">
            <div className="py-3 px-5 flex flex-row items-center justify-between">
                <div>
                    <MenuIcon className="stroke-primary-yellow w-8 h-8 cursor-pointer" />
                </div>
                <div>
                    <img src="\photos\logo.png" alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
