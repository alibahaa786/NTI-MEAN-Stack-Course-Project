export interface Product {
    _id: string,
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    stock: number,
    brand: string,
    images: string[],
    thumbnail: string,
    quantity: number,
    tags?: string[]
}