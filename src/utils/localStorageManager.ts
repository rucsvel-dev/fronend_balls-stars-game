export const getToken = (): string | null | undefined => {
    return localStorage.getItem('jwt');
}

export const setToken = (token: string): void => {
    localStorage.setItem('jwt', token)
}
