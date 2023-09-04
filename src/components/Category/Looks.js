import React from 'react'
import Icon from '../Utility/Icon'
import RenderItem from '../RenderItem'

const Looks = ({looksItems}) => {
    const Items = looksItems.items
    const bgColor = looksItems.bgClass
    return (
        
            <div id="looks">
                <div className="font-bold"> {"Looks"} </div>
                {
                    Items.map(Item=>{
                        return(
                            <>
                                <RenderItem key={Item.id} Item={Item} bgColor={bgColor} />
                            </>
                        )
                    })
                }
            </div>
        
    
    )
}

export default Looks

