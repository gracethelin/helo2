
import React, {Component} from 'react'

const initialState = {
    username: '',
    profilePic: '',
    userId: 0
}

const ACTION_TYPE = `ACTION_TYPE`

export default function reducer (state = initialState, action) {
    switch(action.type){
        case ACTION_TYPE:
            // const {username, profilePic, userId} = action.payload.user
    }
    return state
}

export function actionBuilder(userId, username, profilePic){
    return {
        type: ACTION_TYPE,
        payload: {userId, username, profilePic}
    }
}