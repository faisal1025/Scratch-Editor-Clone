import React from "react";
import Icon from "./Utility/Icon";
import Looks from "./Category/Looks";
import Motion from "./Category/Motion";
import DraggableItem from "../Model/DraggableItem";
import Events from "./Category/Events";
import Control from "./Category/Control";

export default function Sidebar() {
  const SidebarCategory = [
    {
      bgClass: 'bg-blue-500',
      motionItems: [
        {
          id: '1',
          title: <>
                  Move 10 steps
                </>,
          category: 'motion',
          action: ()=>{console.log("This is 10 step move")}
        },
        {
          id: '2',
          title: <>
                  Turn <Icon name="undo" size={15} className="text-white mx-2" /> 15 degrees
                </>,
          category: 'motion',
          action: ()=> {console.log('This is turn')}
        },
        {
          id: '3',
          title: <>
                Turn <Icon name="redo" size={15} className="text-white mx-2" /> 15 degrees
                </>,
          category: 'motion',
          action: ()=> {console.log('This is turn')}
        }
      ]
    },
    {
      bgClass: 'bg-purple-500',
      looksItems: [
        {
          id: '1',
          title: <>
                  change size by <input className="rounded" value={10} style={{width:'1rem', marginLeft:4}} />
                </>,
          category: 'looks',
          action: ()=>{console.log("This is 10 step move")}
        },
        {
          id: '2',
          title: <>
                  set size to <input className="rounded" value={"100%"} style={{width:'1rem', marginLeft:4}} />
                </>,
          category: 'looks',
          action: ()=> {console.log('This is turn')}
        },
        {
          id: '3',
          title: <>
                show
                </>,
          category: 'looks',
          action: ()=> {console.log('This is turn')}
        },
        {
          id: '4',
          title: <>
                hide
                </>,
          category: 'looks',
          action: ()=> {console.log('This is turn')}
        }
      ]
    },
    {
      bgClass: 'bg-yellow-500',
      eventsItems: [
        {
          id: '1',
          title: <>
                  {"When "}
                  <Icon name="flag" size={15} className="text-green-600 mx-2" />
                  {"clicked"}
                </>,
          category: 'events',
          action: ()=> {console.log("This is Flag event");}
        },
        {
          id: '2',
          title: <>
                  {"When this sprite clicked"}
                </>,
          category: 'events',
          action: () => {console.log("This is sprite event");}
        }
      ]
    },
    {
      bgClass: 'bg-green-500',
      controlItems: [
        {
          id: '1',
          title: <>
                  Wait 1 seconds
                </>,
          category: 'control',
          action: ()=>{console.log("This is 10 step move")}
        },
        {
          id: '2',
          title: <>
                  <div>repeat 10</div>
                </>,
          category: 'control',
          action: ()=> {console.log('This is turn')}
        },
        {
          id: '3',
          title: <>
                  <div>forever</div>
                </>,
          category: 'control',
          action: ()=> {console.log('This is turn')}
        },
        {
          id: '4',
          title: <>
                  <div>end block</div>
                </>,
          category: 'control',
          action: ()=> {console.log('This is turn')}
        }
      ]
    }
  ]
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
     
      <Motion motionItems = {SidebarCategory[0]} />

      <Looks looksItems={SidebarCategory[1]} />
     
      <Events eventsItems={SidebarCategory[2]} />

      <Control controlItems={SidebarCategory[3]} />
      
    </div>
  );
}
