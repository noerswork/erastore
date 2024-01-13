"use client";

import { createContext, useContext, useState } from "react";

// creating the context
export const CartContext = createContext();

// creating provider
export function CartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    // handle add to cart
    const addToCart = (product) => {
        const itemExists = cart.find((item) => item.product.id == product.id);
        if(itemExists){
            itemExists.quantity++;
            setCart((prevCart) =>
            prevCart.map((item) => (item.product.id == product.id ? { ...item, quantity: itemExists.quantity } : item))
            );
        } else {
            setCart((prevCart) => [...prevCart, {product, quantity: 1}]);
        }
    };
    // handle remove cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.product.id != productId));
    };
    // handle increment product
    const incrementProduct = (productId) => {
        const itemExists = cart.find((item) => item.product.id == productId);
        if(itemExists){
            itemExists.quantity++;
            setCart((prevCart) =>
            prevCart.map((item) => (item.product.id == productId ? { ...item, quantity: itemExists.quantity } : item))
            );
        }
    };
    // handle decrement product
    const decrementProduct = (productId) => {
        const itemExists = cart.find((item) => item.product.id == productId);
        if(itemExists){
            itemExists.quantity--;
            setCart((prevCart) =>
            prevCart.map((item) => (item.product.id == productId ? { ...item, quantity: itemExists.quantity } : item))
            );
        }
    }
    
    return (
        <CartContext.Provider
        value={{ loading, cart, addToCart, removeFromCart, incrementProduct, decrementProduct }}
        >
        {children}
        </CartContext.Provider>
    );
}

// create context hook
export function useCart() {
    // useContext hook to access the context data
    const context = useContext(CartContext);
    return context;
}