import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export default function DropDownComponent({
  options,
  value,
  onChange,
  name,
  label,
}) {
  return (
    <FormControl fullWidth sx={{ width: 500, marginTop: 1 }}>
      <InputLabel id="inputLabel">{label}</InputLabel>
      <Select
        labelId={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Choose Your University"
        input={<OutlinedInput label={label} />}
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
