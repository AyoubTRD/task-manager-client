import usersApi from "../api/users";
import { 
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
    UPLOAD_AVATAR
} from "./types"
import history from "../history"

import {getState} from "../store"

export const signIn = user => dispatch => {
    const res = await usersApi.post("/login", user)
    if(res.status !== 400) {
        return history.push("/signin/error")
    }
    dispatch({
        type: SIGN_IN,
        payload: res.data
    })
}

export const signUp = user => dispatch => {
    const res = await usersApi.post("/", user)
    if(res.status !== 201) {
        return history.push("/signup/error")
    }
    dispatch({
        type: SIGN_UP,
        payload: res.data
    })
}

export const signOut = () => dispatch => {
    console.log(getState())
    const {user: {token}} = getState()
    const res = await usersApi.post("/logout", null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(res.status !== 200) {
        return history.push("/signout/error")
    }
    dispatch({
        type: SIGN_OUT
    })
}

export const uploadAvatar = () => dispatch => {

}