// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";

// import scaleIcon from "../../assets/images/differenceIcon1.webp";
// import expertiseIcon from "../../assets/images/differenceIcon2.webp";
// import fulfilmentIcon from "../../assets/images/differenceIcon3.webp";
// import qualityIcon from "../../assets/images/differenceIcon4.webp";

// const differenceData = [
//     {
//         id: 1,
//         title: "Scale & Readiness",
//         description:
//             "Backed by multiple mining partnerships, 12+ million tonnes of reserves to meet demand at scale.",
//         icon: scaleIcon,
//     },
//     {
//         id: 2,
//         title: "Proven Expertise",
//         description:
//             "40+ years of industry experience in global trade backed by a team that delivers.",
//         icon: expertiseIcon,
//     },
//     {
//         id: 3,
//         title: "Reliable Fulfilment",
//         description:
//             "Strategic port access, efficient logistics & shipping flexibility ensure dependable deliveries.",
//         icon: fulfilmentIcon,
//     },
//     {
//         id: 4,
//         title: "Quality Consistency",
//         description:
//             "Strict sizing and rigorous quality controls ensure uniform product standards.",
//         icon: qualityIcon,
//     },
// ];

// const CornerMarks = () => {
//     const commonStyles = {
//         position: "absolute",
//         width: { xs: 7, md: 8 },
//         height: { xs: 7, md: 8 },
//         borderColor: "#000",
//         borderStyle: "solid",
//     };

//     return (
//         <>
//             <Box
//                 sx={{
//                     ...commonStyles,
//                     top: 0,
//                     left: 0,
//                     borderWidth: "2px 0 0 2px",
//                 }}
//             />

//             <Box
//                 sx={{
//                     ...commonStyles,
//                     top: 0,
//                     right: 0,
//                     borderWidth: "2px 2px 0 0",
//                 }}
//             />

//             <Box
//                 sx={{
//                     ...commonStyles,
//                     bottom: 0,
//                     left: 0,
//                     borderWidth: "0 0 2px 2px",
//                 }}
//             />

//             <Box
//                 sx={{
//                     ...commonStyles,
//                     bottom: 0,
//                     right: 0,
//                     borderWidth: "0 2px 2px 0",
//                 }}
//             />
//         </>
//     );
// };

// const DifferenceCard = ({ item }) => {
//     return (
//         <Box
//             sx={{
//                 minHeight: {
//                     xs: 118,
//                     sm: 130,
//                     md: 150,
//                 },
//                 display: "grid",
//                 gridTemplateColumns: {
//                     xs: "82px minmax(0, 1fr)",
//                     sm: "96px minmax(0, 1fr)",
//                     md: "130px minmax(0, 1fr)",
//                 },
//                 alignItems: "center",
//                 columnGap: {
//                     xs: 2,
//                     sm: 2.5,
//                     md: 3.5,
//                 },
//                 px: {
//                     xs: 2,
//                     sm: 2.5,
//                     md: 3,
//                 },
//                 py: {
//                     xs: 2,
//                     md: 2.5,
//                 },
//                 border: "1px solid #dddcdc",
//                 borderRadius: {
//                     xs: "16px",
//                     md: 0,
//                 },
//                 backgroundColor: "#FFFFFF",
//                 cursor: "pointer",

//                 transition:
//                     "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
//                 "&:hover": {
//                     transform: {
//                         xs: "none",
//                         md: "translateY(-4px)",
//                     },
//                     borderColor: "#075A12",
//                     boxShadow: {
//                         md: "0 10px 24px rgba(7, 90, 18, 0.12)",
//                     },
//                 },

//                 "&:hover .difference-icon": {
//                     transform: "scale(1.06)",
//                 },

//                 "&:hover .difference-title": {
//                     color: "#075A12",
//                 },

//             }}
//         >
//             <Box
//                 sx={{
//                     position: "relative",
//                     width: {
//                         xs: 74,
//                         sm: 86,
//                         md: 104,
//                     },
//                     height: {
//                         xs: 76,
//                         sm: 86,
//                         md: 104,
//                     },
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     mx: "auto",
//                 }}
//             >
//                 <CornerMarks />

