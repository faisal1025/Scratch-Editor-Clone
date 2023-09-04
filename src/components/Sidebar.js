import React from "react";
import Looks from "./Category/Looks";
import Motion from "./Category/Motion";
import DraggableItem from "../Model/DraggableItem";
import Events from "./Category/Events";
import Control from "./Category/Control";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const SidebarCategory = useSelector((store)=>store.category.sidebarCategory)
  console.log(SidebarCategory);
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 relative">
     
      <Motion motionItems = {SidebarCategory[0]} />

      <Looks looksItems={SidebarCategory[1]} />
     
      <Events eventsItems={SidebarCategory[2]} />

      <Control controlItems={SidebarCategory[3]} />
      
    </div>
  );
}
