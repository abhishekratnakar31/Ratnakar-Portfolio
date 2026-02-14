import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

const ProjectsPage = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white text-black font-[Inter] selection:bg-black selection:text-white"
        >
            {/* Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-8 z-50 mix-blend-difference text-white">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity uppercase text-sm tracking-wider"
                >
                    <ArrowLeft size={16} />
                    Home
                </button>
            
                <span className="text-sm text-gray-400">2024</span>
            </header>

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                {projects.map((project, index) => (
                    <div key={project.id} className={`mb-32 ${index !== projects.length - 1 ? 'border-b border-gray-100 pb-32' : ''}`}>
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-4xl md:text-6xl font-light tracking-tight">{project.title}</h2>
                            <div className="flex gap-4 text-sm text-gray-500">
                                <span>{project.date}</span>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors uppercase tracking-widest text-xs border border-gray-200 px-3 py-1 rounded-full">
                                        Visit
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="w-full bg-gray-100 mb-16 overflow-hidden rounded-sm shadow-sm border border-gray-100">
                            <img
                                src={project.src}
                                alt={project.title}
                                className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {project.story ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Background</h3>
                                    <p className="text-lg leading-relaxed text-gray-800">
                                        {project.background}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Story</h3>
                                    <p className="text-lg leading-relaxed text-gray-800">
                                        {project.story}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">About</h3>
                                <p className="text-lg leading-relaxed text-gray-800 max-w-3xl">
                                    {project.background}
                                </p>
                            </div>
                        )}
                    </div>
                ))}

                {/* Navigation to next project (Optional simpler footer) */}
                <div className="mt-20 pt-10 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                    <span>Abhishek Ratnakar</span>
                    <span>&copy; 2024</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
