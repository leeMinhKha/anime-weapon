import React , { useState } from 'react';
import Logo from '../assets/hacker.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks , setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id = {openLinks ? "open" : "close"}>
                <img src = {Logo} alt = "" />
                <div className="hiddenLinks">
                    <Link to = "/">Trang Chủ</Link>
                    <Link to = "/menu">Menu</Link>
                    <Link to = "/about">Giới thiệu tí :v</Link>
                    <Link to = "/contact">Liên lạc</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to = "/">Trang Chủ</Link>
                <Link to = "/menu">Menu</Link>
                <Link to = "/about">Giới thiệu tí :v</Link>
                <Link to = "/contact">Liên lạc</Link>
                <button onClick = {toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
