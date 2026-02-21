import { Calendar } from "lucide-react";
import { useState } from "react";

const ExperienceCard = ({ title, company, duration, tech, points }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="exp-card">
      <div className="exp-content">

        <div className="exp-header">
          <div>
            <h3>{title}</h3>
            <p className="company">{company}</p>

            <div className="tech-tags">
              {tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>

          <div className="duration">
            <Calendar size={16} /> {duration}
          </div>
        </div>

        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? "Hide Responsibilities ▲" : "View Responsibilities ▼"}
        </button>

        {open && (
          <ul className="responsibilities">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section reveal">
      <h2>Professional Experience</h2>

      <div className="timeline">

        <ExperienceCard
          title="Java Full Stack Trainee"
          company="JSpiders Rajajinagar, Bangalore"
          duration="Jun 2025 - Present"
          tech={["Java", "SQL", "React", "DSA"]}
          points={[
            "Strong foundation in Core Java and OOP concepts.",
            "Worked on SQL, DBMS and backend integration.",
            "Developed responsive UI using HTML, CSS and React.",
            "Practiced Data Structures & Algorithms."
          ]}
        />

        <ExperienceCard
          title="AI-ML Intern"
          company="Rooman Technology (IBM Wadhwani Foundation)"
          duration="Aug 2024 - Dec 2024"
          tech={["Python", "Machine Learning", "Cloud Basics"]}
          points={[
            "Learned Machine Learning algorithms.",
            "Worked on data preprocessing and model building.",
            "Understood cloud fundamentals and deployment basics."
          ]}
        />

      </div>
    </section>
  );
};

export default Experience;
