import React from 'react';
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
           <div className="socialMedia">
               <RedditIcon /> <FacebookIcon /> <GithubIcon /> 
           </div>
           <p> &copy; 2021 zerefshadow</p>
        </div>
    );
}

export default Footer
