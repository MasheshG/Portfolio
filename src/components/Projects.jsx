import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="projects-section reveal">
      <h2>Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of applications and systems I've engineered.
      </p>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Crop Disease Detection</h3>
          <span className="role">Machine Learning Project</span>

          <p>
            Deep learning model using CNN to detect paddy crop diseases 
            from leaf images for early diagnosis.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>CNN</span>
            <span>Machine Learning</span>
          </div>

        
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Temple Trust Management</h3>
          <span className="role">Frontend Project</span>

          <p>
            Web-based system displaying temple details, trust members 
            and development plans.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
          </div>

         
        </div>

        {/* Project 3 - New */}
        <div className="project-card">
          <h3>Institute Dashboard</h3>
          <span className="role">Frontend Developer</span>

          <p>
            Interactive dashboard for managing student data, attendance,
            and academic performance tracking.
          </p>

          <div className="tech-stack">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

         
        </div>

      </div>
    </section>
  );
};

export default Projects;
