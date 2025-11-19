import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const features = [
    {
        icon: <GroupsIcon />,
        title: "Experienced Team",
        desc: "Our team of experts has extensive experience in the minerals trading industry.",
    },
    {
        icon: <HandshakeIcon />,
        title: "Reliable Supply",
        desc: "We ensure a consistent and reliable supply of minerals to meet your demands.",
    },
    {
        icon: <ShieldOutlinedIcon />,
        title: "Quality Assurance",
        desc: "We adhere to strict quality control measures to ensure the highest standards.",
    },
];

const WhyChooseUs = () => {
    return (
        <Box
            sx={{

                backgroundColor: "#fff",
                py: { xs: 2, md: 2 },
                px: { xs: 2, md: 2 },
                fontFamily: "Manrope",
            }}
        >
            {/* Heading */}
            <Box sx={{ mx: "auto", mb: 5 }}>
                <Typography
                    sx={{
                        fontFamily: "Manrope !important",
                        fontSize: { xs: "22px", md: "32px", lg: "32px" },
                        fontWeight: 800,
                        mb: 2,
                        color: "#0C311A",
                    }}
                >
                    Why Choose Us?
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "1rem", md: "1.15rem" },
                        color: "#555",
                        fontFamily: "Manrope !important",
                        lineHeight: 1.6,
                    }}
                >
                    We are committed to providing exceptional service and building
                    long-term relationships with our clients.
                </Typography>
            </Box>

            {/* Cards — NO GRID, PURE BOX */}



            <Box
                sx={{

                    mx: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.0,

                }}
            >
                {features.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            // width: "calc(50% - 12px)", 
                            // minWidth: "calc(50% - 12px)",

                            width: {
                                xs: "calc(50% - 12px)",
                                md: "31.33%",
                            },

                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: "16px",
                                border: "1px solid #D7ECD8",
                                p: { xs: 2, md: 4 },
                                backgroundColor: "#FFFFFF",
                                height: "100%",
                            }}
                        >
                            {/* Icon */}
                            <Box sx={{ mb: 0, "& svg": { fontSize: 40, color: "#1B8C3A" } }}>
                                {item.icon}
                            </Box>

                            {/* Title */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.1rem", md: "1.1rem" },
                                    fontWeight: 700,
                                    mb: 1,
                                    color: "#0C311A",
                                }}
                            >
                                {item.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                sx={{
                                    fontFamily: "Manrope !important",
                                    color: "#555",
                                    fontSize: { xs: "1rem", md: "1rem" },
                                    lineHeight: 1.6,
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Paper>
                    </Box>
                ))}
            </Box>



        </Box>
    );
};

export default WhyChooseUs;
