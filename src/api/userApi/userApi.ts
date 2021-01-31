import axios from 'axios'
import {getToken} from "@/utils/auth";

export async function getJwtCheck() {
    const url = `http://localhost:3000/api/users/jwtCheck`

    const { data } = await axios.get(url, { headers: { jwt: getToken(), } })
    return data
}

export async function getMe() {
    const url = `http://localhost:3000/api/users/me`

    const { data } = await axios.get(url, { headers: { jwt: getToken(), } })
    return data
}

export async function getLoginWithGoogle() {
    const url = `http://localhost:3000/api/users/googleOauth`

    const { data } = await axios.get(url, { headers: { jwt: getToken(), } })
    return data
}
