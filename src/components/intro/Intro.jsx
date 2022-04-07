import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Anik B.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Back End Developer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">ML Engineer</div>
              <div className="i-title-item">Freelancer</div>
            </div>
          </div>
          <p className="i-desc">
            I Design and Build clean looking Websites, Performant API's and
            Scalable Services from the ground up.
          </p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
