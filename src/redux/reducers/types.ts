import { ICategoriesState } from "./categories/types";
import { IProductsState } from "./products/types";

export interface IStoreState {
    categories: ICategoriesState;
    products: IProductsState;
} 