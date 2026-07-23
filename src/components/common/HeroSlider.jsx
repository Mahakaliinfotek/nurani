
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";

// import home_DV from "../../assets/images/home_DV.webp";

// import home_mv from "../../assets/images/home_mv.webp";
// const statistics = [
//     {
//         value: "12+ Million",
//         label: "Geological Reserves (Tons)",
//     },
//     {
//         value: "1.2 MTPA",
//         label: "Production Capacity",
//     },
//     {
//         value: "5M",
//         label: "Stock Near Sohar Port (Tons)",
//     },
// ];




// const HeroSlider = () => {
//     return (
//         <Box
//             component="section"
//             sx={{
//                 px: { xs: 1.5, sm: 2.5 },
//                 pt: { xs: 1.5, md: 2.5 },
//                 pb: { xs: 4, md: 5 },

//             }}
//         >
//             <Box
//                 sx={{
//                     position: "relative",
//                     minHeight: {
//                         xs: 650,
//                         sm: 720,
//                         md: 720,
//                         lg: 760,
//                     },
//                     borderRadius: { xs: "20px", md: "24px" },
//                     overflow: "hidden",
//                     backgroundImage: {
//                         xs: `url("${home_mv}")`,
//                         md: `
//     linear-gradient(
//       90deg,
//       rgba(239, 248, 253, 0.92) 0%,
//       rgba(238, 248, 253, 0.5) 28%,
//       rgba(255, 255, 255, 0.02) 60%
//     ),
//     url("${home_DV}")
//   `,
//                     },
//                     backgroundSize: "cover",
//                     backgroundPosition: {
//                         xs: "62% center",
//                         sm: "58% center",
//                         md: "center center",
//                     },
//                     backgroundRepeat: "no-repeat",
//                 }}
//             >
//                 {/* Optional light overlay */}
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         inset: 0,
//                         background:
//                             "linear-gradient(180deg, rgba(255,255,255,0.03) 55%, rgba(0,49,31,0.08) 100%)",
//                         pointerEvents: "none",
//                     }}
//                 />

//                 <Container
//                     maxWidth="xl"
//                     sx={{
//                         position: "relative",
//                         zIndex: 1,
//                         height: "100%",
//                         minHeight: "inherit",
//                         px: {
//                             // xs: 3,
//                             //sm: 5,
//                             md: 8,
//                             lg: 10,
//                         },
//                     }}
//                 >


//                     <Box
//                         sx={{
//                             pt: {
//                                 xs: 10,
//                                 sm: 9,
//                                 md: 13,
//                                 lg: 15,
//                             },
//                             maxWidth: {
//                                 xs: "100%",
//                                 sm: "100%",
//                                 md: 610,
//                             },
//                             mx: {
//                                 xs: "auto",
//                                 md: 0,
//                             },
//                             px: {
//                                 xs: 2,
//                                 md: 0,
//                             },
//                             textAlign: {
//                                 xs: "center",
//                                 md: "left",
//                             },
//                         }}
//                     >
//                         <Typography
//                             sx={{
//                                 mb: {
//                                     xs: 1.5,
//                                     md: 2.5,
//                                 },
//                                 fontSize: {
//                                     xs: 14,
//                                     sm: 16,
//                                     md: 18,
//                                 },
//                                 fontWeight: 500,
//                                 lineHeight: 1.4,
//                                 letterSpacing: "0.01em",
//                                 color: "#151515",
//                                 textTransform: "uppercase",
//                                 fontFamily: '"IBM Plex Sans", sans-serif',
//                             }}
//                         >
//                             The Mahakali Group
//                         </Typography>
//                         <Typography
//                             component="h1"
//                             sx={{
//                                 m: 0,
//                                 fontSize: {
//                                     xs: 22,
//                                     sm: 18,
//                                     md: 45,
//                                     lg: 45,
//                                 },
//                                 lineHeight: {
//                                     xs: 1.15,
//                                     md: 1.08,
//                                 },
//                                 fontWeight: 600,
//                                 letterSpacing: {
//                                     xs: "-0.025em",
//                                     md: "-0.035em",
//                                 },
//                                 color: "#050505",
//                                 textTransform: "uppercase",
//                                 fontFamily: '"IBM Plex Sans", sans-serif',
//                                 whiteSpace: {
//                                     xs: "nowrap",
//                                     md: "normal",
//                                 },
//                             }}
//                         >
//                             Mahakali Nurani LLC,
//                             <Box
//                                 component="span"
//                                 sx={{
//                                     display: {
//                                         xs: "inline",
//                                         md: "block",
//                                     },
//                                     ml: {
//                                         xs: 0.5,
//                                         md: 0,
//                                     },
//                                 }}
//                             >
//                                 Oman
//                             </Box>
//                         </Typography>

