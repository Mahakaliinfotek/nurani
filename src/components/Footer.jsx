import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                backgroundColor: "#fff", // soft light background
                borderTop: "1px solid #e8f1ed",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                textAlign: "center",
                py: 4,
                fontFamily: '"Manrope", sans-serif', // ✅ global font
            }}
        >
            {/* Company Info */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 700,
                    color: "#1b3c26",
                    fontFamily: '"Manrope", sans-serif',
                }}
            >
                Mahakali Nurani LLC
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: "#7a7a7a",
                    mt: 0.5,
                    fontWeight: 400,
                    fontFamily: '"Manrope", sans-serif',
                }}
            >
                Sohar, Sultanate of Oman
            </Typography>

            {/* Social Icons */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mt: 2.5,
                }}
            >
                <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        border: "1px solid #d1d5db",
                        color: "#374151",
                        backgroundColor: "#fff",
                        "&:hover": {
                            color: "#007a3b",
                            borderColor: "#007a3b",
                        },
                        width: 32,
                        height: 32,
                    }}
                >
                    <LinkedInIcon fontSize="small" />
                </IconButton>

                <IconButton
                    href="mailto:info@mahakalinurani.com"
                    sx={{
                        border: "1px solid #d1d5db",
                        color: "#374151",
                        backgroundColor: "#fff",
                        "&:hover": {
                            color: "#007a3b",
                            borderColor: "#007a3b",
                        },
                        width: 32,
                        height: 32,
                    }}
                >
                    <MailOutlineIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Copyright */}
            <Typography
                variant="caption"
                sx={{
                    display: "block",
                    color: "#7a7a7a",
                    mt: 3,
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 400,
                }}
            >
                © 2024 Mahakali Nurani LLC. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;


// extend: {
//   colors: {
//     primary: "#007a3b",
//     "accent-orange": "#FF7A00",
//     "background-light": "#f5f8f7",
//     "background-dark": "#0f2319",
//     "text-light": "#0c1d14",
//     "text-dark": "#e8f0eb",
//     "border-light": "#cdeadb",
//     "border-dark": "#2a3c33",
//   },
//   fontFamily: {
//     display: ["Manrope", "sans-serif"],
//   },
// }