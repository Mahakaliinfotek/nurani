import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const stats = [
    { value: "12+ Million", label: "Geological Reserves (Tons)" },
    { value: "1.2 MTPA", label: "Production Capacity" },
    { value: "500,000", label: "Stock Near Sohar Port (Tons)" },
];

const MiningStats = () => {
    return (
        <Box
            component="section"
            sx={{
                px: 2,

                fontFamily: "Manrope !important",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    width: "100%",
                    borderRadius: "12px",
                    p: { xs: 3, md: 10, lg: 10 },
                    color: "#fff",
                    backgroundImage: `
            linear-gradient(to right, rgba(255, 122, 0, 0.8), rgba(255, 122, 0, 0.6)),
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi0XoIfCLAOx67rEPYRaUvkAcFn3P1c2d7KyPNMmhmfBv75pLuM-7zGs2Cz-7PAOzwhTEL7rx8AokyDi115rQDU4Rq4B2M_mkRSTMzT3UjEkvDZ6G3Q1oBwrWx_ZLa90vdwKyB37YaUD_whahioIt_Ez7lkBx3MER3wf-QhLQ0WqXToIWFN1BdrdrbtQO-7-KuK0XT9_U7YunuNvTwEth6ewJaPfPKLb_LNE24OSxsBIfQPnN9b_VTRBSWHZuIcOztCsdArpjh2mNL')
          `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    textAlign: "center",
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    {stats.map((item, idx) => (
                        <Grid item xs={12} md={4} key={idx}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1.8rem", md: "2rem" },
                                        fontWeight: 900,
                                        lineHeight: 1.2,
                                        letterSpacing: "-0.02em",
                                        color: "#fff",
                                    }}
                                >
                                    {item.value}
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.9)",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default MiningStats;
