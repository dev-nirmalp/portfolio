"use client";

import { useCallback } from "react";
import { useNavigation } from "@/context/NavigationContext";

export default function HomeSection() {
  const { animatingSection, registerSectionRef, navigateToSection } = useNavigation();
  const isAnimating = animatingSection === "HOME";

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSectionRef("HOME", el);
    },
    [registerSectionRef]
  );

  return (
    <section
      id="home"
      className={`buttonSection home${isAnimating ? " start-anim" : ""}`}
      data-text="HOME"
      ref={setRef}
    >
      <div className="socialMedia">
        <a href="https://github.com/dev-nirmalp" target="_blank" rel="noopener noreferrer">
          <img src="/images/git.png" className="socialMediaLinks" alt="git-logo" />
        </a>
        <a href="https://www.linkedin.com/in/nirmal-p-264365215/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" className="socialMediaLinks" alt="linkedin-logo" />
        </a>
      </div>
      <div className="banner">
        <div className="bannerContent">
          <p className="name">
            Software <span className="color">Engineer</span>
          </p>
          <p className="profession">
            With <span className="color">3.3 years</span> Experience
          </p>
          <p className="profession-html">
            React Typescript &middot; NodeJS &middot; Python &middot;
          </p>
          <div className="cv">
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <button className="colorBg colors">Resume</button>
            </a>
            <button
              className="buttons colorBg colors"
              onClick={() => navigateToSection("PORTFOLIO")}
            >
              Projects{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g className="group-color" fill="#ffffff">
                    <path d="M86,28.66667c-57.33333,0 -78.83333,57.33333 -78.83333,57.33333c0,0 21.5,57.33333 78.83333,57.33333c57.33333,0 78.83333,-57.33333 78.83333,-57.33333c0,0 -21.5,-57.33333 -78.83333,-57.33333zM86,43c37.81133,0 56.93626,30.58084 63.12826,42.97201c-6.19917,12.30517 -25.46742,43.02799 -63.12826,43.02799c-37.81133,0 -56.93626,-30.58084 -63.12826,-42.97201c6.20633,-12.30517 25.46742,-43.02799 63.12826,-43.02799zM86,57.33333c-15.83117,0 -28.66667,12.8355 -28.66667,28.66667c0,15.83117 12.8355,28.66667 28.66667,28.66667c15.83117,0 28.66667,-12.8355 28.66667,-28.66667c0,-15.83117 -12.8355,-28.66667 -28.66667,-28.66667zM86,71.66667c7.91917,0 14.33333,6.41417 14.33333,14.33333c0,7.91917 -6.41417,14.33333 -14.33333,14.33333c-7.91917,0 -14.33333,-6.41417 -14.33333,-14.33333c0,-7.91917 6.41417,-14.33333 14.33333,-14.33333z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bannerImg">
        {/* <img src="/images/man.jpg" alt="profile" /> */}
      </div>
    </section>
  );
}
