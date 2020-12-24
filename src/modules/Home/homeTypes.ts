export default interface HomeState {
    username: string | null
    level: number | null
    rating: number | null
    coins: number | null
    gems: number | null
    specialValutes: number | null
    selectedMode: string
    isLoading: boolean
    error: string | null
}
