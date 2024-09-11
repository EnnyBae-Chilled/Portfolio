import React from "react";
import './Home.css';
import ProfilePic from '../assets/profile-pic.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h2 className="home-text">Hello!</h2>
                <h1 className="home-text">I am Eniola Farinde</h1>
                <h3 className="home-text">Software Engineer</h3>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/eniola-farinde/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/EnnyBae-Chilled"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/shes_chilled/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/chilled1127"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <a href="" className="btn">Get Resume</a> 
            </div>
            <div className="profile-pic">
                <img src={ProfilePic} alt="Profile"/>
            </div>
        </div>
    );
}

export default Home;

// import React from "react";
// import './Home.css';
// import ProfilePic from '../assets/profile-pic.jpg'

// const Home = () => {
//     return (
//         <div className="home">
//             <div className="home-content">
//                 <h1 className="home-text">Hello!, I'm <span>Eniola Farinde</span></h1>
//                 <div className="socials">
//                     <a href="https://www.linkedin.com/in/eniola-farinde/"><i class="fa-brands fa-linkedin"></i></a>
//                     <a href="https://github.com/EnnyBae-Chilled"><i class="fa-brands fa-github"></i></a>
//                     <a href="https://www.instagram.com/shes_chilled/"><i class="fa-brands fa-instagram"></i></a>
//                     <a href="https://twitter.com/chilled1127"><i class="fa-brands fa-twitter"></i></a>
//                 </div>
//                 <a href="" class="btn">Get Resume</a> 
//                 <div className="Profile-pic">
//                     <img src={ProfilePic} />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;