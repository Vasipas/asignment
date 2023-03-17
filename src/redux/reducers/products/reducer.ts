import { PayloadAction , createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
import { ProductData } from "@/pages/api/products/products";
import { IPayloadId, IProduct, IProductsState } from "./types";

const initialState: IProductsState = {
  products: null,
  productsInCart: null,
  product: null,
  draggedItem: null,
  cartList: null
}

const products = createSlice({
	name: '@@products',
	initialState,
	reducers: {
		getAllProductsRequest: (state) => {},
		getProductsSuccess: (state, { payload }: PayloadAction<ProductData>) => {
			const productsState = state;
			productsState.products = payload.data;
		},
		pushToCart: (state, {payload}: PayloadAction<IPayloadId & {count: number}>) => {
			const cartState = state
			const { id, count } = payload;
			if(cartState?.productsInCart?.hasOwnProperty(id)) {
				const newValue = cartState?.productsInCart?.[id] as number;
				cartState.productsInCart = {...cartState.productsInCart, [id]: newValue + count};
				return;
			}
			cartState.productsInCart = {...cartState.productsInCart, [id]: 1}			
		},
		changeCountInCart: (state, {payload}: PayloadAction<IPayloadId & {count: number}>) => {
			const cartState = state
			const { id, count } = payload;
			if(cartState?.productsInCart?.hasOwnProperty(id)) {
				cartState.productsInCart = {...cartState.productsInCart, [id]: count};
				return;
			}
			cartState.productsInCart = {...cartState.productsInCart, [id]: 1}	
		},
		removeItemFromCart: (state, {payload}: PayloadAction<IPayloadId>) => {
			const cartState = state
			const { id } = payload;
			if(cartState?.productsInCart?.hasOwnProperty(id)) {
				const {[id]: deleted, ...newCart} = cartState.productsInCart;
				const filteredCart = cartState.cartList?.filter(item => item.id !== Number(id)) || null
				cartState.productsInCart = newCart;
				cartState.cartList = filteredCart;
			}
		},
		getOneProductRequest: (state, action: PayloadAction<IPayloadId>) => {},
		getOneProductSuccess: (state, {payload}: PayloadAction<IProduct>) => {
			const productState = state;
			productState.product = payload;
		},
		checkAsDragged: (state, {payload}: PayloadAction<IPayloadId>) => {
			const draggedState = state;
			draggedState.draggedItem = payload.id;
		},
		removeFromDragged: (state) => {
			const draggedState = state;
			draggedState.draggedItem = null;
		},
		getCartItemsRequest: (state, action) => {},
		getCartItemsSuccess: (state, {payload}: PayloadAction<IProduct[]>) => {
			const cartState = state;
			cartState.cartList = payload;
		},
	}
  })


 export default products.reducer;
 export const {	
	getAllProductsRequest, 
	getProductsSuccess, 
	pushToCart, 
	changeCountInCart,
	removeItemFromCart,
	getOneProductRequest, 
	getOneProductSuccess, 
	checkAsDragged,
	removeFromDragged,
	getCartItemsRequest,
	getCartItemsSuccess,
} = products.actions;