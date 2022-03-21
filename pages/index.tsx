import type { NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import DashboardLayout from '../components/layouts/dashboardLayout'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Secured page</h1>
      <Link href="#">admin</Link>
      <Link href="#">profile</Link>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Home
