import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const EnquiryForm = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#F8FBF8",   // FULL-WIDTH BACKGROUND FIX
                py: { xs: 2, md: 0 },
                px: { xs: 2, md: 0 },
                fontFamily: "Manrope",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1200,      
                    // backgroundColor: "#F0F7F0",
                    // border: "1px solid #D7ECD8",
                    borderRadius: "20px",
                    p: { xs: 2, md: 2 },
                }}
            >
                {/* Title */}
                <Typography
                    sx={{
                        fontFamily: '"Manrope", sans-serif',
                        fontSize: { xs: "22px", md: "32px" },
                        fontWeight: 800,
                        textAlign: "center",
                        color: "#0C311A",
                        mb: 1,
                    }}
                >
                    Enquiries
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        fontFamily: '"Manrope", sans-serif',
                        textAlign: "center",
                        color: "#555",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        maxWidth: 600,
                        mx: "auto",
                        mb: 4,
                        lineHeight: 1.6,
                    }}
                >
                    For specifications, sampling plans, pricing, and lift schedules,
                    please share your target grade, preferred vessel size, and delivery terms.
                </Typography>

                {/* Form */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <TextField
                        fullWidth
                        placeholder="Name"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                height: 55,
                                backgroundColor: "#fff",
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Company"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                height: 55,
                                backgroundColor: "#fff",
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Email"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                height: 55,
                                backgroundColor: "#fff",
                            },
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                backgroundColor: "#fff",
                                alignItems: "flex-start",
                            },
                        }}
                    />
                </Box>

                {/* Submit */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 4,
                        py: 1.8,
                        backgroundColor: "#1B6E34",
                        textTransform: "none",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        borderRadius: "12px",
                        "&:hover": { backgroundColor: "#155C2C" },
                    }}
                >
                    Submit Enquiry
                </Button>
            </Box>
        </Box>
    );
};

export default EnquiryForm;
