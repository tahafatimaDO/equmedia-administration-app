import axios from "axios";
import { apiUrl } from "../../../constant";

const register = async (req, res) => {
  const { email, password} = req.body;

  return axios.post(`${apiUrl}/auth/signup`, {
    email, password
  }, { 
    withCredentials: true,
    headers: {
      Cookie: req.headers.cookie
    }
  })
  .then((response) => {
    console.log('SUCCESS RESPONSE', response.data);
    return res.status(200).json(response);
  })
  .catch((error) => {
    console.log('ERROR RESPONSE', error.response?.data);
    return res.status(500).json(error);
  })
}

export default register;