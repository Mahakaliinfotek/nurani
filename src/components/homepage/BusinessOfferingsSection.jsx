import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Replace these paths with your actual images
import home_DV from "../../assets/images/home_DV.webp";
import limestone0To5 from "../../assets/images/5mmLimestone.webp";
import limestone10To40 from "../../assets/images/40mmLimestone.webp";
import limestone40To80 from "../../assets/images/80mmLimestone.webp";
import otherMinerals from "../../assets/images/OtherMinerals.webp";

const offerings = [
    {
        id: 1,
        title: "0 TO 5 MM LIMESTONE",
        image: limestone0To5,
        alt: "0 to 5 mm limestone",
    },
    {
        id: 2,
        title: "10–40 MM LIMESTONE",
        image: limestone10To40,
        alt: "10 to 40 mm limestone",
    },
    {
        id: 3,
        title: "40–80 MM LIMESTONE",
        image: limestone40To80,
        alt: "40 to 80 mm limestone",
    },
    {
        id: 4,
        title: "OTHER MINERALS",
        image: otherMinerals,
        alt: "Other minerals",
    },
];

const CornerMark = ({ top, left, right, bottom }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                top,
                left,
                right,
                bottom,
                width: { xs: 8, md: 9 },
                height: { xs: 8, md: 9 },
                borderColor: "#000",
                borderStyle: "solid",
                borderTopWidth: top !== undefined ? 2 : 0,
                borderBottomWidth: bottom !== undefined ? 2 : 0,
                borderLeftWidth: left !== undefined ? 2 : 0,
                borderRightWidth: right !== undefined ? 2 : 0,
            }}
        />
    );
};

const OfferingCard = ({ item }) => {
    return (
        <Box
            sx={{
                position: "relative",
                height: {
                    xs: 150,
                    sm: 210,
                    md: 248,
                },

                border: "1px solid #dddcdc",
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",

                transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                "&:hover": {
                    transform: {
                        xs: "none",
                        md: "translateY(-4px)",
                    },
                    borderColor: "#075A12",
                    boxShadow: {
                        md: "0 10px 24px rgba(7, 90, 18, 0.12)",
                    },
                },

                "&:hover .difference-icon": {
                    transform: "scale(1.06)",
                },

                "&:hover .difference-title": {
                    color: "#075A12",
                },

            }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: {
                        xs: 118,
                        sm: 140,
                        md: 174,
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 2, md: 3 },
                    pt: { xs: 1, md: 1.5 },
                }}
            >
                <CornerMark top={18} left={18} />
                <CornerMark top={18} right={18} />
                <CornerMark bottom={16} left={18} />
                <CornerMark bottom={16} right={18} />

                <Box
                    component="img"
                    src={item.image}
                    alt={item.alt}
                    sx={{
                        display: "block",
                        width: "auto",
                        height: "auto",
                        maxWidth: {
                            xs: "68%",
                            sm: "70%",
                            md: "78%",
                        },
                        maxHeight: {
                            xs: 82,
                            sm: 100,
                            md: 125,
                        },
                        objectFit: "contain",
                    }}
                />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    minHeight: { xs: 60, md: 74 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 1.5, md: 2 },
                    pb: { xs: 0.5, md: 1 },
                }}
            >
                <Typography
                    sx={{
                        color: "#202124",
                        fontSize: {
                            xs: 13,
                            sm: 16,
                            md: 18,
                        },
                        lineHeight: 1.25,
                        fontWeight: 600,
                        textAlign: "center",
                        textTransform: "uppercase",
                        whiteSpace: {
                            xs: "normal",
                            md: "nowrap",
                        },
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
        </Box>
    );
};

const BusinessOfferingsSection = () => {
    return (
        <Box component="section">

            <Box
                sx={{

                    py: {
                        xs: 4.5,
                        sm: 6,
                        md: 8.5,
                    },
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        maxWidth: "1320px",
                        px: {
                            xs: 3.5,
                            sm: 5,
                            md: 7,
                        },
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                md: 1200,
                            },
                            mx: {
                                xs: 0,
                                md: "auto",
                            },
                            textAlign: {
                                xs: "left",
                                md: "center",
                            },
                        }}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                mb: {
                                    xs: 1.5,
                                    md: 2,
                                },
                                color: "#202124",
                                fontSize: {
                                    xs: 22,
                                    sm: 22,
                                    md: 36,
                                },
                                lineHeight: 1.15,
                                fontWeight: 700,
                                letterSpacing: "-0.02em",
                                textTransform: "uppercase",
                            }}
                        >
                            Business Focus
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 1180,
                                mx: {
                                    xs: 0,
                                    md: "auto",
                                },
                                color: "#292929",
                                fontSize: {
                                    xs: 15.5,
                                    sm: 17,
                                    md: 19,
                                },
                                lineHeight: {
                                    xs: 1.45,
                                    md: 1.5,
                                },
                                fontWeight: 400,
                            }}
                        >
                            Mahakali Nurani LLC is the Group’s Oman platform for minerals, led
                            by limestone in collaboration with multiple mines in the
                            Sultanate of Oman. We have smooth mine-to-port road movement that
                            deliver consistently quality cargoes globally.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* Offerings */}
            <Box
                sx={{
                    backgroundColor: "#ECFFED",
                    py: {
                        xs: 5.5,
                        sm: 7,
                        md: 8,
                    },
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        maxWidth: "1320px",
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
                            mb: {
                                xs: 3,
                                sm: 4,
                                md: 4.5,
                            },
                            color: "#202124",
                            fontSize: {
                                xs: 22,
                                sm: 22,
                                md: 36,
                            },
                            lineHeight: 1.15,
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            textAlign: {
                                xs: "left",
                                md: "center",
                            },
                            textTransform: "uppercase",
                        }}
                    >
                        Our Offerings
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(4, minmax(0, 1fr))",
                            },
                            gap: {
                                xs: 1,
                                sm: 1,
                                md: 2,
                            },
                        }}
                    >
                        {offerings.map((item) => (
                            <OfferingCard key={item.id} item={item} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default BusinessOfferingsSection;