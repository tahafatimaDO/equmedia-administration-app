import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useField } from "formik";

type TextInputProps = {
  type: string,
  name: string,
  label: string,
  multiline?: boolean,
  maxRows?: number,
  rows?: number,
  placeholder?: string,
  helperText?: string,
  InputProps?: Object,
};

const TextInput = ({ helperText, ...props }: TextInputProps) => {
  const [field, { error, touched }] = useField({ 
    name: props.name, 
    type: props.type 
  });
  const hasError = !!error && !!touched;
  
  return (
    <FormControl fullWidth sx={{ mb: 1 }} variant='outlined'>
      <TextField
        fullWidth
        error={hasError}
        { ...field }
        { ...props }
      />
      {
        hasError || helperText ? (
          <FormHelperText error={hasError}>
            {hasError ? error : helperText}
          </FormHelperText>
        ) : null
      }
    </FormControl>
  )
};

export default TextInput;
