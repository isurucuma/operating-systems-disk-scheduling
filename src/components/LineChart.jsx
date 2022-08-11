import React from "react";
import { Line } from "react-chartjs-2";

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

export default function LineChart() {
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
