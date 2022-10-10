export type Product = {
  name: string
  sku: number
  categories: Array<string>
  tags: Array<string>
  images: Array<string>
  inSale: boolean
  price: number
  disscount: number
}