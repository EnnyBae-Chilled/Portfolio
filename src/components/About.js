import React from "react";
import './About.css';
import AboutPic from '../assets/20240312003851_IMG_9090.jpg'


const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="about-title">About Me</h2>
            <div className="about-me">
                <div className="about-pic">
                    <img src= {AboutPic} width={400}></img>
                </div>
                <div className="about-text">
                    <p>
                    As a <span>double major in Computer Science and Cybersecurity</span> with a passion for <span>software engineering</span> and <span>artificial intelligence</span>, I am driven to create innovative solutions for complex technical challenges. With a solid foundation in core areas like <span>algorithm design, data structures, and software development, 
                    I have honed my skills in various programming languages such as Python, JavaScript, and React</span>.
                    I actively seek opportunities to apply my knowledge to real-world problems, having already gained hands-on experience through multiple projects. I am constantly learning and staying updated with the latest advancements in AI and cybersecurity, while striving to further my expertise in full-stack development.
                    I’m currently exploring *software engineering internships*, where I can work on challenging projects, grow as a developer, and contribute to impactful, forward-thinking tech solutions. My curiosity and drive for continuous learning motivate me to push the boundaries of what’s possible in the world of technology.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;