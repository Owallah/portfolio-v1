import {
  SchoolOutlined,
  Work,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import "./Qualifications.css";
import { useState } from "react";

const Qualifications = () => {

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button_flex">
            <div className="qualification_icon">
              <SchoolOutlined /> Education
            </div>
          </div>

          <div className="qualification_button button_flex">
            <div className="qualification_icon">
              <Work /> Experience
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="qualification_sections">
          <div className="qualification_content">
            {/* Experience 1 */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">IT Manager</h3>
                <span className="qualification_subtitle">Elkin Trading</span>
                <div className="qualification_calendar">
                  <CalendarMonthOutlined />
                  Aug 2023 - Present
                </div>
              </div>
            </div>

            {/* Education 1 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineering</h3>
                <span className="qualification_subtitle">Moringa School</span>
                <div className="qualification_calendar">
                  <CalendarMonthOutlined />
                  Feb 2023 - Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Software Engineering Intern
                </h3>
                <span className="qualification_subtitle">
                  Obotech Solutions Ltd
                </span>
                <div className="qualification_calendar">
                  <CalendarMonthOutlined />
                  Sep 2022 - Jan 2023
                </div>
              </div>
            </div>

            {/* Education 2 */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Science</h3>
                <span className="qualification_subtitle">
                  Kibabii University
                </span>
                <div className="qualification_calendar">
                  <CalendarMonthOutlined />
                  Sep 2018 - Mar 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Technical Content Writer
                </h3>
                <span className="qualification_subtitle">
                  Section Engineering
                </span>
                <div className="qualification_calendar">
                  <CalendarMonthOutlined />
                  Sep 2021 - Jan 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
