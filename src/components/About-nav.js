import "./About-nav.css";
import React, { useState, useEffect } from "react";
// import ScreenHeading from "../utilities/ScreenHeading/ScreenHeading";

const AboutNAV = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + " - " + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
              {/* {props.link && (
                <div>
                  <a href={props.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              )} */}
            </div>
          </div>
        );
    };

    const Bullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        // { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Leadership", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
      ];
    
      const programmingSkillsDetails = [
        { skill: "JavaScript" },
        { skill: "Python" },
        { skill: "Swift" },
        { skill: "TypeScript" },
        { skill: "React JS" },
        { skill: "Java" },
        { skill: "Express JS" },
        { skill: "Mongo Db" },
        { skill: "Rest API" },
        { skill: "Docker" },
        { skill: "SASS" },
        { skill: "CLOUD & AWS" },
      ];
    
      const projectsDetails = [
        {
          title: "Association for Computing Machinery, Grambling Chapter",
          duration: { fromDate: "2024", toDate: "Present" },
          description:
            "•	Creating and implementing strategic communication plans to enhance organization awareness and public image.",  
          subHeading:
            "Position: Public Relations Officer",
          link: "#",
        },
        {
          title: "Grambling State University Office of Campus Living and Housing",
          duration: { fromDate: "2024", toDate: "Present" },
          description:
            "•	Providing mentorship and guidance to residents, fostering their academic and social development",
          subHeading:
            "Position: Senior Resident Assistant",
          link: "",
        },
        {
          title: "Grambling State University Office of Admissions and Recruitment",
          duration: { fromDate: "2023", toDate: "2024" },
          description:
            "•	Served as a first point of contact to prospective new freshmen and transfer students to give tours and answer any any admission related questions.",
          subHeading:
            "Position:  Student Ambassador",
          link: "",
        },
      ];
    
      const AboutDetails = [
        /* EDUCATION */
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"Grambling State University"}
            subHeading={"Bachelor of science in Computer science and Cybersecurity"}
            fromDate={"2023"}
            toDate={"2027"}
          />
          <ResumeHeading
            heading={"AI4ALL"}
            subHeading={"AI Natural Language Processing"}
            fromDate={"September 2024"}
            toDate={"Present"}
          />
          <ResumeHeading
            heading={"CodePath"}
            subHeading={"Technical Interview Prep 101"}
            fromDate={"June 2024"}
            toDate={"August 2024"}
          />
        </div>,
    
        /* WORK EXPERIENCE */
    
        <div className="resume-screen-container" key="work-experience">
          <div className="experience-container">
            <ResumeHeading
              heading={"Coca-Cola UNITED"}
              subHeading={"Pay-It-Forward intern"}
              fromDate={"2020"}
              toDate={"2022"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
                ✅  Selected as one of the 31 HBCU students nationwide for the 1-week professional development program for high achieving talent based on
                    leadership potential and academic success
              </span>
              <br />
            </div>
          </div>
          <div className="experience-container">
            <ResumeHeading
              heading={"OASIS Infobyte"}
              subHeading={"Backend developer intern"}
              fromDate={"2020"}
              toDate={"2022"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
                ✅Actively contributed to the goals and design for projects by engaging in project discussions and brainstorming on features to improve
                software development practices
              </span>
              <br />
              <span className="resume-description-text">
                ✅ Developed and designed a series of web pages and websites to propose the concept for the new Oasis InfoByte website
    
              </span>
            </div>
          </div>
        </div>,
        /* PROGRAMMING SKILLS */
        // <div
        //   className="resume-screen-container programming-skills-container"
        //   key="programming-skills"
        // >
        //   {programmingSkillsDetails.map((skill, index) => (
        //     <div className="skill-parent" key={index}>
        //       <div className="heading-bullet"></div>
        //       <span>{skill.skill}</span>
        //       {/* <div className="skill-percentage">
        //         <div
        //           style={{ width: skill.ratingPercentage + "%" }}
        //           className="active-percentage-bar"
        //         ></div>
        //       </div> */}
        //     </div>
        //   ))}
        // </div>,
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              link={projectsDetails.link}
              // fromDate={projectsDetails.duration.fromDate}
              // toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Drawing"
            description="I love to draw and bring my creative ideas to life through my pencil."
          />
          {/* <ResumeHeading
            heading="Photography"
            description="I take a lot of pictures in my spare time, mainly because to me the best thing about a picture is that it never changes, even when the people in it do"
          />
          <ResumeHeading
            heading="Competitive Gaming"
            description="I like to challenge my reflexes a lot while competing in Action, wrestling games, pushing the rank and having interactive gaming sessions excites me the most."
          /> */}
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };
    
    const getBullets = () => {
        return Bullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../assets/About-Nav/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
    };
    
    const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {AboutDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
    };
    return (
        <div
          className="resume-container screen-container fade-in"
          id={props.id || ""}
        >
          <div className="resume-content">
            <div className="resume-card">
              <div className="resume-bullets">
                <div className="bullet-container">
                  <div className="bullet-icons"></div>
                  <div className="bullets">{getBullets()}</div>
                </div>
              </div>
    
              <div className="resume-bullet-details">{getResumeScreens()}</div>
            </div>
          </div>
        </div>
    );
};

export default AboutNAV;