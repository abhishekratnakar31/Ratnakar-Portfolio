import { useState, useEffect } from "react";
import { FaMedium, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }) + " in India";
    };

    if (location.pathname === "/projects") return null;

    return (
        <nav className="fixed top-6 left-0 w-full z-50 flex justify-between items-center px-5 py-3 text-white mix-blend-difference">

            <div className="text-sm  tracking-tight">
                <Link to="/">Abhishek Ratnakar</Link>
            </div>
            <div className="absolute left-1/2 top-11 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                {location.pathname !== "/projects" && (
                    <Link to="/projects" className="text-xs font-light tracking-wide hover:opacity-70 hover:scale-110 transition-all duration-300 ease-out">projects</Link>
                )}

            </div>

            <div className="flex items-center gap-1 text-sm font-medium">
                {/* Clock */}
                <div className="font-mono tracking-widest text-xs md:text-sm uppercase">
                    {formatTime(time)}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
