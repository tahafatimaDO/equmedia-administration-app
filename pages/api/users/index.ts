import { NextApiRequest, NextApiResponse } from "next";
import { apiUrl } from "../../../constant";
import axiosInstance from "../../../lib/axios";

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('getUsers')
  return res.json([
    { id: '123', email: 'Snow@gmail.com', fullName: 'Snow Jon', role: 'admin', subscriptions: [] },
    { id: '234', email: 'Lannister@gmail.com', fullName: 'Lannister Cersei', role: 'member', subscriptions: [{name: 'Equnews', expiresAt: '20-05-2022'}] },
    { id: '345', email: 'Lannoster@gmail.com', fullName: 'Lannister Jaime', role: 'member', subscriptions: [] },
    { id: '456', email: 'Stark@gmail.com', fullName: 'Stark Arya', role: 'moderator', subscriptions: [{name: 'Equnews', expiresAt: '20-05-2022'}, {name: 'Equschool', expiresAt: '8-9-2022'}] },
    { id: '567', email: 'Targaryen@gmail.com', fullName: 'Targaryen Daenerys', role: 'member', subscriptions: [] },
    { id: '678', email: 'Melisandre@gmail.com', fullName: null, role: 'member', subscriptions: [] },
    { id: '789', email: 'Clifford@gmail.com', fullName: 'Clifford Ferrara', role: 'member', subscriptions: [{name: 'Equnews', expiresAt: '20-05-2022'}, {name: 'Equschool', expiresAt: '10-11-2022'}] },
    { id: '890', email: 'Frances@gmail.com', fullName: 'Frances Rossini', role: 'member', subscriptions: [{name: 'Equnews', expiresAt: '20-05-2022'}] },
    { id: '012', email: 'Roxie@gmail.com', fullName: 'Roxie Harvey', role: 'member', subscriptions: [{name: 'Equnews', expiresAt: '20-05-2022'}] },
  ]);
}

const _getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axiosInstance.get(`${apiUrl}/auth/users`);
    console.log('getUsers', data);
    res.send(data);
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export default getUsers;
