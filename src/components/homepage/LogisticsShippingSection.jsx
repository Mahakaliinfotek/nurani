import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import desktopMap from "../../assets/images/map_dv.webp";
import mobileMap from "../../assets/images/map_mv.webp";

const LogisticsShippingSection = () => {
    return (
        <Box component="section" sx={{

        }}>
            {/* <Box
                sx={{
                    py: {
                        xs: 4.5,
                        sm: 5,
                        md: 7,
                    },
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        maxWidth: "1380px",
                        px: {
                            xs: 3.5,
                            sm: 5,
                            md: 7,
                        },
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            m: 0,
                            color: "#202124",
                            fontFamily: 'IBM Plex Sans',
                            fontSize: {
                                xs: 23,
                                sm: 28,
                                md: 38,
                            },
                            lineHeight: 1.15,
                            fontWeight: 500,
                            letterSpacing: "-0.025em",
                            textAlign: {
                                xs: "left",
                                md: "center",
                            },
                            textTransform: "uppercase",
                        }}
                    >
                        Logistics &amp; Shipping
                    </Typography>
                </Container>
            </Box> */}




            {/* <Box
                component="img"
                src={desktopMap,map_mv}
                alt="Logistics and shipping routes between Oman and India"
                loading="lazy"
                sx={{
                    display: "block",
                    width: "100%",
                    height: 500,
                    objectFit: "contain",
                }}
            /> */}
            <Box
                component="picture"
                sx={{
                    display: "block",
                    width: "100%",
                    lineHeight: 0,
                }}
            >
                <source media="(max-width: 899px)" srcSet={mobileMap} />

                <Box
                    component="img"
                    src={desktopMap}
                    alt="Logistics and shipping routes between Oman and India"
                    loading="lazy"
                    sx={{
                        display: "block",
                        width: "100%",
                        height: {
                            xs: "auto",
                            md: 500,
                        },
                        objectFit: {
                            xs: "cover",
                            md: "contain",
                        },
                    }}
                />
            </Box>

        </Box>
    );
};

export default LogisticsShippingSection;