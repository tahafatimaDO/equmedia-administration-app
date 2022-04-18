import axios from 'axios'
import {NextApiRequest, NextApiResponse} from 'next'
import { apiUrl } from '../../../constant';

const refreshtoken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {data, headers: returnedHeaders} = await axios.post(
      `${apiUrl}/auth/refresh-token`, 
      undefined,
    );

    Object.keys(returnedHeaders).forEach(key =>
      res.setHeader(key, returnedHeaders[key]),
    );

    res.status(200).json(data);
  } catch ({ response: { status, data } }) {
    console.error(data)
    res.status(status as number).json(data)
  }
}

export default refreshtoken;
