import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files![0])}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box sx={{ mt: 2 }} textAlign="center">
          <div>Image Preview:</div>
          <Image src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
    </>
  );
};

export default FileInput;