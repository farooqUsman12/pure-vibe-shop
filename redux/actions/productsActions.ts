"use client"
import { GET_PRODUCTS } from "../types/products"

export const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}