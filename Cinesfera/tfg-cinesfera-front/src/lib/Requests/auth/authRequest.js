import { get, post } from "../MaintRequest"

// -> LOGIN REQUEST

export const loginRequest = async (endPoint, params, callback_ok = () => { }, callback_err = () => { }, callback_finally = () => { }) => {
    try {
        const result = await post(endPoint, params)
        callback_ok(result.status, result)
    } catch (err) {
        callback_err('There was an unexpected error, please try again.')
    } finally {
        callback_finally()
    }
}


// -> REGISTER REQUEST

export const registerRequest = async (endPoint, params, callback_ok = () => { }, callback_err = () => { }, callback_finally = () => { }) => {
    try {
        const result = await post(endPoint, params)
        callback_ok(result.status, result)
    } catch (err) {
        callback_err('There was an unexpected error, please try again.')
    } finally {
        callback_finally()
    }
}


// -> LOG OUT REQUEST

export const logoutRequest = async (endPoint, callback_ok = () => { }, callback_err = () => { }, callback_finally = () => { }) => {
    try {
        const result = await get(endPoint)
        callback_ok(result.status, result)
    } catch (err) {
        callback_err('There was an unexpected error, please try again.')
    } finally {
        callback_finally()
    }
}