//                 <Box
//                     component="img"
//                     src={item.icon}
//                     alt=""
//                     sx={{
//                         width: {
//                             xs: 52,
//                             sm: 60,
//                             md: 68,
//                         },
//                         height: {
//                             xs: 52,
//                             sm: 60,
//                             md: 68,
//                         },
//                         objectFit: "contain",
//                     }}
//                 />
//             </Box>

//             <Box>
//                 <Typography
//                     component="h3"
//                     sx={{
//                         mb: {
//                             xs: 1,
//                             md: 1.4,
//                         },
//                         color: "#202124",
//                         fontSize: {
//                             xs: 15,
//                             sm: 16,
//                             md: 18,
//                         },
//                         lineHeight: 1.2,
//                         fontWeight: 700,
//                         textTransform: "uppercase",
//                     }}
//                 >
//                     {item.title}
//                 </Typography>

//                 <Typography
//                     sx={{
//                         color: "#333333",
//                         fontSize: {
//                             xs: 13.5,
//                             sm: 15,
//                             md: 17,
//                         },
//                         lineHeight: {
//                             xs: 1.35,
//                             md: 1.5,
//                         },
//                         fontWeight: 400,
//                     }}
//                 >
//                     {item.description}
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// const WhatMakesUsDifferents = () => {
//     return (
//         <Box
//             component="section"
//             sx={{
//                 // backgroundColor: "#FFFFFF",
//                 py: {
//                     xs: 7,
//                     sm: 8,
//                     md: 9,
//                 },
//             }}
//         >
//             <Container
//                 maxWidth={false}
//                 sx={{
//                     maxWidth: "1220px",
//                     px: {
//                         xs: 2.5,
//                         sm: 4,
//                         md: 5,
//                     },
//                 }}
//             >
//                 <Typography
//                     component="h2"
//                     sx={{
//                         mb: {
//                             xs: 3,
//                             sm: 4,
//                             md: 5,
//                         },
//                         color: "#202124",
//                         fontSize: {
//                             xs: 22,
//                             sm: 28,
//                             md: 36,
//                         },
//                         lineHeight: 1.15,
//                         fontWeight: 700,
//                         letterSpacing: "-0.02em",
//                         textAlign: {
//                             xs: "left",
//                             md: "center",
//                         },
//                         textTransform: "uppercase",
//                         whiteSpace: {
//                             xs: "nowrap",
//                             sm: "normal",
//                         },
//                     }}
//                 >
//                     What Makes Us Different
//                 </Typography>

//                 <Box
//                     sx={{
//                         display: "grid",
//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             md: "repeat(2, minmax(0, 1fr))",
//                         },
//                         gap: {
//                             xs: 1.8,
//                             sm: 2,
//                             md: 3,
//                         },
//                     }}
//                 >
//                     {differenceData.map((item) => (
//                         <DifferenceCard key={item.id} item={item} />
//                     ))}
//                 </Box>
//             </Container>
//         </Box>
//     );
// };

// export default WhatMakesUsDifferents;

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import scaleIcon from "../../assets/images/differenceIcon1.webp";
import expertiseIcon from "../../assets/images/differenceIcon2.webp";
import fulfilmentIcon from "../../assets/images/differenceIcon3.webp";
import qualityIcon from "../../assets/images/differenceIcon4.webp";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const differenceData = [
    {
        id: 1,
        title: "Scale & Readiness",
        description:
            "Backed by multiple mining partnerships, 12+ million tonnes of reserves to meet demand at scale.",
        icon: scaleIcon,
    },
    {
        id: 2,
        title: "Proven Expertise",
        description:
            "40+ years of industry experience in global trade backed by a team that delivers.",
        icon: expertiseIcon,
    },
    {
        id: 3,
        title: "Reliable Fulfilment",
        description:
            "Strategic port access, efficient logistics & shipping flexibility ensure dependable deliveries.",
        icon: fulfilmentIcon,
    },
    {
        id: 4,
        title: "Quality Consistency",
        description:
            "Strict sizing and rigorous quality controls ensure uniform product standards.",
        icon: qualityIcon,
    },
];

/* =========================
   SCROLL ANIMATIONS
========================= */

const headingAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const cardsContainerAnimation = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const cardAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const CornerMarks = () => {
    const commonStyles = {
        position: "absolute",
        width: { xs: 7, md: 8 },
        height: { xs: 7, md: 8 },
        borderColor: "#000",
        borderStyle: "solid",
    };

    return (
        <>
            <Box
                sx={{
                    ...commonStyles,
                    top: 0,
                    left: 0,
                    borderWidth: "2px 0 0 2px",
                }}
            />

            <Box
                sx={{
                    ...commonStyles,
                    top: 0,
                    right: 0,
                    borderWidth: "2px 2px 0 0",
                }}
            />

            <Box
                sx={{
                    ...commonStyles,
                    bottom: 0,
                    left: 0,
                    borderWidth: "0 0 2px 2px",
                }}
            />

            <Box
                sx={{
                    ...commonStyles,
                    bottom: 0,
                    right: 0,
                    borderWidth: "0 2px 2px 0",
                }}
            />
        </>
    );
};

const DifferenceCard = ({ item }) => {
    return (
        <MotionBox
            variants={cardAnimation}
            sx={{
                minHeight: {
                    xs: 118,
                    sm: 130,
                    md: 150,
                },

                display: "grid",

                gridTemplateColumns: {
                    xs: "82px minmax(0, 1fr)",
                    sm: "96px minmax(0, 1fr)",
                    md: "130px minmax(0, 1fr)",
                },

                alignItems: "center",

                columnGap: {
                    xs: 2,
                    sm: 2.5,
                    md: 3.5,
                },

                px: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                },

                py: {
                    xs: 2,
                    md: 2.5,
                },

                border: "1px solid #dddcdc",

                borderRadius: {
                    xs: "16px",
                    md: 0,
                },

                backgroundColor: "#FFFFFF",
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

                    width: {
                        xs: 74,
                        sm: 86,
                        md: 104,
                    },

                    height: {
                        xs: 76,
                        sm: 86,
                        md: 104,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                }}
            >
                <CornerMarks />

                <Box
                    className="difference-icon"
                    component="img"
                    src={item.icon}
                    alt=""
                    sx={{
                        width: {
                            xs: 52,
                            sm: 60,
                            md: 68,
                        },

                        height: {
                            xs: 52,
                            sm: 60,
                            md: 68,
                        },

                        objectFit: "contain",

                        transition: "transform 0.3s ease",
                    }}
                />
            </Box>

            <Box>
                <Typography
                    className="difference-title"
                    component="h3"
                    sx={{
                        mb: {
                            xs: 1,
                            md: 1.4,
                        },

                        color: "#202124",

                        fontSize: {
                            xs: 15,
                            sm: 16,
                            md: 18,
                        },

                        lineHeight: 1.2,
                        fontWeight: 700,
                        textTransform: "uppercase",

                        transition: "color 0.3s ease",
                    }}
                >
                    {item.title}
                </Typography>

                <Typography
                    sx={{
                        color: "#333333",

                        fontSize: {
                            xs: 13.5,
                            sm: 15,
                            md: 17,
                        },

                        lineHeight: {
                            xs: 1.35,
                            md: 1.5,
                        },

                        fontWeight: 400,
                    }}
                >
                    {item.description}
                </Typography>
            </Box>
        </MotionBox>
    );
};

const WhatMakesUsDifferents = () => {
    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 7,
                    sm: 8,
                    md: 9,
                },

                overflow: "hidden",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1220px",

                    px: {
                        xs: 2.5,
                        sm: 4,
                        md: 5,
                    },
                }}
            >
                {/* Heading animation */}
                <MotionTypography
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={headingAnimation}
                    component="h2"
                    sx={{
                        mb: {
                            xs: 3,
                            sm: 4,
                            md: 5,
                        },

                        color: "#202124",

                        fontSize: {
                            xs: 22,
                            sm: 28,
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

                        whiteSpace: {
                            xs: "nowrap",
                            sm: "normal",
                        },
                    }}
                >
                    What Makes Us Different
                </MotionTypography>

                {/* Cards animation */}
                <MotionBox
                    variants={cardsContainerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    sx={{
                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(2, minmax(0, 1fr))",
                        },

                        gap: {
                            xs: 1.8,
                            sm: 2,
                            md: 3,
                        },
                    }}
                >
                    {differenceData.map((item) => (
                        <DifferenceCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </MotionBox>
            </Container>
        </Box>
    );
};

export default WhatMakesUsDifferents;