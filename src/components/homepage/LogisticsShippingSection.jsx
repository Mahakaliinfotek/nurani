import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import desktopMap from "../../assets/images/map_dv.webp";
import mobileMap from "../../assets/images/map_mv.webp";

const LogisticsShippingSection = () => {
    return (
        <Box component="section" sx={{

        }}>
            
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