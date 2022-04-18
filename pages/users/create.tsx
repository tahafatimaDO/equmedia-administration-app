import { Box, Paper } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import axios from 'axios'
import type { NextPage } from 'next'
import { ReactElement } from 'react'
import RegisterForm from '../../components/forms/registerForm'
import DashboardLayout from '../../components/layouts/dashboardLayout'
import Panel from '../../components/panel/panel'

const CreateUser: NextPage = () => {
  return (
    <>
      <h1>Create user</h1>
      <Panel style={{ flex: 0 }}>
        <RegisterForm />
      </Panel>
    </>
  )
}

CreateUser.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default CreateUser
