import React from 'react'
import RenderItem from '../RenderItem';

const Motion = ({motionItems}) => {

    const Items = motionItems.items
    const bgClass = motionItems.bgClass
    console.log(Items);
    return (
      
        <div id="motion">
          <div className="font-bold"> {"Motion"} </div>
          {
            Items.map(Item=> {
              return (
                <>
                <RenderItem key={Item.id} Item = {Item} bgColor={bgClass}/>
                </>
              )
            })
          }
        </div>
    
    )
  }
  
  export default Motion
  
