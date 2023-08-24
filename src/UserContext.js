import React from 'react';


//this code here makes the data to access globally
//use to pass a data to be used in any component
const UserContext = React.createContext();


//this will be the Provider for our context to be use, anything that is used in the context will be pass to a "value". See on the "App.js"
export const UserProvider = UserContext.Provider;

export default UserContext;