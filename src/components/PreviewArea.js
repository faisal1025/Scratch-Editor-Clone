import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import RenderSprite from "./RenderSprite";


export default function PreviewArea() {
  var sprites = useSelector((state) => state.sprite.sprites)
  const dispatch = useDispatch();
  
  return (
    <div className="flex justify-center items-center h-full p-2S relative">
      {
        sprites?.map(sprite=>{
          return(
            <RenderSprite sprite={sprite} />
          )
        })
      }
    </div>
  );
}
