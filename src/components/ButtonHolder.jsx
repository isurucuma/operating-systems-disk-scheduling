import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectMechanism from "./SelectMechanism";
import SelectDirection from "./SelectDirection";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { validate_inputs } from "../utils/util_functions";
import FCFS from "../mechanisms/fcfs";
import SSTF from "../mechanisms/sstf";
import SCAN from "../mechanisms/scan";
import CSCAN from "../mechanisms/cscan";
import CLOOK from "../mechanisms/clook";

/*
    const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
        {
            label: "Disk Scheduling",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(40,30,192,0.4)",
            data: [50, 108, 45, 90, 198, 120, 40],
        },
    ],
};
*/

export default function ButtonHolder({ setChartData, setSeekCount }) {
    const [mechanism, setMechanism] = React.useState("");
    const [direction, setDirection] = React.useState("");

    // for inputs
    const [diskStartPoint, setDiskStartPoint] = React.useState("");
    const [diskEndPoint, setDiskEndPoint] = React.useState("");
    const [diskCurrentPosition, setDiskCurrentPosition] = React.useState("");
    const [diskRequestInput, setDiskRequestInput] = React.useState("");

    function step_handler() {
        console.log("step btn clicked");
    }

    function update_chart(seek_count, arr) {
        let labels = [...Array(arr.length + 1).keys()];
        arr = [Number(diskCurrentPosition), ...arr];
        setChartData({ labels, arr });
        setSeekCount(seek_count);
    }

    function run_handler() {
        console.log(Number(diskStartPoint));
        console.log(Number(diskEndPoint));
        console.log(Number(diskCurrentPosition));

        let req_array = diskRequestInput.split(" ").map(Number);

        console.log(req_array);

        // check the mechanism and do the operation
        if (mechanism === "FCFS") {
            console.log("FCFS");
            let { seek_count, arr } = FCFS(
                req_array,
                Number(diskCurrentPosition)
            );
            update_chart(seek_count, arr);
        }
        if (mechanism === "SCAN") {
            console.log("SCAN");
            let { seek_count, arr } = SCAN(
                req_array,
                Number(diskCurrentPosition),
                "right"
            );
            update_chart(seek_count, arr);
        }
        if (mechanism === "SSTF") {
            console.log("SSTF");
            let { seek_count, arr } = SSTF(
                req_array,
                Number(diskCurrentPosition)
            );
            update_chart(seek_count, arr);
        }

        if (mechanism === "CSCAN") {
            console.log("CSCAN");
            let { seek_count, arr } = CSCAN(
                req_array,
                Number(diskCurrentPosition)
            );
            update_chart(seek_count, arr);
        }
        if (mechanism === "CLOOK") {
            console.log("CLOOK");
            let { seek_count, arr } = CLOOK(
                req_array,
                Number(diskCurrentPosition)
            );
            update_chart(seek_count, arr);
        }
    }

    function clear_handler() {
        console.log("clear btn clicked");
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                    marginBottom={2}
                >
                    Disk Scheduling
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "space-between",
                    }}
                >
                    <SelectMechanism
                        mechanism={mechanism}
                        setMechanism={setMechanism}
                    />
                    <TextField
                        id="startPoint"
                        label="Disk start point"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => {
                            setDiskStartPoint(e.target.value);
                        }}
                    />
                    <TextField
                        id="endPoint"
                        label="Disk end point"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => {
                            setDiskEndPoint(e.target.value);
                        }}
                    />
                    <TextField
                        id="currentPos"
                        label="Disk current position"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => {
                            setDiskCurrentPosition(e.target.value);
                        }}
                    />
                    <TextField
                        id="requestInput"
                        label="Request array"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => {
                            setDiskRequestInput(e.target.value);
                        }}
                    />
                    {mechanism === "SCAN" ? (
                        <SelectDirection
                            direction={direction}
                            setDirection={setDirection}
                        />
                    ) : null}
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={step_handler} size="small">
                    Step
                </Button>
                <Button onClick={run_handler} size="small">
                    Run all
                </Button>
                <Button onClick={clear_handler} size="small">
                    Clear
                </Button>
            </CardActions>
        </Card>
    );
}
