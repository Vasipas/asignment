export interface IProductsState {
    products: null | Array<IProduct>,
    productsInCart: null | {[key: string]: number};
    product: null | IProduct,
    draggedItem: null | string;
    cartList: null | IProduct[]
}

export interface IProduct {
    id: number;
    amount: string;
    price: string;
    description: string;
    inStock: boolean;
    title: string;
}

export interface IPayloadId {
	id: string
}