//                         {/* <Typography
//                             component="h1"
//                             sx={{
//                                 m: 0,
//                                 fontSize: {
//                                     xs: 18,
//                                     sm: 18,
//                                     md: 45,
//                                     lg: 45,
//                                 },
//                                 lineHeight: {
//                                     xs: 1.15,
//                                     md: 1.08,
//                                 },
//                                 fontWeight: 500,
//                                 letterSpacing: {
//                                     xs: "-0.025em",
//                                     md: "-0.035em",
//                                 },
//                                 color: "#050505",
//                                 textTransform: "uppercase",
//                                 fontFamily: '"IBM Plex Sans", sans-serif',
//                             }}
//                         >
//                             Mahakali Nurani LLC,
//                             <Box component="span" sx={{ display: "block" }}>
//                                 Oman
//                             </Box>
//                         </Typography> */}
//                     </Box>



//                     <Box
//                         sx={{
//                             position: "absolute",
//                             left: {
//                                 xs: 12,
//                                 sm: 40,
//                                 md: "50%",
//                             },
//                             right: {
//                                 xs: 12,
//                                 sm: 40,
//                                 md: "auto",
//                             },
//                             bottom: {
//                                 xs: 16,
//                                 sm: 28,
//                                 md: 40,
//                             },
//                             transform: {
//                                 xs: "none",
//                                 md: "translateX(-50%)",
//                             },
//                             width: {
//                                 xs: "auto",
//                                 md: "calc(100% - 160px)",
//                                 lg: "calc(100% - 260px)",
//                             },
//                             maxWidth: 1050,

//                             display: "grid",

//                             // Keep three columns on every screen size
//                             gridTemplateColumns: "repeat(3, minmax(0, 1fr))",

//                             backgroundColor: "#023200",
//                             borderRadius: {
//                                 xs: "14px",
//                                 sm: "20px",
//                                 md: "22px",
//                             },
//                             px: {
//                                 xs: 0.8,
//                                 sm: 2,
//                                 md: 4,
//                             },
//                             py: {
//                                 xs: 1.8,
//                                 sm: 2.5,
//                                 md: 3,
//                             },
//                             boxShadow: "0 18px 40px rgba(0, 54, 7, 0.18)",
//                         }}
//                     >
//                         {statistics.map((item, index) => (
//                             <Box
//                                 key={item.label}
//                                 sx={{
//                                     position: "relative",
//                                     minWidth: 0,
//                                     px: {
//                                         xs: 1,
//                                         sm: 2,
//                                         md: 3,
//                                     },
//                                     py: {
//                                         xs: 0.4,
//                                         sm: 0.5,
//                                     },

//                                     "&::after": {
//                                         content: '""',
//                                         position: "absolute",
//                                         display:
//                                             index < statistics.length - 1 ? "block" : "none",
//                                         right: 0,
//                                         top: "12%",
//                                         bottom: "12%",
//                                         width: "1px",
//                                         height: "76%",
//                                         backgroundColor: "rgba(255,255,255,0.28)",
//                                     },
//                                 }}
//                             >
//                                 <Typography
//                                     sx={{
//                                         mb: {
//                                             xs: 0.7,
//                                             sm: 1,
//                                         },
//                                         color: "#FFFFFF",
//                                         fontSize: {
//                                             xs: "0.9rem",
//                                             sm: "1.5rem",
//                                             md: "2rem",
//                                         },
//                                         fontWeight: 700,
//                                         lineHeight: 1.1,
//                                         whiteSpace: "nowrap",
//                                         fontFamily: '"IBM Plex Sans", sans-serif',
//                                     }}
//                                 >
//                                     {item.value}
//                                 </Typography>

