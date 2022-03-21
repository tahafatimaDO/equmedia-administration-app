import type { NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import DashboardLayout from '../../components/layouts/dashboardLayout'

const Users: NextPage = () => {
  return (
    <div>
      <h1>Secured page</h1>
      <Link href="#">admin</Link>
      <Link href="#">profile</Link>
    </div>
  )
}

// https://thewidlarzgroup.com/nextjs-auth/

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Users
