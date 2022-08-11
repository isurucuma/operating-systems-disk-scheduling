import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMechanism({ mechanism, setMechanism }) {
    const handleChange = (event) => {
        setMechanism(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Mechanism</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={mechanism}
                    label="Mechanism"
                    onChange={handleChange}
                >
                    <MenuItem value={"FCFS"}>
                        FCFS (First come first served)
                    </MenuItem>
                    <MenuItem value={"SSTF"}>
                        SSTF (Shortest seek time first)
                    </MenuItem>
                    <MenuItem value={"SCAN"}>SCAN</MenuItem>
                    <MenuItem value={"CSCAN"}>C-SCAN</MenuItem>
                    <MenuItem value={"CLOOK"}>C-LOOK</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
