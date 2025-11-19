import React from "react";
import { Box, Typography } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const cards = [
    { icon: <DiamondOutlinedIcon />, label: "Mining" },
    { icon: <LocalShippingOutlinedIcon />, label: "Logistics" },
    { icon: <SailingOutlinedIcon />, label: "Shipping" },
    { icon: <PublicOutlinedIcon />, label: "Global Reach" },
];

export default function TextGrid() {
    return (
        <Box
            sx={{
                px: 2,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "stretch",
                width: "100%",
                fontFamily: "Manrope !important",
                columnGap: { xs: "12px", md: "16px" }, // horizontal gap
                rowGap: { xs: "12px", md: "16px" },
                py: { xs: 2, md: 4 }
            }}
        >
            {cards.map((c, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: {
                            xs: "0 0 calc(50% - 6px)",
                            md: "0 0 calc(25% - 12px)",
                        },
                        boxSizing: "border-box",
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: 50, md: 70, lg: 70 },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "left", md: "center" },
                            gap: 1,
                            px: 2,
                            border: ".5px solid #cdeadb",
                            borderRadius: "12px",
                            backgroundColor: "#f5f8f7",
                            transition: "0.25s ease-in-out",
                            "&:hover": {
                                borderColor: "#007a3b",
                                backgroundColor: "#f1f6f3",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                color: "#007a3b",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: { xs: 28, lg: 50, md: 50 },
                                flexShrink: 0,
                                "& svg": {
                                    fontSize: { xs: 28, md: 40, lg: 40 },
                                },
                            }}
                        >
                            {c.icon}
                        </Box>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                color: "#0c1d14",
                                fontFamily: "Manrope !important",
                                fontSize: { xs: "1rem", lg: "1.5rem" },
                            }}
                        >
                            {c.label}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
