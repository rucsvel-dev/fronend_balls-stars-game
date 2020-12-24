export interface User {
    id: number
    createdAt: string
    updatedAt: string
    email: string
    googleId: string
    verified: boolean
    rating: number
    maxRating: number
    coins: number
    gems: number
    level: number
}

export interface GetMeResults {
    ok: boolean
    user: User
}
