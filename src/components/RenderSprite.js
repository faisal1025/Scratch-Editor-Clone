import React from 'react'
import CatSprite from './Utility/CatSprite';
import { useDispatch } from 'react-redux';
import { changeSelectedSprite } from '../sprit/spritSlice';


const RenderSprite = ({sprite}) => {
    const dispatch = useDispatch()
    
    const changeSprite = (id) =>{
        dispatch(changeSelectedSprite({id: id}))
    }
    return (
    
        <>
            <button onDoubleClick={()=>{changeSprite(sprite.Id)}}>
                <CatSprite id = {sprite.Id}/>
            </button>
        </>
    
    )
}

export default RenderSprite
