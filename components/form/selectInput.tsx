import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useField } from "formik";

type SelectInputProps = {
  name: string,
  value: string,
  label: string,
  helperText?: string,
  SelectProps?: Object,
};

const SelectInput = ({ helperText, ...props }: SelectInputProps) => {
  const [field, { error, touched }] = useField({ 
    name: props.name,
    value: props.value,
  });
  const hasError = !!error && !!touched;
  
  return (
    <FormControl sx={{ m: 1 }} error={hasError}>
      <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-error-label"
        { ...field }
        { ...props }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
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

export default SelectInput;
