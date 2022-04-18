import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"
import { apiUrl } from "../../../constant";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const { data, headers: returnedHeaders } = await axios.post(
      `${apiUrl}/auth/signin`,
      { email, password }, { 
        withCredentials: true,
        headers: {
          Cookie: req.headers.cookie!
        }
      }
    )
    
    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1] as string)
    )
    console.log(data)
    res.send(data) 
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export default login;