//                                 <Typography
//                                     sx={{
//                                         color: "rgba(255,255,255,0.94)",
//                                         fontSize: {
//                                             xs: 8,
//                                             sm: 11,
//                                             md: 13,
//                                         },
//                                         fontWeight: 500,
//                                         lineHeight: {
//                                             xs: 1.35,
//                                             md: 1.45,
//                                         },
//                                         letterSpacing: {
//                                             xs: 0,
//                                             md: "0.01em",
//                                         },
//                                         textTransform: "uppercase",
//                                         fontFamily: '"IBM Plex Sans", sans-serif',
//                                         overflowWrap: "break-word",
//                                     }}
//                                 >
//                                     {item.label}
//                                 </Typography>
//                             </Box>
//                         ))}
//                     </Box>
//                 </Container>
//             </Box>
//         </Box>
//     );
// };

// export default HeroSlider;

import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import home_DV from "../../assets/images/home_DV.webp";
import home_mv from "../../assets/images/home_mv.webp";

const statistics = [
    {
        value: 12,
        decimals: 0,
        suffix: "+ Million",
        label: "Geological Reserves (Tons)",
    },
    {
        value: 1.2,
        decimals: 1,
        suffix: " MTPA",
        label: "Production Capacity",
    },
    {
        value: 5,
        decimals: 0,
        suffix: "M",
        label: "TONS READY STOCK",
    },
];

const CountUpNumber = ({
    value,
    decimals = 0,
    suffix = "",
    duration = 1800,
}) => {
    const numberRef = useRef(null);
    const hasAnimatedRef = useRef(false);
    const animationFrameRef = useRef(null);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const element = numberRef.current;

        if (!element) return;

        const startAnimation = () => {
            if (hasAnimatedRef.current) return;

            hasAnimatedRef.current = true;

            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Smooth ease-out
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                setDisplayValue(value * easedProgress);

                if (progress < 1) {
                    animationFrameRef.current =
                        window.requestAnimationFrame(animate);
                } else {
                    setDisplayValue(value);
                }
            };

            animationFrameRef.current =
                window.requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (animationFrameRef.current) {
                window.cancelAnimationFrame(
                    animationFrameRef.current
                );
            }
        };
    }, [value, duration]);

    return (
        <Box
            component="span"
            ref={numberRef}
            sx={{
                display: "inline-block",
                minWidth: "max-content",
            }}
        >
            {displayValue.toFixed(decimals)}
            {suffix}
        </Box>
    );
};

