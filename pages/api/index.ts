// import next resources https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// import utilities and helpers
import { dateFormatted } from '../../helpers';

// Setting Types or Interfaces
export interface Props {
  message: string;
}

// API Next Handler Backend Functions:
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Props>
) {
  res.status(200).json({
    message: `API is ready and running at: ${dateFormatted(new Date())}`,
  });
}
