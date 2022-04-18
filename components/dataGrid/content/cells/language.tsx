import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { stringAvatar } from "../../../../utils/avatarUtils";

const LanguageCell = (params: GridRenderCellParams) => {
  const languages = params.value;
  return (
    <Stack direction="row" spacing={1}>
      {languages.map((language: string) => (
        <Chip 
          key={language} 
          label={language} 
          variant="outlined"
          style={{height: '100%'}}
        />
      ))}
    </Stack>
  )
};

export default LanguageCell;
