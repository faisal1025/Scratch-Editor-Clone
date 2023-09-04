import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActionOffset, changeActionPosition, removeAction } from '../../sprit/spritSlice';

const MovableItem = ({id, item, bgColor, spriteId}) => {
  const sprite = useSelector((store)=>store.sprite.sprites[spriteId])
  const spriteAction = sprite?.actions[id];
  const dispatch = useDispatch()
  
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dispatch(changeActionOffset({
      spriteId: spriteId,
      Id: id,
      x: e.clientX - spriteAction?.position_x,
      y: e.clientY - spriteAction?.position_y,
    }))
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    dispatch(changeActionPosition({
      spriteId: spriteId,
      Id: id,
      x: e.clientX - spriteAction?.offset_x,
      y: e.clientY - spriteAction?.offset_y,
    }))
    console.log(spriteAction?.position_x, spriteAction?.position_y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if(spriteAction?.position_x < 0){
      console.log('negative');
      dispatch(removeAction({
        id: spriteAction?.id
      }))
    }
  };

  const handleClick = () => {
    console.log("action is clicked")
    item.action(sprite, dispatch)
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: `${spriteAction.position_y}px`,
        left: `${spriteAction.position_x}px`,
        cursor: 'pointer',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className={`flex flex-row ${bgColor} text-white px-2 py-1 my-2 text-sm cursor-pointer`}
    >
      {item.title}
    </div>
  );
}

export default MovableItem;
