import React from 'react';
// import BackTop from '../assets/back_top.jpg';
import '../styles/About.css';
import video from '../Video/anime.mp4';

function About() {
    return (
        <div className="about">
            <div className="aboutTop">
                <video autoPlay loop>
                    <source src= {video} type = 'video/mp4' />
                </video>

            </div>
            <div className="aboutBottom">
                <h1>Giới thiệu về website</h1>
                <p>Chả biết nói gì . HẾT . Chủ yếu xem video cho đã con mắt thôi muhahaha</p>
            </div>
        </div>
    )
}

export default About
