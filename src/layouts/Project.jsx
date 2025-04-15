import { IoDocumentAttachOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <div className="project" id="project">
      {/* project one */}
      <div className="project-container">
        <div className="content-area">
          <h2>Sylheti Dukan</h2>
          <ul>
            <li>
              Ecommerce management system - This ecommerce platform will enable
              users to browse products, manage their accounts, additems to their
              cart, and complete purchases through a secure payment system.
            </li>
            <li>
              Admin can manage inventory, orders, and analytics. Add, edit, and
              delete products items. Track, update, Add, edit, and delete
              products items. Track, update, and full Order
            </li>
          </ul>
          <div className="project-links">
            <a href="#">
              <IoDocumentAttachOutline /> Docs
            </a>
            <a href="#">
              <FiEye /> Live
            </a>
            <a href="#">
              {" "}
              <FiGithub /> Code{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=1"
              alt="project-img-1"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=2"
              alt="project-img-2"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=3"
              alt="project-img-3"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=4"
              alt="project-img-4"
            />
          </div>
        </div>
      </div>
      {/* project two */}
      <div className="project-container">
        <div className="content-area content-area-reverse">
          <h2>Zen Docs</h2>
          <ul>
            <li>
              Ecommerce management system - This ecommerce platform will enable
              users to browse products, manage their accounts, additems to their
              cart, and complete purchases through a secure payment system.
            </li>
            <li>
              Admin can manage inventory, orders, and analytics. Add, edit, and
              delete products items. Track, update, Add, edit, and delete
              products items. Track, update, and full Order
            </li>
          </ul>
          <div className="project-links">
            <a href="#">
              <IoDocumentAttachOutline /> Docs
            </a>
            <a href="#">
              <FiEye /> Live
            </a>
            <a href="#">
              {" "}
              <FiGithub /> Code{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=5"
              alt="project-img-1"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=6"
              alt="project-img-2"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=7"
              alt="project-img-3"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=8"
              alt="project-img-4"
            />
          </div>
        </div>
      </div>
      {/* project three */}
      <div className="project-container">
        <div className="content-area">
          <h2>Vnote</h2>
          <ul>
            <li>
              Ecommerce management system - This ecommerce platform will enable
              users to browse products, manage their accounts, additems to their
              cart, and complete purchases through a secure payment system.
            </li>
            <li>
              Admin can manage inventory, orders, and analytics. Add, edit, and
              delete products items. Track, update, Add, edit, and delete
              products items. Track, update, and full Order
            </li>
          </ul>
          <div className="project-links">
            <a href="#">
              <IoDocumentAttachOutline /> Docs
            </a>
            <a href="#">
              <FiEye /> Live
            </a>
            <a href="#">
              {" "}
              <FiGithub /> Code{" "}
            </a>
          </div>
        </div>
        <div className="image-area">
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=9"
              alt="project-img-1"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=10"
              alt="project-img-2"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=11"
              alt="project-img-3"
            />
          </div>
          <div className="img-box">
            <img
              src="https://picsum.photos/700/500?random=12"
              alt="project-img-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
