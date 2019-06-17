import { USERNAME_SAVE } from '../constants/actionTypes'

export const doSaveUsername = (username) => {
    return {
        type: USERNAME_SAVE,
        payload: {
            username
        }
    }
}