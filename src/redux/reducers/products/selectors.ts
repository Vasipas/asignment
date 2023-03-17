import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const getProductsStore = (state: RootState) => state.products;

export const getProductsState = createSelector([getProductsStore], (products) => products);

export const getProducts = createSelector([getProductsStore], (products) => products.products);

export const getOneProduct = createSelector([getProductsStore], (products) => products.product);

export const getDragged = createSelector([getProductsStore], (products) => products.draggedItem);

export const getCart = createSelector([getProductsStore], (products) => products.productsInCart && Object.entries(products.productsInCart));

export const getCartList = createSelector([getProductsStore], (products) => products.cartList);

export const getCartItemsCount = createSelector([getProductsStore], 
    (products) => products.productsInCart ? Object.entries(products.productsInCart).reduce((acc, item) => {return acc + item[1]}, 0) : 0);