import { FaMedium, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 py-3 text-white mix-blend">

            <div className="text-xl font-semibold tracking-tight">
                <Link to="/">Abhishek Ratnakar</Link>
            </div>


            <div className="flex items-center gap-8 text-sm font-medium">
                <Link to="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>

                <a href="#contact" className="hover:opacity-70 transition-opacity">Contact us</a>

                <div className="flex items-center gap-4 text-lg">
                    <a href="https://github.com/abhishekratnakar31" className="hover:opacity-70 transition-opacity"><FaGithub /></a>
                    {/* <a href="#" className="hover:opacity-70 transition-opacity"><FaInstagram /></a> */}
                    <a href="https://www.linkedin.com/in/abhishek-ratnakar-668625322/" className="hover:opacity-70 transition-opacity"><FaLinkedinIn /></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
