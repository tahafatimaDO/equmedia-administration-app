import { Avatar, Stack, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { stringAvatar } from "../../../../utils/avatarUtils";

const NameCell = (params: GridRenderCellParams) => {
  const { fullName, email } = params.row;

  return (
    <Stack direction="row" spacing={1}>
      <Avatar {...stringAvatar(fullName || 'U N')} />
      <Stack direction="column">
        <Typography variant="body1"><strong>{fullName}</strong></Typography>
        <Typography variant="caption">{email}</Typography>
      </Stack>
    </Stack>
  )
};

export default NameCell;
