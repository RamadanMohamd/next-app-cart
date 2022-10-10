import { Product } from "./product"

export type ProductsState = {
    items: Array<Product> // products array
    count: number // number of unique products
    status: string //starts with 'idle' => then 'loading' | 'succeeded' | 'failed'
}