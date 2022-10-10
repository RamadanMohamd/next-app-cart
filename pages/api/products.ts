// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prodcutsData from './db/products.json'
import { Product } from '../../types/product'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Product>>
) {
  res.status(200).json(prodcutsData.products)
}
