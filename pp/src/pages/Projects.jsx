import { useEffect, useState } from 'react';
import api from '../api/axios';

function Projects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProject(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="min-h-screen bg-primary text-white px-8 py-24 md:px-24">
      <h2 className="text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {project.map(p => (
          <div key={p._id} className="border-t border-white/20 pt-8 group cursor-pointer hover:bg-white/5 hover:shadow-xl transition-all duration-300 p-6">
            <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{p.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">{p.description}</p>
            <div className="text-sm font-mono uppercase tracking-wide text-gray-400">
              {p.techStack?.join(" • ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;