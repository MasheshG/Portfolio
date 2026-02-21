import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="education-section reveal">
      <h2 className="section-title">
        <GraduationCap size={28} /> Education
      </h2>

      <div className="edu-card">
        <div className="edu-left">
          <div className="edu-icon">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3>B.E (Computer Science)</h3>
            <p className="college">
              Angadi Institute of Technology And Management, Belagavi
            </p>
            <p className="desc">CGPA: 7.2</p>
          </div>
        </div>

        <div className="year-badge">
          <Calendar size={16} /> 2021 - 2025
        </div>
      </div>

      <div className="edu-card">
        <div className="edu-left">
          <div className="edu-icon">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3>PUC</h3>
            <p className="college">
              Sharadadevi Kore PU College, Ankali
            </p>
            <p className="desc">Percentage: 73.14%</p>
          </div>
        </div>

        <div className="year-badge">
          <Calendar size={16} /> 2019 - 2021
        </div>
      </div>
    </section>
  );
};

export default Education;
