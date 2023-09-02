import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import DraggableItem from '../Model/DraggableItem'
import CatSprite from '../components/Utility/CatSprite'
import SpriteDomain from '../Model/SpriteDomain'


const initialState = {
    selected: 0,
    count: 1,
    sprites: [
        {
            Id: 0,
            actions: [], 
            position_x: 0,
            position_y: 0,
            offset_x: 0,
            offset_y: 0
        }
    ]
}

export const spritSlice = createSlice({
    name: 'sprite',
    initialState,
    reducers: {
        add: (state) => {
            return {
                ...state,
                sprites: [...state.sprites, {Id: state.count,
                                    actions: [], 
                                    position_x: 0,
                                    position_y: 0,
                                    offset_x: 0,
                                    offset_y: 0}],
                count: state.count + 1,
            };
        },
        remove: (state, action) => {
            var index = action.payload.id
            state.sprites.splice(index, index)
            state.count -= 1
        },
        changeSelectedSprite: (state, action) => {
            state.selected = action.payload.id
        },
        addAction: (state, action) => {    
            var title = action.payload.title
            var func = action.payload.action
            var category = action.payload.category
            var position_x = action.payload.position_x
            var position_y = action.payload.position_y
            state.sprites[state.selected].actions.push(new DraggableItem(title, category, func, position_x, position_y))
        },
        removeAction: (state, action) => {
            var index = action.payload
            state.sprites[state.selected].actions.splice(index, index)
        },
        changePosition: (state, action) => {
            var item = action.payload
            state.sprites[item.id].position_x = item.x
            state.sprites[item.id].position_y = item.y
        },
        changeOffset: (state, action) => {
            var item = action.payload
            state.sprites[item.id].offset_x = item.x
            state.sprites[item.id].offset_y = item.y
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, changeSelectedSprite, addAction, removeAction, changePosition, changeOffset } = spritSlice.actions

export default spritSlice.reducer