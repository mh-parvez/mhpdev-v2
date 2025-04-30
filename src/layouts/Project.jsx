import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import sd1 from "../assets/sylheti-dukan/sd1.png";
import sd2 from "../assets/sylheti-dukan/sd2.png";
import sd3 from "../assets/sylheti-dukan/sd3.png";
import sd4 from "../assets/sylheti-dukan/sd4.png";

import wo1 from "../assets/web-organs/wo-1.png";
import wo2 from "../assets/web-organs/wo-2.webp";
import wo3 from "../assets/web-organs/wo-3.jpg";
import wo4 from "../assets/web-organs/wo-4.png";

import cn1 from "../assets/contries/cn-1.png";
import cn2 from "../assets/contries/cn-2.png";
import cn3 from "../assets/contries/cn-3.png";
import cn4 from "../assets/contries/cn-4.png";

const Project = () => {
  return (
    <div className="project" id="project">
      {/* project one */}
      <div className="project-container">
        <div className="content-area">
          <h2>Sylheti Dukan</h2>
          <ul>
            <li>
              <b>Ecommerce Management System:</b> This ecommerce platform will
              enable users to browse products, manage their accounts, additems
              to their cart, and complete purchases through a secure payment
              system.
            </li>
            <li>
              Admin can manage inventory, orders, and analytics. Add, edit, and
              delete products items. Track, update, Add, edit, and delete
              products items. Track, update, and full Order
            </li>
            <li>⚠ Sometimes loading is slow. Need to optimize this.</li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/mh-parvez/sylheti-dukan-docs"
              target="_blank"
            >
              <IoDocumentAttachOutline /> Docs
            </a>
            <a href="https://sylhetidukan.vercel.app/" target="_blank">
              <FiEye /> Live
            </a>
            <a
              href="https://github.com/mh-parvez/sylheti-dukan-client"
              target="_blank"
            >
              <FiGithub /> Client{" "}
            </a>
            <a
              href="https://github.com/mh-parvez/sylheti-dukan-server"
              target="_blank"
            >
              <FiGithub /> Server{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img src={sd1} alt="project-img-1" />
          </div>
          <div className="img-box">
            <img src={sd2} alt="project-img-2" />
          </div>
          <div className="img-box">
            <img src={sd3} alt="project-img-3" />
          </div>
          <div className="img-box">
            <img src={sd4} alt="project-img-4" />
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="project-container">
        <div className="content-area content-area-reverse">
          <h2>Web Organs</h2>
          <ul>
            <li>
              <b>Design System & Component Library Prototype: </b>
              This design system adaptable across various projects (e.g.
              Angular, Vue, React component libraries). It is easy to integrate
              into any frontend framework or project.
            </li>
            <li>
              <b>Goals:</b> Follow the principles of Atomic Design to ensure a
              clear, reusable component structure (Atoms, Molecules, Organisms,
              Templates, Pages). This helps maintain consistency and makes the
              design system more intuitive and easier to scale.
            </li>
            <li>⚠ Still working on it and doing research.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/mh-parvez/ds.mhp-docs" target="_blank">
              <IoDocumentAttachOutline /> Docs
            </a>
            <a href="https://github.com/mh-parvez/ds.mhp.main" target="_blank">
              {" "}
              <FiGithub /> Source{" "}
            </a>
            <a
              href="https://github.com/mh-parvez/ds.mhp.main/tree/master/packages/scss"
              target="_blank"
            >
              {" "}
              <FiGithub /> SCSS{" "}
            </a>
            <a
              href="https://github.com/mh-parvez/ds.mhp.main/tree/master/packages/react"
              target="_blank"
            >
              {" "}
              <FiGithub /> Component{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img src={wo1} alt="project-img-1" />
          </div>
          <div className="img-box">
            <img src={wo2} alt="project-img-2" />
          </div>
          <div className="img-box">
            <img src={wo3} alt="project-img-3" />
          </div>
          <div className="img-box">
            <img src={wo4} alt="project-img-4" />
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="project-container">
        <div className="content-area">
          <h2>Countries</h2>
          <ul>
            <li>
              <b>Vanilla js Challenge:</b> REST Countries API with color theme
              switcher. View the optimal layout for the interface depending on
              their device's screen. Dynamic routing using js.
            </li>
            <li>
              All countries from the API on the homepage. Search for a country
              using an input field. Filter countries by region. Click on a
              country to see more detailed information on a separate page. Click
              through to the border countries on the detail page
            </li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
              target="_blank"
            >
              <IoDocumentAttachOutline /> Challenge
            </a>
            <a href="https://lambent-dasik-3b2741.netlify.app/" target="_blank">
              <FiEye /> Live
            </a>
            <a href="https://github.com/mh-parvez/countries" target="_blank">
              {" "}
              <FiGithub /> Code{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img src={cn1} alt="project-img-1" />
          </div>
          <div className="img-box">
            <img src={cn2} alt="project-img-2" />
          </div>
          <div className="img-box">
            <img src={cn3} alt="project-img-3" />
          </div>
          <div className="img-box">
            <img src={cn4} alt="project-img-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
