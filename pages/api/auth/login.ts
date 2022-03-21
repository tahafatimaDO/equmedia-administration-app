import axios from "axios";
import { apiUrl } from "../../../constant";

const login = async (req: Request, res: Response) => {
  const { email, password} = req.body;

  return axios.post(`${apiUrl}/auth/login`, {
    email, password
  })
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
}

export default login;