import React from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FromControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  FromControl: {
    marginBottom: 16,
    minWidth: 128,
    width: "100%"
  }
});

const SelectBox = (props) => {
  const classes = useStyles();
  
  return (
    <FromControl className={classes.FromControl}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        required={props.required} value={props.value}
        onChange={(event) => props.select(event.target.value)}
      >
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
        ))}
      </Select>
    </FromControl>
  )
}

export default SelectBox