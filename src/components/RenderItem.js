import React, {useEffect, useState} from 'react'
import DraggableItem from '../Model/DraggableItem';

const RenderItem = ({Item, bgColor}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handelDragStart = (e) =>{
    console.log(e);
    e.dataTransfer.setData('text/plain', Item.category+Item.id);

  }

  const createMovableInstance = (Item)=>{
    var movableInstance = new DraggableItem(Item.title, Item.category, Item.action, Item.position_x, Item.position_y)
    console.log(Item.title);
  }

  useEffect(()=>{
   
  }, [])

  return (
    <div>
        <div draggable onDragStart={(e)=>{handelDragStart(e)}}  onClick={()=>{createMovableInstance(Item)}} id={Item.category+Item.id} className={`flex flex-row flex-wrap ${bgColor} text-white px-2 py-1 my-2 text-sm cursor-pointer draggable-element`}
          style={{cursor: 'pointer'}}>

            {Item.title}
        </div>
    </div>
  )
}

export default RenderItem
