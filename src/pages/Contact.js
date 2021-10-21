import { useState , useRef } from 'react';
import React from 'react';
import sky from '../assets/anime.jpg';
import '../styles/Contact.css';
import music from '../Music/lifeline.mp3';
import Audio from '../components/AudioPlay';
import Control from '../components/ControlPanel';

function Contact() {

    const [percentage , setPercentage] = useState(0);
    const [isPlaying , setIsPlaying] = useState(false);
    const [duration , setDuration] = useState(0);
    const [currentTime , setCurrentTime] = useState(0);

    const audioRef = useRef();

    const onChange = (e) => {
        const audio = audioRef.current;
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    }

    const play = () =>{
        const audio = audioRef.current;
        audio.volume = 0.1;

        if(!isPlaying)
        {
            setIsPlaying(true);
            audio.play();
        }

        if(isPlaying)
        {
            setIsPlaying(false);
            audio.pause();
        }
    }

    const getCurrentDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
        const time = e.currentTarget.currentTime;

        setPercentage(+percent);
        setCurrentTime(time.toFixed(2));
    }

    return (
        <div className="contact" id = "contact">
      
            <div className="leftSide"
                style = {{backgroundImage: `url(${sky})`,
                    borderRadius: "50%",
                    width: "500px",
                    height: "500px",
                    padding: "100px",
                    left: "10%",
                    bottom: "15%",
                }}
            >    
            <audio 
                ref = {audioRef}
                onTimeUpdate = {getCurrentDuration}
                onLoadedData = {(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2));
                }}
                src = {music}
            ></audio>

            <Control  
                play = {play}
                isPlaying = {isPlaying}
                duration = {duration}
                currentTime = {currentTime}
            />
            <Audio />

            </div>
            <div className="rightSide">
                <h1>liên hệ</h1>
                <div className = "text">Gửi gì đi :)</div>
                <br />
                    <form action = "#" method = "POST">
                        <div className = "fields">

                            <div className = "field name">
                                <input type="text" placeholder = "tên gì" required/>
                            </div>

                            <div className = "field email">
                                <input type="email" placeholder = "cho số đth đi nhá máy chơi" required/>
                            </div>

                        </div>

                        <div className = "field">
                            <input type="text" placeholder = "alibaba" required/>
                        </div>

                        <div className = "field textarea">
                            <textarea cols = "30" rows = "10" placeholder = "mô tả" required></textarea>
                        </div>
                            
                        <div className = "button">
                            <button type="submit">hú hú</button>
                        </div>

                    </form>
                </div>
           
        </div>
    )
}

export default Contact
