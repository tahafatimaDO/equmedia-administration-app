import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

const roles: {[key: string]: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'} = {
  admin: 'success',
  moderator: 'info',
}

const RoleCell = (params: GridRenderCellParams) => {
  const role = params.value;
  
  return (
    <Chip label={role} size="small" variant="outlined" color={roles[role] || 'default'} />
  )
};

export default RoleCell;
