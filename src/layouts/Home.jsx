import { IoLogoLinkedin } from "react-icons/io5";
import { SiCodeforces } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home" className="hero">
        <div className="hero-main">
          <div className="hero-text">
            <h1>Frontend Developer</h1>
            <p>
              I design and develop scalable, applications using frontend tools
              and technologies, ensuring every interaction is smooth and
              meaningful. I design and develop scalable, applications using frontend tools
              and technologies.
            </p>
            <span className="social-links">
              <a
                aria-label="linkedin"
                rel="noreferrer"
                target="_blank"
                title="Linkedin"
                href="https://www.linkedin.com/in/mhparvezdev/"
              >
                <IoLogoLinkedin width={32} height={32} />
              </a>
              <a
                aria-label="github"
                rel="noreferrer"
                target="_blank"
                title="Github"
                href="https://github.com/mh-parvez"
              >
                <FaSquareGithub width={32} height={32} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                title="Codeforces"
                href="https://codeforces.com/profile/mh-parvez"
              >
                <SiCodeforces width={32} height={32} />
              </a>
            </span>
          </div>

          <div className="hero-img"></div>
        </div>
    </section>
  );
};

export default Home;
