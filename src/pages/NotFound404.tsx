import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className="flex-[1] grid place-items-center py-20 px-5">
            <div className="flex flex-col gap-10 text-center">
                <h1 className="text-5xl tracking-wide font-light text-primary-black/40">
                    404 Page Not Found
                </h1>
                <h2 className="text-3xl">Page is still under construction</h2>
                <Link to={'/'} className="underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound404;
