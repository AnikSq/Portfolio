import "./about.css";
import UdaCityLogo from "./../../img/Udacity-Logo.svg";
import UdemyLogo from "./../../img/Udemy-Logo.svg";
import portfolio from "./../../img/portfolio.jpeg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{ backgroundColor: darkMode ? "#495057" : "#dee2e6" }}
        ></div>
        <div className="a-card">
          <img src={portfolio} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me!</h1>
        <h2 className="a-sub">Full Stack Web Developer & ML Engineer</h2>
        <p className="a-desc">
          I am a FullStack Web Developer whom can design beautiful stunning
          websites with a complete Performant Backend API, and Analyze Data to
          help businesses <span>Grow!</span>
        </p>
        <div className="a-award">
          <div className="a-award-wrapper">
            <div className="udemy">
              <img
                src={UdemyLogo}
                alt="Certificate of Completion"
                className="a-award-img"
              />
              <p className="learning">Udemy</p>
            </div>
          </div>
          <div className="a-award-texts">
            <h2 className="achievements">Achievements: </h2>
            <ul className="a-award-list">
              <li className="a-award-title">
                Master Data Structures and Algorithms
              </li>
              <li className="a-award-title">Master HTML & CSS</li>
              <li className="a-award-title">
                NodeJS Complete Backend Bootcamp
              </li>
              <li className="a-award-title">Python RestFul API using FLASK</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
