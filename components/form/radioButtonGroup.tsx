import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface item {
  value: string,
  label: string,
}

type RadioButtonGroupProps = {
  name: string,
  items: item[],
  label?: string,
  defaultValue?: string,
};

const RadioButtonGroup = ({ items, ...props } : RadioButtonGroupProps) => {
  return (
    <FormControl>
      <RadioGroup
        defaultValue={props.defaultValue || items[0].value}
        { ...props }
      >
        {items.map(({ value, label }) => (
          <FormControlLabel key={value} value={value} control={<Radio />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonGroup;
