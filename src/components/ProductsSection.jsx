import React from "react";
import { Box, Typography } from "@mui/material";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

const productData = [
    {
        img: icon2,
        label: "0 to 5 mm",
    },
    {
        img: icon1,
        label: "10–40 mm",
    },
    {
        img: icon3,
        label: "40–80 mm",
    },
];

const ProductsSection = () => {
    return (
        <Box

            sx={{

                px: 2,
                py: { xs: 4, md: 2 },
                fontFamily: "Manrope !important",
                color: "#0c1d14",
                mt: { md: 4 }
                // backgroundColor: "#F0F7F0",
                // border: "1px solid #D7ECD8",

            }}
        >

            <Typography
                variant="h5"
                sx={{
                    fontFamily: "Manrope !important",
                    fontWeight: 700,
                    fontSize: { xs: "22px", md: "32px", lg: "32px" },

                    color: "#0c1d14",
                }}
            >
                Our Limestone Offerings
            </Typography>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 2, md: 10 },

                    flexWrap: "nowrap",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {productData.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            textAlign: "center",
                            minWidth: { xs: "120px", md: "150px" },
                        }}
                    >
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                                width: { xs: 40, md: "50%", lg: "50%" },
                                height: { xs: 40, md: "50%", lg: "50%" },
                                objectFit: "contain",
                                filter: "grayscale(100%)",
                                opacity: 0.9,
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "1rem", lg: "2rem", md: "2rem" },
                                lineHeight: 1.6,
                                color: "#0c1d14",
                                fontWeight: 500,
                                fontFamily: "Manrope !important",
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>


            {/* --- Other Minerals --- */}
            <Typography
                variant="h5"
                sx={{
                    fontFamily: "Manrope !important",
                    fontWeight: 700,
                    fontSize: { xs: "22px", md: "32px", lg: "32px" },
                    mb: 2,
                    color: "#0c1d14",
                }}
            >
                Other Minerals
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1.5,

                }}
            >

                <Box>
                    <Typography

                        variant="body1"
                        sx={{
                            fontFamily: "Manrope !important",
                            fontSize: "1.5rem",
                            lineHeight: 1.7,
                            color: "#0c1d14",
                            fontWeight: 400,
                        }}
                    >
                        Dolomite, Gypsum and select minerals can be offered based on <br />availability and specification requirements.{" "}

                    </Typography>

                </Box>

                <Box
                    component="img"
                    src={icon1}
                    alt="Mineral"
                    sx={{
                        ml: "auto",
                        width: { xs: 40, md: "12%", lg: "12%" },
                        height: { xs: 40, md: "12%", lg: "12%" },
                        objectFit: "contain",
                    }}
                />
            </Box>


        </Box>
    );
};

export default ProductsSection;
