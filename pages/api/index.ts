// import next resources https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { DATE_FORMATTED } from '../../helpers';

// Local Interfaces
export interface Props
{
  message: string;
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Props> )
{
  res.status( 200 ).json( {
    message: `API is ready and running at: ${DATE_FORMATTED( new Date() )}`,
  } );
}
