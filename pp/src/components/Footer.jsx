function Footer() {
    return (
        <footer className="bg-primary text-charcoal py-24 px-8 md:px-24 border-t border-black/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h3 className="text-4xl font-black mb-2 tracking-tighter">GET IN TOUCH</h3>
                    <p className="text-gray-600">Let's build something together.</p>
                </div>

                <div className="mt-12 md:mt-0 flex gap-8 text-sm font-medium tracking-wide uppercase text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">Twitter</a>
                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-black transition-colors">Github</a>
                    <a href="#" className="hover:text-black transition-colors">Email</a>
                </div>
            </div>
            <div className="mt-24 text-center md:text-left text-xs text-gray-500 uppercase tracking-widest">
                © 2026 Abhishek Ratnakar
            </div>
        </footer>
    );
}

export default Footer;
