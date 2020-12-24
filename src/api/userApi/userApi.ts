import axios from 'axios'
import {getToken} from "@/utils/auth";

export async function getMe() {
    const url = `http://localhost:3000/api/users/me`

    const { data } = await axios.get(url, { headers: { jwt: getToken(), } })
    return data
}
