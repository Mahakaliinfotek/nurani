import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined"; // cleaner mountain-like logo

const Header = () => {
    return (
        <AppBar
            position="static"

            sx={{
                backgroundColor: "#fff",
                color: "#0c1d14",
                boxShadow: "none",
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "56px",
                }}
            >
                {/* Left: Logo + Text */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TerrainOutlinedIcon sx={{ color: "#007a3b", mr: 1, fontSize: 26 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            fontFamily: '"Manrope", sans-serif',
                            color: "#0c1d14",
                        }}
                    >
                        Mahakali Nurani
                    </Typography>
                </Box>

                {/* Right: Menu Icon */}
                <IconButton
                    edge="end"
                    sx={{
                        color: "#0c1d14",
                    }}
                >
                    <MenuIcon sx={{ fontSize: 26 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
