import { useState, useEffect } from "react";
import { FaMedium, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 py-3 text-white mix-blend-difference">

            <div className="text-sm  tracking-tight">
                <Link to="/">Abhishek Ratnakar</Link>
            </div>


            <div className="flex items-center gap-6 text-sm font-medium">
                {/* Clock */}
                <div className="font-mono tracking-widest text-xs md:text-sm uppercase">
                    {formatTime(time)}
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;
