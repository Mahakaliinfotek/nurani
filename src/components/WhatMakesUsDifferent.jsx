import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const data = [
    {
        title: "Scale & Readiness",
        desc: "Large reserve base with a standing 500,000-ton stockpile near port for quick movement",
    },
    {
        title: "Port Proximity",
        desc: " Short haul from mine to Sohar Port improves cycle time and reduces handling loss.",
    },
    {
        title: "Vessel flexibility",
        desc: "Ability to program Baby Capesize as well as smaller classes improves freight economics.",
    },
    {
        title: "End-to-end control",
        desc: "One accountable counterparty from mine to mother vessel, and coordinated India discharge with Group logistics.",
    },
    {
        title: "Consistency",
        desc: "Standard operating procedures for sizing, moisture control, sampling, and documentation support repeatable cargo quality.",
    },
];

const WhatMakesUsDifferent = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 2, md: 4 },
                px: { xs: 2, md: 2 },
                fontFamily: "Manrope !important",
            }}
        >

            <Typography
                sx={{
                    fontFamily: "Manrope !important",
                    fontSize: { xs: "22px", md: "32px", lg: "32px" },
                    fontWeight: 800,
                    mb: 3,
                }}
            >
                What Makes Us Different
            </Typography>


            <Box
                sx={{

                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    pb: 1,
                    //justifyContent: { xs: "center", md: "flex-start" },
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {data.map((item, i) => (
                    <Paper
                        key={i}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%", lg: "30%" }, // responsive wrapping
                            borderRadius: "16px",
                            //   maxWidth: "420px",
                            border: "1px solid #D7ECD8",
                            p: { xs: 3, md: 3.5 },
                            backgroundColor: "#fff",
                        }}
                    >
                        {/* Title */}
                        <Typography
                            sx={{
                                fontFamily: "Manrope !important",
                                fontSize: { xs: "1.1rem", md: "1.1rem" },
                                fontWeight: 700,
                                mb: 1,
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontFamily: "Manrope !important",
                                color: "#555",
                                fontSize: { xs: "1rem", md: "1.rem" },
                                lineHeight: 1.4,
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Paper>
                ))}
            </Box>

        </Box>
    );
};

export default WhatMakesUsDifferent;
