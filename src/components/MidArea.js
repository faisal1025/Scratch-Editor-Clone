import React from "react";

export default function MidArea() {

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e.clientX, e.clientY);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    console.log(data);
    // You can update the position of the dropped element here.
    // Calculate the position based on e.clientX and e.clientY
    const droppedElement = document.getElementById(data);
    const container = e.target;
    const containerRect = container.getBoundingClientRect();
    console.log(containerRect.left, containerRect.top);
    const xPos = e.clientX-containerRect.left
    const yPos = e.clientY-containerRect.top
    // left: 379px;
    // top: 259px
    droppedElement.style.position = 'absolute';
    droppedElement.style.left = xPos + 'px';
    droppedElement.style.top = yPos + 'px';
    
  };


  return (
    <>
    
    <div droppable onDragOver={(e)=>{handleDragOver(e)}} onDrop={(e)=>{handleDrop(e)}} className="flex-1 h-full overflow-auto"
      style={{position: 'relative'}}>
    
    </div>
    
    </>

  )
}
