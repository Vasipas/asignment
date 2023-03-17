import { endpoints } from "../endpoints";
import { http } from "../http";
import { ICategoriesApi } from "./types";

export const CategoriesApi:ICategoriesApi  = {
    getAllCategories: () => http.get(endpoints.CATEGORIES.GET_CATEGORIES).then(response => response.data),
    getCategory: (id: string) => http.get('').then(response => response.data),
}