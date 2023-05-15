import React, { children, createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: null,
    token: token ? token : null,
    message:"",
    logoutMessage:"",
    registerMessage:""
};

const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const postUser = async (user) => {
    const res = await axios.post(API_URL + "/users/createUser", user);
    dispatch({
      type: "REGISTER",
      payload: res.data
    })
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const getUserInfo = async()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await axios.get(`${API_URL}/users/showInfoUser`, {
        headers: {
            Authorization: token
        } 
    })
    dispatch({
        type: "GET_USER_INFO",
        payload: res.data
    })
  }

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout",  
    {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };



  
  return (
      <UserContext.Provider
      value={{
          user: state.user,
          postUser,
          token: state.token,
          message: state.message,
          registerMessage: state.registerMessage,
          logoutMessage:state.logoutMessage,
          login,
          getUserInfo,
          logout
        }}
        >
    {children}
  </UserContext.Provider>
);

};