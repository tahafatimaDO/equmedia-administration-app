import { ReactElement } from 'react'
import RegisterForm from '../../components/forms/registerForm'
import DashboardLayout from '../../components/layouts/dashboardLayout'
import Panel from '../../components/panel/panel'

const CreateUser = () => {
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
