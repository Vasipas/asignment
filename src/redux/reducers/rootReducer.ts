import { combineReducers } from "@reduxjs/toolkit";
import products from './products/reducer';

const createRootReducer = () =>
	combineReducers({ products });

export default createRootReducer;