import React from "react";
import RenderItem from "./RenderItem";
import { useSelector, useDispatch } from "react-redux";
import { addAction } from "../sprit/spritSlice";
import MovableItem from "./Utility/MovableItem";

export default function MidArea() {
  const selected = useSelector(store => store.sprite.selected)
  const actionsCategory = useSelector(store => store.category.sidebarCategory)
  const currSprite = useSelector((store)=>store.sprite.sprites[selected])

  const dispatch = useDispatch()

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e.clientX, e.clientY);
    const data = JSON.parse(e.dataTransfer.getData('item'));
    var category = data.category
    var id = data.id

    const container = e.target;
    const containerRect = container.getBoundingClientRect();
    const xPos = e.clientX - containerRect.left;
    const yPos = e.clientY - containerRect.top;
    dispatch(addAction({
      action_id: id,
      category: category,
      position_x: xPos,
      position_y: yPos,
      offset_x: xPos,
      offset_y: yPos
    }))

  };


  return (
    <>
    
    <div droppable onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handleDrop(e)}} className="flex-1 h-full"
      style={{position:'relative'}}>
        {
          currSprite?.actions.map(action=>{
            var item = actionsCategory[action.category].items[action.action_id]
            var bgColor = actionsCategory[action.category].bgClass
            return(
              <MovableItem key={action.id} id={action.id} item={item} bgColor={bgColor} spriteId={currSprite.Id} />
            )
          })
        }

    </div>
    
    </>

  )
}
