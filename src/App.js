import "./App.css";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import LineChart from "./components/LineChart";
import ButtonHolder from "./components/ButtonHolder";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

function App() {
    const [chartData, setChartData] = useState({ labels: null, arr: null });
    return (
        <Container maxWidth="" className="outerContainer">
            <h1 margin="normal" className="topic">Disk Scheduling Algorithm</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <ButtonHolder setChartData={setChartData} />
                    </Grid>
                    <Grid item xs={7}>
                        <LineChart chartData={chartData} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;
