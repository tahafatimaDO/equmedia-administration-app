import { Box, Paper } from "@mui/material";

type PanelProps = {
  children: React.ReactNode,
  style: Object
};

const Panel = ({ children, style }: PanelProps) => {
  return (
    <Paper style={style}>
      <Box sx={{ p: 2, height: '100%' }}>
        { children }
      </Box>
    </Paper>
  )
};

export default Panel;
