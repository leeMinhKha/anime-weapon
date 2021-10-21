import React from 'react';
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';
import music from '../Music/DJO.mp3';


function Menu() {
    return (
        <div className="menu">
            <audio id = "audio" src = {music} autoPlay loop = "true"></audio>
            <h1 className="menuTitle">MENU</h1>
            <div className="menuList">
                {MenuList.map((menuItem , key) => { 
                    return (
                        <MenuItem 
                            key={key}
                            image = {menuItem.image}
                            name = {menuItem.name}
                            price = {menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Menu
