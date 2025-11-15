import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Banner_dt from "../assets/images/banner_dt.png";   // Desktop
import Banner_mb from "../assets/images/banner_mb.png";

const HeroSection = () => {
    return (
        <Box sx={{

            width: "100%",
            px: { xs: 2, md: 2, lg: 2 }


        }}

        >
            <Box
                component="section"
                sx={{
                    position: "relative",
                    width: "100%",
                    py: { xs: 25, md: 20 },
                    backgroundImage: {
                        xs: `
        linear-gradient(rgba(0,58,28,0.6), rgba(0,20,10,0.8)),
        url(${Banner_mb})
    `,
                        md: `
        linear-gradient(rgba(0,58,28,0.6), rgba(0,20,10,0.8)),
        url(${Banner_dt})
    `,
                    },
                    //             backgroundImage: `
                    //   linear-gradient(rgba(0, 58, 28, 0.6), rgba(0, 20, 10, 0.8)),
                    //   url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUBA8T-TzIJlJ-aFcV8hnU1SuDOL9GrpTCubyeYfOXbj4e7nQMYciWkcMU3MlqDgB4uQzQ4LvMGnn4FswljJDRJ49WuXAoOoJL5W5-XgOr5NA5kE9ny67D4BpNftz2QtzKMQn34gOSSpxdr6cWuit0jIeqt65y9xIVJ3MiC7lQMd4nWFi3I8_hKOUBCOKjJokf5FNKhW_iHfmb1oZ_tiKB2S3sH9HQFr42JyIDrgTtUFPIcNbNHW1sha9C4F_HkCBI2oULtsvl7DJd')
                    // `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "16px",
                    textAlign: "center",
                    fontFamily: '"Manrope", sans-serif',
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        gap: 3,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                mb: 1,
                                fontFamily: '"Manrope", sans-serif',
                                fontSize: { xs: "2rem", md: "2.75rem" },
                            }}
                        >
                            Mahakali Nurani LLC, Oman
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.9)",

                                mx: "auto",
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                fontFamily: '"Manrope", sans-serif',
                            }}
                        >
                            World’s trusted source for premium limestone and minerals.
                        </Typography>
                    </Box>

                    {/* <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#007a3b",
                            textTransform: "none",
                            fontWeight: 700,
                            fontFamily: '"Manrope", sans-serif',
                            px: 4,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": {
                                backgroundColor: "#006633",
                            },
                        }}
                    >
                        Enquire Now
                    </Button> */}
                </Box>
            </Box>
        </Box>


    );
};

export default HeroSection;
