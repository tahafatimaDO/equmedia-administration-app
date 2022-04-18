import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import type { NextPage } from 'next'
import { ReactElement, useState } from 'react'
import useSWR from 'swr'
import columns from '../../components/dataGrid/users/users'
import DashboardLayout from '../../components/layouts/dashboardLayout'
import Panel from '../../components/panel/panel'
import { Paths } from '../../constant'

const Users: NextPage = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const fetcher = (url: string) => axios.get(url).then(res => res);
  const { data } = useSWR(Paths.getUsers, fetcher);
  
  return (
    <>
      <h1>Users</h1>
      <Panel style={{ flex: 1 }}>
        {data ? (
          <DataGrid 
            columns={columns}
            rows={data.data} 
            pageSize={pageSize}
            rowsPerPageOptions={[5, 10, 20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
          />
        ) : 'loading'}
      </Panel>
    </>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Users
