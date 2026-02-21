import myCV from "../assets/mahesh_resume.pdf";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero-section reveal" id="home">
      <div className="hero-container">

        <div className="hero-left">
          <h1>
            Hi, I'm <br />
            <span className="gradient-text">
              Mahesh Gurunath
            </span>
          </h1>

          <p className="hero-role">
            <Typewriter
              words={[
                "Java Full Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={0}
              deleteSpeed={0}
              delaySpeed={0}
            />
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            <a
              href={myCV}
              download="mahesh_resume.pdf"
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="code-card">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="file-name">developer.tsx</span>
          </div>

          <div className="code-body">
            <pre>{`const developer = {

  name: 'Mahesh Gurunath',

  role: 'Java Full Stack Developer',

  experience: 'Fresher',

  skills: [
    'Java',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'React JS'
  ],

  currentFocus: 'Building Scalable Web Applications'

};

developer.buildAwesomeThings();`}</pre>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;