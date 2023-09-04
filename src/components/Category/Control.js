import React from 'react'
import RenderItem from '../RenderItem'

const Control = ({controlItems}) => {
    const Items = controlItems.items
    const bgColor = controlItems.bgClass
    console.log(Items);
    return (
        <div>
        <div id="control">
            <div className="font-bold"> {"Control"} </div>
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
        </div>
    )
}

export default Control
