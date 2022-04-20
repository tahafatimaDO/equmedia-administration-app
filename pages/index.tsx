import type { NextPage } from 'next'
import { ReactElement } from 'react'
import DashboardLayout from '../components/layouts/dashboardLayout'

const Home = () => {
  return (
    <div>
      <h1>Admin panel</h1>
      <ul>
        <li>Dashboard</li>
        <li>
          Users stats
          <ul>
            <li>Amount</li>
            <li>New last X hours</li>
            <li>Subscriptions</li>
          </ul>
        </li>
        <li>
          Posts stats
          <ul>
            <li>Amount</li>
            <li>Filtered not translated?</li>
            <li>Views? Check performance</li>
          </ul>
        </li>
        <li>
          Adserve stats
          <ul>
            <li>Amount Impressions and clicks</li>
            <li>Active zones?</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Home
