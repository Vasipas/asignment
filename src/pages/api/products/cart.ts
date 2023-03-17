import { IProduct } from '@/redux/reducers/products/types';
import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from './products';

type Data = {
    [key: string]: string | IProduct[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { body } = req;
        const itemsIds = body?.map((item: [string, number][]) => Number(item[0]));
        const respBody = data.filter(item => itemsIds?.some((id: number )=> id === item.id))
        res.status(200).json({ data: respBody })
        return;
    }
    res.status(422).json({ error: 'Not valid request' })
}