import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SeekCountDisplay({ seekCount }) {
    return (
        <Card
            sx={{
                minWidth: 844,
                padding: 0,
                marginTop: 1,
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
