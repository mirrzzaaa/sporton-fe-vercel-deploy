export interface Category {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    imageUrl: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
}
