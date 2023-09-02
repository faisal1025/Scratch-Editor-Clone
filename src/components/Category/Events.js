import React from 'react'
import RenderItem from '../RenderItem'

const Events = ({eventsItems}) => {
    const Items = eventsItems.eventsItems
    const bgClass = eventsItems.bgClass
    return (
        <div>
        <div id="events">
            <div className="font-bold"> {"Events"} </div>
            {
                Items.map(Item=>{
                    return(
                        <RenderItem key={Item.id} Item={Item} bgColor={bgClass} />
                    )
                })
            }
        </div>
        </div>
    )
}

export default Events

        // <div className="flex flex-row flex-wrap  text-white px-2 py-1 my-2 text-sm cursor-pointer">
          
        // </div>
        // <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
         
        // </div>