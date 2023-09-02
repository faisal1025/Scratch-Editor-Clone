import { useDispatch } from "react-redux";
import CatSprite from "../components/Utility/CatSprite";

import React from "react";
import { changeSelectedSprite } from "../sprit/spritSlice";



export default class SpriteDomain{
    
    constructor(Id, actions = [], position_x = 0, position_y = 0){
        this.Id = Id
        this.actions = actions 
        this.position_x = position_x
        this.position_y = position_y
        this.changePosition = (x, y)=>{
            this.position_x = x
            this.position_y = y
        }
        this.renderSprite = ()=>{
          
        }
    }
}

