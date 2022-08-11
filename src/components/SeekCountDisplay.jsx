import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SeekCountDisplay({ seekCount }) {
    return (
        <Card
            sx={{
                minWidth: 275,
                margin: 5,
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: 22,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    color="text.secondary"
                    gutterBottom
                    marginBottom={2}
                >
                    TOTAL HEAD MOVEMENT: {seekCount}
                </Typography>
            </CardContent>
        </Card>
    );
}
