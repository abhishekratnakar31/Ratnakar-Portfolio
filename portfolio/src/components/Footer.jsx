import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const workExperience = [
    {
        company: "Full Stack Developer",
        role: "Polaris School Of Technology(B.tech in AI/ML)",
        period: "2024-2028"
    }
];

const onlineLinks = [
    {
        label: "ratnakarabhishek36@gmail.com",
        action: "Email",
        link: "mailto:ratnakarabhishek36@gmail.com"
    },
    {
        label: "Instagram",
        action: "Follow",
        link: "https://www.instagram.com/iratnakarabhi/"
    },
    {
        label: "GitHub",
        action: "Follow",
        link: "https://github.com/abhishekratnakar31"
    },
    {
        label: "LeetCode",
        action: "Follow",
        link: "https://leetcode.com/u/abhishekratnakar31/"
    },
    {
        label: "Resume profile",
        action: "Profile",
        link: "https://drive.google.com/drive/folders/1ZWEsE1yP3adoxkkbamqNZB35f29HRtr7?usp=sharing"
    }
];

function Footer() {
    return (
        <footer className="bg-white text-black py-24 px-6 md:px-20 font-[Inter]">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Work Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-gray-400 text-sm uppercase tracking-widest">College</div>
                    <div className="md:col-span-3 space-y-4">
                        {workExperience.map((item, index) => (
                            <div key={index} className="flex items-center justify-between group">
                                <span className="text-sm md:text-base font-normal">{item.role}</span>
                                <div className="flex-grow border-b border-dotted border-gray-300 mx-4 h-3"></div>
                                <span className="text-sm md:text-base font-normal text-right">{item.period}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Online Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-gray-400 text-sm uppercase tracking-widest">Online</div>
                    <div className="md:col-span-3 space-y-4">
                        {onlineLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between group hover:opacity-60 transition-opacity"
                            >
                                <span className="text-sm md:text-base font-normal">{item.label}</span>
                                <div className="flex-grow border-b border-dotted border-gray-300 mx-4 h-3"></div>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm md:text-base font-normal underline">{item.action}</span>
                                    <ArrowUpRight size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="pt-12 flex justify-between items-end text-[10px] text-gray-400 uppercase tracking-widest border-t border-gray-100">
                    <div>
                        <p>Based in India</p>
                        <p className="mt-1">Local time {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    </div>
                    <div>
                        © {new Date().getFullYear()} Abhishek Ratnakar
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
