import { Box } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import Image from "next/image";

const ImageCell = (params: GridRenderCellParams) => {
  const imageUrl = params.value;

  return (
    <Box>
      {
        imageUrl 
          ? <Image src={imageUrl} width="114" height="75" alt="something" />
          : "No image"
      }
    </Box>
  )
};

export default ImageCell;
