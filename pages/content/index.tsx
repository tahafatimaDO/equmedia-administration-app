import { Box, Button, Tab, Tabs } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { ReactElement, useState } from "react";
import useSWR from "swr";
import columns from "../../components/dataGrid/content/content";
import DashboardLayout from "../../components/layouts/dashboardLayout";
import Panel from "../../components/panel/panel";
import TabPanel, { a11yTabsProps } from "../../components/tabs/tabPanel";
import { Paths } from "../../constant";
import Link from "next/link";

const Content = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const [tab, setTab] = useState(0);
  const fetcher = (url: string) => axios.get(url).then(res => res);
  const { data } = useSWR(Paths.getContent, fetcher);

  const handleChange = (event: React.SyntheticEvent, tabValue: number) => {
    setTab(tabValue);
  };
  
  return (
    <>
      <h1>Content</h1>
      <Panel style={{}}>
        <Box sx={{ mb: 1 }}>
          <Link href="/content/create" passHref>
            <Button variant="contained" startIcon={<AddIcon />}>
              New Post
            </Button>
          </Link>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleChange} aria-label="website tabs">
            <Tab label="Equnews" {...a11yTabsProps(0)} />
            <Tab label="Equschool" {...a11yTabsProps(1)} />
            <Tab label="Equlifestyle" {...a11yTabsProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          {data ? (
            <DataGrid 
              columns={columns}
              rows={data.data} 
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 20]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              checkboxSelection
              disableSelectionOnClick
              // components={{ Toolbar: GridToolbar }}
            />
          ) : 'loading'}
        </TabPanel>
        <TabPanel value={tab} index={1}>
          {data ? (
            <DataGrid 
              columns={columns}
              rows={data.data} 
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 20]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              checkboxSelection
              disableSelectionOnClick
              // components={{ Toolbar: GridToolbar }}
            />
          ) : 'loading'}
        </TabPanel>
        <TabPanel value={tab} index={2}>
          {data ? (
            <DataGrid 
              columns={columns}
              rows={data.data} 
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 20]}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              checkboxSelection
              disableSelectionOnClick
              // components={{ Toolbar: GridToolbar }}
            />
          ) : 'loading'}
        </TabPanel>
      </Panel>
    </>
  )
}

Content.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Content