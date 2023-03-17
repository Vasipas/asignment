// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IProduct } from '@/redux/reducers/products/types';
import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from './products';

type Data = {
  data: IProduct
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { id } = req.query;
    const product = data.find(item => item.id === Number(id));
    if (product) {
        res.status(200).json({ data: product })
    }
    else res.status(404).end();
  
}
