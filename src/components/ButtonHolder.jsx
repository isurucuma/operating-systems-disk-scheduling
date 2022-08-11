import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectMechanism from "./SelectMechanism";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { validate_inputs } from "../utils/util_functions";
import FCFS from "../mechanisms/fcfs";

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

export default function ButtonHolder({ setChartData }) {
    const [mechanism, setMechanism] = React.useState("");

    // for inputs
    const [diskStartPoint, setDiskStartPoint] = React.useState("");
    const [diskEndPoint, setDiskEndPoint] = React.useState("");
    const [diskCurrentPosition, setDiskCurrentPosition] = React.useState("");
    const [diskRequestInput, setDiskRequestInput] = React.useState("");

    const [processedStartPoint, setProcessedStartPoint] = React.useState(0);
    const [processedEndPoint, setProcessedEndPoint] = React.useState(0);
    const [processedCurrentPosition, setProcessedCurrentPosition] =
        React.useState(0);
    const [diskRequests, setDiskRequests] = React.useState([]);

    function step_handler() {
        console.log("step btn clicked");
    }

    function run_handler() {
        //     try {
        //         let {
        //             diskStartPointProcessed,
        //             diskEndPointProcessed,
        //             diskCurrentPositionProcessed,
        //             diskRequestInputProcessed,
        //         } = validate_inputs(
        //             diskStartPoint,
        //             diskEndPoint,
        //             diskCurrentPosition,
        //             diskRequestInput
        //         );
        //         setProcessedStartPoint(diskStartPointProcessed);
        //         setProcessedEndPoint(diskEndPointProcessed);
        //         setProcessedCurrentPosition(diskCurrentPositionProcessed);
        //         setDiskRequests(diskRequestInputProcessed);
        //     } catch (e) {
        //         console.log(e);
        //     }

        //     console.log(processedStartPoint);
        //     console.log(processedEndPoint);
        //     console.log(processedCurrentPosition);
        //     console.log(diskRequests);
        // }

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
            console.log({ seek_count, arr });
        }
        if (mechanism === "SSTF") {
            console.log("SSTF");
        }
        if (mechanism === "SCAN") {
            console.log("SCAN");
        }
        if (mechanism === "CSCAN") {
            console.log("CSCAN");
        }
        if (mechanism === "CLOOK") {
            console.log("CLOOK");
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
