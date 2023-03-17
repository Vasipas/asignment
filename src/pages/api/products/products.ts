import { IProduct } from '@/redux/reducers/products/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export type ProductData = {
  data: Array<IProduct> | {error: string}
}

export const data = [{
    id: 1,
    price: '25.05',
    amount: 'eur',
    description: 'product with some description',
    inStock: true,
    title: 'Amazing pocket lighter'
}, {
    id: 2,
    price: '51.99',
    amount: 'eur',
    description: 'product with some description',
    inStock: false,
    title: 'Some wood stick'
}, {
    id: 3,
    price: '24.5',
    amount: 'usd',
    description: 'product with some description',
    inStock: true,
    title: 'Incredible gum'
}, {
    id: 4,
    price: '25.05',
    amount: 'eur',
    description: 'product with some description',
    inStock: true,
    title: 'Amazing lighter'
}, {
    id: 5,
    price: '51.99',
    amount: 'eur',
    description: 'product with some description',
    inStock: true,
    title: 'Some stick'
}, {
    id: 6,
    price: '24.5',
    amount: 'usd',
    description: 'product with some description',
    inStock: true,
    title: 'Used gum from bottom of table'
}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData>
) {
  if (req.method === 'GET') {
  res.status(200).json({ data })
  }
  res.status(422).json({data: {error: 'Wrong request'}})
}
