import React from 'react'
import { createSlice } from '@reduxjs/toolkit'



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
            if(state.sprites.length == 1){
                state.sprites.pop()
            }else{
                state.sprites.splice(index, index)
            }
            state.count -= 1
        },
        changeSelectedSprite: (state, action) => {
            state.selected = action.payload.id
        },
        addAction: (state, action) => {    
            var actionLists = state.sprites[state.selected].actions
            var length = actionLists.length
            state.sprites[state.selected].actions = [...actionLists, {
                id: length,
                 ...action.payload
                }]
        },
        changeActionPosition: (state, action) => {    
            state.sprites[action.payload.spriteId].actions[action.payload.Id].position_x = action.payload.x
            state.sprites[action.payload.spriteId].actions[action.payload.Id].position_y = action.payload.y
        },
        changeActionOffset: (state, action) => {    
            state.sprites[action.payload.spriteId].actions[action.payload.Id].offset_x = action.payload.x
            state.sprites[action.payload.spriteId].actions[action.payload.Id].offset_y = action.payload.y
        },
        removeAction: (state, action) => {
            var index = action.payload.id
            if(state.sprites[state.selected].actions.length == 1){
                state.sprites[state.selected].actions.pop()
            }else{
                state.sprites[state.selected].actions.splice(index, index)
            }
        },
        changePosition: (state, action) => {
            var item = action.payload
            console.log(item.x, item.y, item.id);
            if (item.x >= 0 && item.x < 370 && item.y >= 0 && item.y < 325) {
                state.sprites[item.id].position_x = item.x
                state.sprites[item.id].position_y = item.y
            }
        },
        changeOffset: (state, action) => {
            var item = action.payload
            state.sprites[item.id].offset_x = item.x
            state.sprites[item.id].offset_y = item.y
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    add,
    remove,
    changeSelectedSprite,
    addAction,
    removeAction,
    changePosition,
    changeOffset,
    changeActionPosition,
    changeActionOffset
} = spritSlice.actions

export default spritSlice.reducer