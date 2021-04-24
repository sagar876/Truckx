
export const getUsers = () => {
    return { type : 'GET_USERS', payload:{} }
}
export const deleteUser = (payload) => {
    return { type : 'DEL_USER', payload }
}
export const userDeleted = (payload) => {
    return { type : 'USER_DELETED', payload }
}
export const createUser = (payload) => {
    return { type : 'CREATE_USER', payload }
}
export const userCreated = (payload) => {
    return { type : 'USER_CREATED', payload }
}
export const updateUsers = (payload) => {
    return { type : 'USERS_RECEIVED', payload }
}