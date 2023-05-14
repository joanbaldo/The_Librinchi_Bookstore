import React, { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer.js";
import axios from "axios";

//Como Ricky y Morty video pero en products
const initialState = {
    products: [],
};

export const ProductContext = createContext(initialState);
//productProvider es la función que provee la información 
export const ProductProvider = ({ children }) => {
    //Inicializamos el reducer (e importamos ProductReducer)
    //OJO-de la siguiente frase SOLO cambia ProductReducer,e resto es igual para todas.
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3000/products//showAllPandC"
            );
            dispatch({
                type: "GET_PRODUCTS",
                //Es el que da la orden:->vete a ProductReducer y busca "GET_PRODUCTS"
                //El nombre que hemos puesto a action.type en ProductReducer
                payload: res.data.products,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                getProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};