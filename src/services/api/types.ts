export interface ICategoriesApi {
    getAllCategories: () => Promise<TCategoriesData>;
    getCategory: (id: string) => Promise<ICategory>,
}

export interface ICategory {
    id: number;
    label: string;
    meta: Array<string>;
}

export type TCategoriesData = {
    categories: Array<ICategory>
  }