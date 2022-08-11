import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDirection({ direction, setDirection }) {
    const handleChange = (event) => {
        setDirection(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Direction</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={direction}
                    label="Mechanism"
                    onChange={handleChange}
                >
                    <MenuItem value={"left"}>Left</MenuItem>
                    <MenuItem value={"right"}>Right</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
