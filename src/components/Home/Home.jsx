import React from 'react';
import './home.css'
import BinamImage from '../../assets/mitsuri.jpg';
const Home = () => {
    return (
        <div>
            <selection className="home">
                <div className="home-content">
                    <h1> HI, I am Binam Nepal </h1>
                    <h2> IT Student</h2>
                    <p>
                        I am passionate to learn new things. I enjoy coding and exploring new technologies.
                        WELCOME TO MY Portfolio!

                    </p>
                    <button className="home-btn">Download CV</button>

                </div>
                <div className="home-img">
                    <img src={BinamImage} alt="Binam Nepal" />
                    
                </div>

            </selection>
        </div>
    );
};

export default Home