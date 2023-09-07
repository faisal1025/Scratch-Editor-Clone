import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import Icon from '../components/Utility/Icon'
import {changePosition, moveAntiClock, moveClock, setVisible} from '../sprit/spritSlice'



const initialState = {
    sidebarCategory: [
        {
            bgClass: 'bg-blue-500',
            items: [
            {
                id: 0,
                title: <>
                        {'Move 10 steps'}
                    </>,
                category: 0,
                action: (sprite, dispatch)=>{
                    console.log("This is 10 step move")
                    dispatch(changePosition({
                        id: sprite.Id,
                        x: sprite.position_x+10,
                        y: sprite.position_y,
                    }))
                }
            },
            {
                id: 1,
                title: <>
                        Turn <Icon name="undo" size={15} className="text-white mx-2" /> 15 degrees
                    </>,
                category: 0,
                action: (sprite, dispatch)=> {
                    console.log('This is turn')
                    var svg = document.getElementById(`catSvg${sprite.Id}`)
                    if (svg) {
                        svg.style.transform = `rotate(${sprite.degree-15}deg)`;
                    }
                    dispatch(moveAntiClock({
                        id: sprite.Id,
                        degree: sprite.degree-15
                    }))
                }
            },
            {
                id: 2,
                title: <>
                    Turn <Icon name="redo" size={15} className="text-white mx-2" /> 15 degrees
                    </>,
                category: 0,
                action: (sprite, dispatch)=> {
                    console.log('This is turn')
                    var svg = document.getElementById(`catSvg${sprite.Id}`)
                    if (svg) {
                        svg.style.transform = `rotate(${sprite.degree+15}deg)`;
                    }
                    dispatch(moveClock({
                        id: sprite.Id,
                        degree: sprite.degree+15
                    }))
                }
            }
            ]
        },
        {
            bgClass: 'bg-purple-500',
            items: [
            {
                id: 0,
                title: <>
                        change size by <input className="rounded" value={10} style={{width:'1rem', marginLeft:4}} />
                    </>,
                category: 1,
                action: ()=>{console.log("This is 10 step move")}
            },
            {
                id: 1,
                title: <>
                        set size to <input className="rounded" value={"100%"} style={{width:'1rem', marginLeft:4}} />
                    </>,
                category: 1,
                action: () => {console.log('This is turn')}
            },
            {
                id: 2,
                title: <>
                        show
                    </>,
                category: 1,
                action: (sprite, dispatch) => {
                    console.log('This is turn')
                    var svg = document.getElementById(`catSvg${sprite.Id}`)
                    if(svg){
                        svg.style.display = 'block';
                    }
                    dispatch(setVisible({
                        id: sprite.Id,
                        visible: 'block'
                    }))
                }
            },
            {
                id: 3,
                title: <>
                        hide
                    </>,
                category: 1,
                action: (sprite, dispatch)=> {
                    console.log('This is turn')
                    var svg = document.getElementById(`catSvg${sprite.Id}`)
                    if(svg){
                        svg.style.display = 'none';
                    }
                    dispatch(setVisible({
                        id: sprite.Id,
                        visible: 'none'
                    }))
                }
            }
            ]
        },
        {
            bgClass: 'bg-yellow-500',
            items: [
            {
                id: 0,
                title: <>
                        {"When "}
                        <Icon name="flag" size={15} className="text-green-600 mx-2" />
                        {"clicked"}
                    </>,
                category: 2,
                action: ()=> {console.log("This is Flag event");}
            },
            {
                id: 1,
                title: <>
                        {"When this sprite clicked"}
                    </>,
                category: 2,
                action: () => {console.log("This is sprite event");}
            }
            ]
        },
        {
            bgClass: 'bg-green-500',
            items: [
            {
                id: 0,
                title: <>
                        Wait 1 seconds
                    </>,
                category: 3,
                action: ()=>{console.log("This is 10 step move")}
            },
            {
                id: 1,
                title: <>
                        <div>repeat 10</div>
                    </>,
                category: 3,
                action: ()=> {console.log('This is turn')}
            },
            {
                id: 2,
                title: <>
                        <div>forever</div>
                    </>,
                category: 3,
                action: ()=> {console.log('This is turn')}
            },
            {
                id: 3,
                title: <>
                        <div>end block</div>
                    </>,
                category: 3,
                action: ()=> {console.log('This is turn')}
            }
            ]
        }
    ]
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { } = categorySlice.actions

export default categorySlice.reducer