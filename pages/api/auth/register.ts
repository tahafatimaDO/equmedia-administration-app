import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { apiUrl } from "../../../constant";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  return axios.post(`${apiUrl}/auth/signup`, {
    email, password
  }, { 
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie || ''
    }
  })
  .then((response) => {
    console.log('SUCCESS RESPONSE', response.data);
    return res.status(200).json(response);
  })
  .catch(({ response: { status, data } }) => {
    console.log('ERROR RESPONSE', data);
    res.status(status as number).json(data)
  })
}

export default register;