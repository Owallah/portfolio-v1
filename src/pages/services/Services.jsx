import {
  BrowserUpdatedOutlined,
  CheckCircleOutline,
  Close,
  DesignServices,
  DeveloperModeOutlined,
  ReadMoreOutlined,
} from "@mui/icons-material";
import "./Services.css";
import { useState } from "react";

const Services = () => {
  const [ toggleState, setToggleState ] = useState(0)

  const toggleModal = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section_title">My Services</h2>
      <span className="section_subtitle">What I Offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <div className="services_icon">
              <BrowserUpdatedOutlined />
            </div>
            
            <h3 className="services_title">Full-Stack <br /> Development</h3>
          </div>

          <span className="services_button" onClick={() => toggleModal(1)}>
            View More
            <ReadMoreOutlined className="services_icon_button" />
          </span>

          <div className={ toggleState === 1 ? "services_modal flexCenter active_modal" : "services_modal flexCenter"}>
            <div className="services_modal_content">
            <div className="services_close_modal" onClick={() => toggleModal(0)}>
                <Close />
              </div>
              <h3 className="services_modal_title">Full-Stack Development</h3>
              <p className="services_modal_description">
                With 3+ years of experience as a Full-Stack Developer, I
                specialize in building and deploying scalable, high-performance
                applications using <strong>React.js</strong> for front-end
                development and <strong>Ruby on Rails</strong> for back-end
                solutions.
              </p>
              <span>I provide end-to-end development services, including:</span>

              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                      Custom Web and Mobile Application Development
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                    API Development & Integration
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                    Cloud & DevOps Solutions
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                    Microservices & System Architecture
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                    Performance Optimization & Security
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
          <div className="services_icon">
            <DeveloperModeOutlined />
            </div>
            <h3 className="services_title">Mobile App <br /> Development</h3>
          </div>

          <span className="services_button" onClick={() => toggleModal(2)}>
            View More
            <ReadMoreOutlined className="services_icon_button" />
          </span>

          <div className={ toggleState === 2 ? "services_modal flexCenter active_modal" : "services_modal flexCenter"}>
            <div className="services_modal_content">
            <div className="services_close_modal" onClick={() => toggleModal(0)} >
                <Close />
              </div>
              <h3 className="services_modal_title">Mobile App Development</h3>
              <p className="services_modal_description">
                With 3+ years of experience as a Full-Stack Developer, I
                specialize in building and deploying scalable, high-performance
                applications using <strong>React.js</strong> for front-end
                development and <strong>Ruby on Rails</strong> for back-end
                solutions.
              </p>
              <span>I provide end-to-end development services, including:</span>

              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                      Custom Web and Mobile Application Development
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  API integration & backend support
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Mobile UI/UX optimization for seamless user experience
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Deployment to App Store & Play Store
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  App performance & security enhancements
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
          <div className="services_icon">
            <DesignServices />
            </div>
            <h3 className="services_title">UI/UX <br /> Design</h3>
          </div>

          <span className="services_button" onClick={() => toggleModal(3)}>
            View More
            <ReadMoreOutlined className="services_icon_button" />
          </span>

          <div className={ toggleState === 3 ? "services_modal flexCenter active_modal" : "services_modal flexCenter"}>
            <div className="services_modal_content">
              <div className="services_close_modal" onClick={() => toggleModal(0)}>
                <Close />
              </div>
              
              <h3 className="services_modal_title">UI/UX Design</h3>
              <p className="services_modal_description">
                With 3+ years of experience as a Full-Stack Developer, I
                specialize in building and deploying scalable, high-performance
                applications using <strong>React.js</strong> for front-end
                development and <strong>Ruby on Rails</strong> for back-end
                solutions.
              </p>
              <span>I provide end-to-end development services, including:</span>

              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Wireframing & prototyping <strong>(Figma, Adobe XD)</strong>
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  User research & experience optimization
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Responsive web & mobile design
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Accessibility & usability testing
                  </p>
                </li>

                <li className="services_modal_service">
                  <CheckCircleOutline className="services_modal_service_icon" />
                  <p className="services_modal_service_info">
                  Design system creation for consistency
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      <p className="services_modal_description">
                I am committed to delivering high-quality digital solutions that
                align with both customer expectations and business objectives.
              </p>
    </section>
  );
};

export default Services;
