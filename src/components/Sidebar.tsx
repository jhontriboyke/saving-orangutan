import { Link } from 'react-router-dom';
import Button from './Button';
import { XIcon } from 'lucide-react';

type SidebarProps = {
    isShowSidebar: boolean;
    setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isShowSidebar, setIsShowSidebar }: SidebarProps) => {
    return (
        <aside
            className={`fixed top-0 transition-all duration-200 text-primary-yellow h-screen z-[1] ${
                isShowSidebar ? `left-0` : `left-[-200%]`
            }`}
        >
            <div
                className="inset-0 absolute bg-black/30 w-[100vw]"
                onClick={() => setIsShowSidebar(false)}
            />
            <div className="bg-primary-green w-[200px] h-full z-[10] relative p-5 flex flex-col gap-4">
                <div title="close-sidebar" className="w-full h-[2rem]">
                    <XIcon
                        className="ml-auto cursor-pointer"
                        onClick={() => setIsShowSidebar(false)}
                    />
                </div>
                <div
                    onClick={() => setIsShowSidebar(false)}
                    className="flex flex-col gap-6"
                >
                    <Link to={'/'}>
                        <img src="photos\logo.png" alt="logo" />
                    </Link>
                    <Button className="bg-primary-red hover:bg-primary-red-darker">
                        Donate Now
                    </Button>
                    <div className="font-playfair text-xl tracking-tight flex flex-col gap-4">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About Us</Link>
                        <Link to={'/project'}>Projects</Link>
                        <Link to={'/learn'}>Learn</Link>
                        <Link to={'/news'}>News</Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
