export type TUser = {
    id?: number,
    full_name?: string,
    username?: string,
    email?: string,
    profile_picture?: string
}

export type TRegister = {
    full_name: string,
    username: string,
    email: string,
    password: string
}

export type TLogin = {
    email: string,
    password: string
}