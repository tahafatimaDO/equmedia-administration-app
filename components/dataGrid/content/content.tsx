import { GridColDef } from "@mui/x-data-grid";
import ImageCell from "./cells/image";
import LanguageCell from "./cells/language";

const columns: GridColDef[] = [
  {
    field: 'thumbnail',
    headerName: '',
    width: 100,
    renderCell: ImageCell,
  },
  {
    field: 'title',
    headerName: 'Title',
    minWidth: 370,
  },
  {
    field: 'publishedAt',
    headerName: 'Published Date',
    minWidth: 120,
  },
  {
    field: 'languages',
    headerName: 'Translations',
    width: 200,
    renderCell: LanguageCell,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
  },
];

export default columns;
