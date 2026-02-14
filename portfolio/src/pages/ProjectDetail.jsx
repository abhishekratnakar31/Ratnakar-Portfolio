import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div className="h-screen w-full flex items-center justify-center text-black">Project not found</div>;
    }

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
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity uppercase text-sm tracking-wider"
                >
                    <ArrowLeft size={16} />
                    Back
                </button>
                <h1 className="text-sm font-medium uppercase tracking-widest">{project.title}</h1>
                <div className="flex gap-4 text-sm text-gray-400">
                    <span>{project.date}</span>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                            Visit Site
                        </a>
                    )}
                </div>
            </header>

            <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
                {project.story ? (
                    <>
                        <section className="mb-24 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                            <h2 className="text-xl font-semibold mb-6">Background</h2>
                            <p className="text-lg leading-relaxed text-gray-800 max-w-2xl">
                                {project.background}
                            </p>
                        </section>

                        {/* Hero Image */}
                        <div className="w-full h-[60vh] md:h-[80vh] bg-gray-100 mb-24 overflow-hidden rounded-sm shadow-sm">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                src={project.src}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        <section className="mb-20">
                            <h2 className="text-xl font-semibold mb-6">Pre Launch Planning</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="hidden md:block">
                                    {/* Empty left column for layout balance */}
                                </div>
                                <div>
                                    <p className="text-lg leading-relaxed text-gray-800">
                                        {project.story}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {/* Hero Image */}
                        <div className="w-full h-[60vh] md:h-[80vh] bg-gray-100 mb-12 overflow-hidden rounded-sm shadow-sm mt-12">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                src={project.src}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        <section className="mb-24 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                            <h2 className="text-xl font-semibold mb-6">About</h2>
                            <p className="text-lg leading-relaxed text-gray-800 max-w-4xl">
                                {project.background}
                            </p>
                        </section>
                    </>
                )}

                <div className="mt-32 pt-10 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                    <span>Abhishek Ratnakar</span>
                    <span>Portfolio 2024</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
