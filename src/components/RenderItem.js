import React, {useEffect, useState} from 'react'
import DraggableItem from '../Model/DraggableItem';
import MovableItem from './Utility/MovableItem';

const RenderItem = ({Item, bgColor}) => {

  const handelDragStart = (e) =>{
    console.log(e);
    var item = {id: Item.id, category: Item.category}
    e.dataTransfer.setData('item', JSON.stringify(item));
  }


  return (
    <div>
        <div draggable onDragStart={(e)=>{handelDragStart(e)}} className={`flex flex-row ${bgColor} text-white px-2 py-1 my-2 text-sm cursor-pointer`}
          style={{cursor: 'pointer'}}>
            {Item.title}
        </div>
    </div>
  )
}

export default RenderItem
