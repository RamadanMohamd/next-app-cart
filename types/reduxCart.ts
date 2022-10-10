import { Product } from "./product"

export type CartItemsInterFace = {
  product: Product
  count: number
}

export type CartState = {
  items: Array<CartItemsInterFace> // products array
  count: number // number of unique products
  total: number // cart total amount
}

export type AddChangeItemInterFace = {
  product: Product, // product object
  count: number, // total number of items added per specific product
  operation: string // "increment" - "decrement"
}

export type removeItemInterFace = {
  product: Product,
}