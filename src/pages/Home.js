import React from 'react';
import { Link } from 'react-router-dom';
// import BannerImage from '../assets/画像詳細.jpg';
import "../styles/Home.css";
import music from '../Music/music3.mp3';
import video1 from '../Video/anime6.mp4';

function Home() {
    return (
        <div className="home">
            <audio id = "audio" src = {music} autoPlay loop = "true"></audio>
            
            <video autoPlay loop muted style = {{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "40%",
                height: "60%",
                objectFit: "cover",
                transform: "translate(-50% , -50%)",
                zIndex: "-1"
            }}
            >
                <source src = {video1} type = "video/mp4" /> 
            </video>
            <div 
                className="headerContainer" 
                // style = {{backgroundImage: `url(${BannerImage})`}}
            >
                <h1>Weapon Zerefshadow</h1>    
                <p>Web bán vũ khí</p>
                <Link to = "/menu">
                    <button>Đặt ngay</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
