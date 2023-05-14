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