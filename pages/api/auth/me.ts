import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { apiUrl } from '../../../constant'

const me = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get(`${apiUrl}/auth`, { 
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie!
      }
    })
    res.send(data)
  } catch ({ response: { status, data } }) {
    res.status(status as number).json(data)
  }
}


export default me;
