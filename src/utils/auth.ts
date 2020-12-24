export const getToken = (): string | null | undefined => {
    return localStorage.getItem('jwt');
}

export const setToken = (token: string): void => {
    return localStorage.setItem('jwt', token)
}
