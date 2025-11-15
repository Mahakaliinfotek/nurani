import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import WavesIcon from "@mui/icons-material/Waves";

const Logistics = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 1, md: 2 },
                px: { xs: 0, md: 4 },
                fontFamily: '"Manrope", sans-serif',
            }}
        >
            <Typography
                sx={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: { xs: "22px", md: "32px", lg: "32px" },
                    fontWeight: 800,
                    mb: 3,
                    px: { xs: 2, md: 0 },
                }}
            >
                Logistics & Shipping
            </Typography>

            <Grid container spacing={3} sx={{ px: { xs: 2, md: 0 } }}>


                {[
                    { icon: <RoomIcon sx={{ color: "#1B8C3A", fontSize: { xs: 30, md: 40, lg: 40 } }} />, title: "Load Port", subtitle: "Sohar, Sultanate of Oman" },
                    { icon: <WavesIcon sx={{ color: "#1B8C3A", fontSize: { xs: 30, md: 40, lg: 40 } }} />, title: "Port Draft", subtitle: "14.5 meters" }
                ].map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: { xs: 400, lg: 400, md: 400 },
                                borderRadius: "16px",
                                border: "1px solid #D7ECD8",
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Box sx={{ width: 40 }}>{item.icon}</Box>

                            <Box>
                                <Typography sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: "1rem", color: "#555" }}>
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
};

export default Logistics;
