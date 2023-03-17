export const endpoints = {
    CATEGORIES: {
        GET_CATEGORIES: '/categories/categories'
    },
    PRODUCTS: {
        GET_ALL_PRODUCTS: '/products/products',
        GET_ONE_PRODUCT: (id: string) =>`/products/${id}`,
        GET_CART: '/products/cart'
    }
}