const HeroSlider = () => {
    return (
        <Box
            id="home"
            component="section"
            sx={{
                px: {
                    xs: 1.5,
                    sm: 2.5,
                },
                pt: {
                    xs: 1.5,
                    md: 2.5,
                },
                pb: {
                    xs: 4,
                    md: 5,
                },
            }}
        >
            <Box
                sx={{
                    position: "relative",

                    minHeight: {
                        xs: 650,
                        sm: 720,
                        md: 720,
                        lg: 760,
                    },

                    borderRadius: {
                        xs: "20px",
                        md: "24px",
                    },

                    overflow: "hidden",

                    backgroundImage: {
                        xs: `url("${home_mv}")`,

                        md: `
              linear-gradient(
                90deg,
                rgba(239, 248, 253, 0.92) 0%,
                rgba(238, 248, 253, 0.5) 28%,
                rgba(255, 255, 255, 0.02) 60%
              ),
              url("${home_DV}")
            `,
                    },

                    backgroundSize: "cover",

                    backgroundPosition: {
                        xs: "62% center",
                        sm: "58% center",
                        md: "center center",
                    },

                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Light overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",

                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.03) 55%, rgba(0,49,31,0.08) 100%)",
                    }}
                />

                <Container
                    maxWidth="xl"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        minHeight: "inherit",

                        px: {
                            md: 8,
                            lg: 10,
                        },
                    }}
                >
                    {/* Hero heading */}
                    <Box
                        sx={{
                            pt: {
                                xs: 10,
                                sm: 9,
                                md: 13,
                                lg: 15,
                            },

                            maxWidth: {
                                xs: "100%",
                                sm: "100%",
                                md: 610,
                            },

                            mx: {
                                xs: "auto",
                                md: 0,
                            },

                            px: {
                                xs: 2,
                                md: 0,
                            },

                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                mb: {
                                    xs: 1.5,
                                    md: 2.5,
                                },

                                color: "#151515",

                                fontFamily:
                                    '"IBM Plex Sans", sans-serif',

                                fontSize: {
                                    xs: 14,
                                    sm: 16,
                                    md: 18,
                                },

                                fontWeight: 500,
                                lineHeight: 1.4,
                                letterSpacing: "0.01em",
                                textTransform: "uppercase",
                            }}
                        >
                            The Mahakali Group
                        </Typography>

                        <Typography
                            component="h1"
                            sx={{
                                m: 0,

                                color: "#050505",

                                fontFamily:
                                    '"IBM Plex Sans", sans-serif',

                                fontSize: {
                                    xs: 22,
                                    sm: 18,
                                    md: 45,
                                    lg: 45,
                                },

                                lineHeight: {
                                    xs: 1.15,
                                    md: 1.08,
                                },

                                fontWeight: 600,

                                letterSpacing: {
                                    xs: "-0.025em",
                                    md: "-0.035em",
                                },

                                textTransform: "uppercase",

                                whiteSpace: {
                                    xs: "nowrap",
                                    md: "normal",
                                },
                            }}
                        >
                            Mahakali Nurani LLC,

                            <Box
                                component="span"
                                sx={{
                                    display: {
                                        xs: "inline",
                                        md: "block",
                                    },

                                    ml: {
                                        xs: 0.5,
                                        md: 0,
                                    },
                                }}
                            >
                                Oman
                            </Box>
                        </Typography>
                    </Box>

                    {/* Statistics card */}
                    <Box
                        sx={{
                            position: "absolute",

                            left: {
                                xs: 12,
                                sm: 40,
                                md: "50%",
                            },

                            right: {
                                xs: 12,
                                sm: 40,
                                md: "auto",
                            },

                            bottom: {
                                xs: 16,
                                sm: 28,
                                md: 40,
                            },

                            transform: {
                                xs: "none",
                                md: "translateX(-50%)",
                            },

                            width: {
                                xs: "auto",
                                md: "calc(100% - 160px)",
                                lg: "calc(100% - 260px)",
                            },

                            maxWidth: 1050,

                            display: "grid",

                            gridTemplateColumns:
                                "repeat(3, minmax(0, 1fr))",

                            backgroundColor: "#023200",

                            borderRadius: {
                                xs: "14px",
                                sm: "20px",
                                md: "22px",
                            },

                            px: {
                                xs: 0.8,
                                sm: 2,
                                md: 4,
                            },

                            py: {
                                xs: 1.8,
                                sm: 2.5,
                                md: 3,
                            },

                            boxShadow:
                                "0 18px 40px rgba(0, 54, 7, 0.18)",
                        }}
                    >
                        {statistics.map((item, index) => (
                            <Box
                                key={item.label}
                                sx={{
                                    position: "relative",
                                    minWidth: 0,

                                    px: {
                                        xs: 1,
                                        sm: 2,
                                        md: 3,
                                    },

                                    py: {
                                        xs: 0.4,
                                        sm: 0.5,
                                    },

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",

                                        display:
                                            index <
                                                statistics.length - 1
                                                ? "block"
                                                : "none",

                                        right: 0,
                                        top: "12%",
                                        bottom: "12%",

                                        width: "1px",
                                        height: "76%",

                                        backgroundColor:
                                            "rgba(255,255,255,0.28)",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: {
                                            xs: 0.7,
                                            sm: 1,
                                        },

                                        color: "#FFFFFF",

                                        fontFamily:
                                            '"IBM Plex Sans", sans-serif',

                                        fontSize: {
                                            xs: "0.9rem",
                                            sm: "1.5rem",
                                            md: "2rem",
                                        },

                                        fontWeight: 700,
                                        lineHeight: 1.1,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <CountUpNumber
                                        value={item.value}
                                        decimals={item.decimals}
                                        suffix={item.suffix}
                                    />
                                </Typography>

                                <Typography
                                    sx={{
                                        color:
                                            "rgba(255,255,255,0.94)",

                                        fontFamily:
                                            '"IBM Plex Sans", sans-serif',

                                        fontSize: {
                                            xs: 8,
                                            sm: 11,
                                            md: 13,
                                        },

                                        fontWeight: 500,

                                        lineHeight: {
                                            xs: 1.35,
                                            md: 1.45,
                                        },

                                        letterSpacing: {
                                            xs: 0,
                                            md: "0.01em",
                                        },

                                        textTransform: "uppercase",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default HeroSlider;
