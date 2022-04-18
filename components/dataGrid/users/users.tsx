import { GridColDef } from "@mui/x-data-grid";
import NameCell from "./cells/name";
import RoleCell from "./cells/role";
import SubscriptionCell from "./cells/subscription";

const columns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Name',
    width: 250,
    renderCell: NameCell,
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 200,
    renderCell: RoleCell,
  },
  {
    field: 'subscriptions',
    headerName: 'Subscriptions',
    minWidth: 200,
    renderCell: SubscriptionCell,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
  },
];

export default columns;
