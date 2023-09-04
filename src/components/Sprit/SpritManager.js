import React from 'react'
import Icon from '../Utility/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { add, changeSelectedSprite, remove } from '../../sprit/spritSlice'
import CatSprite from '../Utility/CatSprite'
import Catlogo from '../Utility/Catlogo'

const SpritManager = () => {
    const dispatch = useDispatch()
    var sprites = useSelector(state => state.sprite.sprites)
    
    const addDuplicateSprite = (e) =>{
        console.log('add is pressed');
        dispatch(add())
    }

    return (
        <>
        <div className='flex justify-around text-sm'>
            <div className='flex justify-center items-center w-64'>
                <label class="text-gray-700 text-sm font-bold" for="username">
                    Sprite
                </label>
                <input value={'Sprite 1'} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Sprite 1" />
            </div>
            <div className='flex justify-center items-center w-32'>
                <label class="text-gray-700 text-sm font-bold" for="username">
                    Size
                </label>
                <input value={'100'} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="size" type="number" placeholder="Size" />
            </div>
        </div>
        <div className='flex items-center flex-wrap'>
            {
                sprites.map(sprite=>{
                    return(
                        <div className='flex p-3 border-4 border-t border-green-200 bg-green-200'>
                            <button onClick={()=>{dispatch(remove({id:sprite.Id}))}} className='border-4 border-red-300 bg-red-300 rounded'><Icon name="trash" size={15} className="text-grey-600 mx-2" /></button>
                            <button onClick={()=>{dispatch(changeSelectedSprite({id:sprite.Id}))}}><Catlogo /></button>
                        </div>
                    )
                })
            }
            <div className='p-4 border-4 border-dotted border-red-500'>
                <button onClick={()=>{addDuplicateSprite()}}><Icon name="plus" size={15} className="text-grey-600 mx-2" /></button>
            </div>
        </div>
        </>
    )
}

export default SpritManager
