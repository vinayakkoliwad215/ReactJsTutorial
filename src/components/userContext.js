import React from 'react'

const UserContext = React.createContext('React Tutorial')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }