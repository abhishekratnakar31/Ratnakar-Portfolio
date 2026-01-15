import {useEffect, useState} from 'react';
import api from '../api/axios';

function Projects(){
    const [project, setProject] = useState([]);

    useEffect(()=>{
        api.get('/projects')
        .then(res => setProject(res.data))
        .catch(err => console.log(err));
    },[]);

     return (
    <div>
      <h1>Projects</h1>

      {project.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>{p.techStack?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;