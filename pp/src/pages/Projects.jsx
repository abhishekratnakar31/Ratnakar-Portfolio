import { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      _id: '2',
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for tracking social media engagement across multiple platforms, featuring interactive charts and automated reporting.',
      techStack: ['Next.js', 'TypeScript', 'Chart.js', 'Supabase']
    },
    {
      _id: '3',
      title: 'AI Image Generator',
      description: 'A web application that leverages machine learning models to generate unique artwork based on user text prompts.',
      techStack: ['Python', 'FastAPI', 'React', 'OpenAI API']
    },
    {
      _id: '4',
      title: 'Task Management App',
      description: 'A productivity tool designed for teams to collaborate, track progress, and manage deadlines efficiently with real-time updates.',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS']
    }
  ]);

  return (
    <section className="min-h-screen bg-primary text-charcoal px-8 py-24 md:px-24">
      <h2 className="text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(p => (
          <div key={p._id} className="border-t border-black/20 pt-8 group cursor-pointer hover:bg-black/5 hover:shadow-xl transition-all duration-300 p-6">
            <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{p.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{p.description}</p>
            <div className="text-sm font-mono uppercase tracking-wide text-gray-600">
              {p.techStack?.join(" • ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;