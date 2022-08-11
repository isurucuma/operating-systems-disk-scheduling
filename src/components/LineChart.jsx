import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }) {
    const data = {
        labels: [],
        datasets: [
            {
                label: "Disk Scheduling",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(40,30,192,0.4)",
                data: [],
            },
        ],
    };
    let labels = chartData.labels;
    let arr = chartData.arr;

    data.labels = labels;
    data.datasets[0].data = arr;

    return (
        <div>
            <Line
                data={data}
                options={{
                    indexAxis: "y",
                    scales: {
                        x: {
                            suggestedMax: 200,
                            suggestedMin: 0,
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: { display: false },
                        },
                    },
                }}
            />
        </div>
    );
}
