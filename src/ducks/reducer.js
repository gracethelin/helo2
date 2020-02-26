
import React, {Component} from 'react'

const initialState = {
    username: '',
    profilePic: '',
    userId: 0
}

const ACTION_TYPE = `ACTION_TYPE`

export default function reducer (state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case ACTION_TYPE:
            console.log(payload)
            return {...state, username:payload.username, profilePic:payload.profilePic, userId:payload.userId} 

            default:   
             return state
    }

}

export function actionBuilder( username,userId, profilePic){

    return {
        type: ACTION_TYPE,
        payload: {userId, username, profilePic}
    }
}