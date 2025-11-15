import React from "react";
import { Box, Typography } from "@mui/material";

const BusinessFocus = () => {
    return (
        <Box

            sx={{
                px: 2,

                py: { xs: 2, md: 2 },
                fontFamily: '"Manrope", sans-serif',
                textAlign: "left",
            }}
        >
            <Box
                sx={{
               
                    mx: 0,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "22px", md: "32px", lg: "32px" },
                        mb: 1.5,
                        color: "#0c1d14",
                        fontFamily: '"Manrope", sans-serif',
                    }}
                >
                    Business Focus
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", lg: "1.5rem", md: "1.5rem" },
                        lineHeight: 1.7,
                        color: "#0c1d14",
                        fontWeight: 400,
                        fontFamily: '"Manrope", sans-serif',
                    }}
                >
                    Mahakali Nurani LLC is the Group’s Oman platform for minerals, led by
                    limestone in collaboration with more than one mine in the{" "}
                    <Box component="span" sx={{ fontWeight: 700 }}>
                        Sultanate of Oman
                    </Box>
                    . We have smooth mine-to-port road movement that deliver consistently
                    quality cargoes globally.
                </Typography>
            </Box>
        </Box>
    );
};

export default BusinessFocus;
