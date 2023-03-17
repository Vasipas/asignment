/* eslint-disable @typescript-eslint/no-explicit-any */
import {call, put, takeEvery } from 'redux-saga/effects'
import { isAxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsApi } from '@/services/api/products';
import { ProductData } from '@/pages/api/products/products';
import { getAllProductsRequest, getCartItemsRequest, getCartItemsSuccess, getOneProductRequest, getOneProductSuccess, getProductsSuccess } from "./reducer";
import { IProduct } from './types';

function* getAllProductsWorker () {
    try {
        const response: ProductData = yield call(ProductsApi.getAllProducts); 
        yield put(getProductsSuccess(response));
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

function* getOneProductsWorker ({payload}: PayloadAction<{id: string}>) {
    try {
        const response: {data: IProduct} = yield call(ProductsApi.getOneProduct, payload.id); 
        yield put(getOneProductSuccess(response.data));
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

function* getCartItemsWorker ({payload}: PayloadAction<[string, number][]>) {
    try {
        const response: {data: IProduct[]} = yield call(ProductsApi.getCartProducts, payload);
        yield put(getCartItemsSuccess(response.data));
    }
    catch(error) {
        if (isAxiosError(error)) {
            console.error(error)
            }
    }
}

export function* productsSaga() {
    yield takeEvery(getAllProductsRequest.type, getAllProductsWorker);
    yield takeEvery(getOneProductRequest.type, getOneProductsWorker);
    yield takeEvery(getCartItemsRequest.type, getCartItemsWorker);
}