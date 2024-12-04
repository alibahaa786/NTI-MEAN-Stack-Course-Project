export interface FilterForm {
    minPrice: number,
    maxPrice: number,
    categories: string[],
    availability: {
      inStock: boolean,
      outOfStock: boolean
    },
    sortBy: string
}