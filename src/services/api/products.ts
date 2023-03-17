import { endpoints } from "../endpoints";
import { http } from "../http";

export const ProductsApi = {
    getAllProducts: () => http.get(endpoints.PRODUCTS.GET_ALL_PRODUCTS).then(response => response.data),
    getOneProduct: (id: string) => http.get(endpoints.PRODUCTS.GET_ONE_PRODUCT(id)).then(response => response.data),
    getCartProducts: (payload: [string, number][]) => http.post(endpoints.PRODUCTS.GET_CART, payload).then(response => response.data)

}