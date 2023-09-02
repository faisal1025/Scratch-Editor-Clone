import React from 'react'
import Icon from '../Utility/Icon'
import RenderItem from '../RenderItem';

const Motion = ({motionItems}) => {

    const Items = motionItems.motionItems
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
  
