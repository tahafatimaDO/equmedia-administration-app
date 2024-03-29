import { ReactElement } from "react"
import ContentForm from "../../components/forms/contentForm"
import DashboardLayout from "../../components/layouts/dashboardLayout"

const CreateContent = () => {
  return (
    <>
      <h1>Create post</h1>
      <ContentForm />
    </>
  )
}

CreateContent.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default CreateContent