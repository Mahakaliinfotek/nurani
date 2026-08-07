// // import Box from "@mui/material/Box";
// // import Container from "@mui/material/Container";
// // import Typography from "@mui/material/Typography";

// // import desktopMap from "../../assets/images/map_dv.webp";
// // import mobileMap from "../../assets/images/map_mv.webp";

// // const LogisticsShippingSection = () => {
// //     return (
// //         <Box component="section" sx={{

// //         }}>

// //             <Box
// //                 component="picture"
// //                 sx={{
// //                     display: "block",
// //                     width: "100%",
// //                     lineHeight: 0,
// //                 }}
// //             >
// //                 <source media="(max-width: 899px)" srcSet={mobileMap} />

// //                 <Box
// //                     component="img"
// //                     src={desktopMap}
// //                     alt="Logistics and shipping routes between Oman and India"
// //                     loading="lazy"
// //                     sx={{
// //                         display: "block",
// //                         width: "100%",
// //                         height: {
// //                             xs: "auto",
// //                             md: 500,
// //                         },
// //                         objectFit: {
// //                             xs: "cover",
// //                             md: "contain",
// //                         },
// //                     }}
// //                 />
// //             </Box>

// //         </Box>
// //     );
// // };

// // export default LogisticsShippingSection;

// import { useState } from "react";

// import Box from "@mui/material/Box";

// import desktopMap from "../../assets/images/map_dv.webp";
// import mobileMap from "../../assets/images/map_mv.webp";

// /*
// |--------------------------------------------------------------------------
// | MAP COORDINATE SYSTEM
// |--------------------------------------------------------------------------
// |
// | Desktop image ratio is approximately:
// | 2048 x 723
// |
// | SVG uses the same viewBox so the paths line up with the image.
// |
// */

// const INDIA = {
//     x: 1520,
//     y: 225,
// };

// /*
// |--------------------------------------------------------------------------
// | PORT DATA
// |--------------------------------------------------------------------------
// |
// | markerLeft / markerTop:
// | Used for clickable hotspot positioning.
// |
// | x / y:
// | Used as the starting point of the SVG route.
// |
// | path:
// | Curved shipping route from that port to India.
// |
// */

// const ports = [
//     {
//         id: "musandam",
//         name: "Musandam",

//         markerLeft: "27.8%",
//         markerTop: "17%",

//         x: 570,
//         y: 125,

//         path: `
//             M 570 125
//             C 820 35,
//               1250 65,
//               1520 225
//         `,
//     },

//     {
//         id: "sohar",
//         name: "Sohar",

//         markerLeft: "38.9%",
//         markerTop: "43.7%",

//         x: 795,
//         y: 315,

//         path: `
//             M 795 315
//             C 1020 210,
//               1300 150,
//               1520 225
//         `,
//     },

//     {
//         id: "duqm",
//         name: "Duqm",

//         markerLeft: "28.8%",
//         markerTop: "65.5%",

//         x: 590,
//         y: 475,

//         path: `
//             M 590 475
//             C 850 570,
//               1230 430,
//               1520 225
//         `,
//     },

//     {
//         id: "salalah",
//         name: "Salalah",

//         markerLeft: "13.5%",
//         markerTop: "86.5%",

//         x: 275,
//         y: 630,

//         path: `
//             M 275 630
//             C 720 760,
//               1210 520,
//               1520 225
//         `,
//     },
// ];

// /*
// |--------------------------------------------------------------------------
// | SHIP SVG
// |--------------------------------------------------------------------------
// |
// | Pure SVG ship, so no extra image/icon dependency is required.
// |
// */

// const ShipIcon = () => {
//     return (
//         <g
//             transform="translate(-28 -19) scale(0.8)"
//             style={{
//                 filter: "drop-shadow(0px 3px 3px rgba(0, 70, 15, 0.18))",
//             }}
//         >
//             {/* Ship body */}
//             <path
//                 d="
//                     M4 26
//                     L10 37
//                     C15 44 49 44 57 37
//                     L63 26
//                     Z
//                 "
//                 fill="#075A12"
//             />

//             {/* Upper deck */}
//             <rect
//                 x="21"
//                 y="15"
//                 width="29"
//                 height="11"
//                 rx="1"
//                 fill="#075A12"
//             />

//             {/* Containers */}
//             <rect x="9" y="17" width="10" height="7" fill="#075A12" />
//             <rect x="20" y="7" width="10" height="8" fill="#075A12" />
//             <rect x="32" y="7" width="10" height="8" fill="#075A12" />

//             {/* Cabin */}
//             <rect
//                 x="44"
//                 y="9"
//                 width="9"
//                 height="17"
//                 rx="1"
//                 fill="#075A12"
//             />

//             {/* Chimney */}
//             <rect
//                 x="47"
//                 y="3"
//                 width="4"
//                 height="7"
//                 rx="1"
//                 fill="#075A12"
//             />

//             {/* Water */}
//             <path
//                 d="
//                     M7 48
//                     C12 44 17 44 22 48
//                     C27 52 32 52 37 48
//                     C42 44 47 44 52 48
//                     C57 52 62 52 67 48
//                 "
//                 fill="none"
//                 stroke="#075A12"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//             />
//         </g>
//     );
// };

// const LogisticsShippingSection = () => {
//     const [activePort, setActivePort] = useState("salalah");

//     const selectedPort = ports.find(
//         (port) => port.id === activePort
//     );

//     const handlePortClick = (portId) => {
//         /*
//          * Setting null first allows clicking the same marker again
//          * to restart the animation.
//          */
//         if (activePort === portId) {
//             setActivePort(null);

//             requestAnimationFrame(() => {
//                 requestAnimationFrame(() => {
//                     setActivePort(portId);
//                 });
//             });

//             return;
//         }

//         setActivePort(portId);
//     };

//     return (
//         <Box
//             component="section"
//             sx={{
//                 width: "100%",
//                 overflow: "hidden",
//             }}
//         >
//             {/* ==========================================
//                 INTERACTIVE MAP
//             ========================================== */}

//             <Box
//                 sx={{
//                     position: "relative",
//                     width: "100%",
//                     overflow: "hidden",
//                     lineHeight: 0,
//                     userSelect: "none",
//                 }}
//             >
//                 {/* MAP BACKGROUND */}

//                 <Box
//                     component="picture"
//                     sx={{
//                         display: "block",
//                         width: "100%",
//                         lineHeight: 0,
//                     }}
//                 >
//                     <source
//                         media="(max-width: 899px)"
//                         srcSet={mobileMap}
//                     />

//                     <Box
//                         component="img"
//                         src={desktopMap}
//                         alt="Logistics and shipping routes between Oman and India"
//                         draggable={false}
//                         sx={{
//                             display: "block",

//                             width: "100%",
//                             height: {
//                                 xs: "auto",
//                                 md: "auto",
//                             },

//                             objectFit: "contain",
//                         }}
//                     />
//                 </Box>

//                 {/* ==========================================
//                     SVG ROUTE OVERLAY
//                 ========================================== */}

//                 <Box
//                     component="svg"
//                     viewBox="0 0 2048 723"
//                     preserveAspectRatio="xMidYMid meet"
//                     sx={{
//                         position: "absolute",
//                         inset: 0,

//                         width: "100%",
//                         height: "100%",

//                         overflow: "visible",

//                         pointerEvents: "none",

//                         zIndex: 2,
//                     }}
//                 >
//                     {selectedPort && (
//                         <g key={selectedPort.id}>

//                             {/* ===========================
//                                 ROUTE REVEAL MASK
//                             =========================== */}

//                             <defs>
//                                 <mask id="routeRevealMask">

//                                     <path
//                                         d={selectedPort.path}
//                                         fill="none"
//                                         stroke="#FFFFFF"
//                                         strokeWidth="22"
//                                         strokeLinecap="round"
//                                         pathLength="1"
//                                         strokeDasharray="1"
//                                         strokeDashoffset="1"
//                                     >
//                                         <animate
//                                             attributeName="stroke-dashoffset"
//                                             from="1"
//                                             to="0"
//                                             dur="1.7s"
//                                             fill="freeze"
//                                             calcMode="spline"
//                                             keySplines="0.22 1 0.36 1"
//                                         />
//                                     </path>

//                                 </mask>
//                             </defs>

//                             {/* ===========================
//                                 CURVED DOTTED LINE
//                             =========================== */}

//                             <path
//                                 d={selectedPort.path}
//                                 fill="none"

//                                 stroke="#075A12"

//                                 strokeWidth="3"

//                                 strokeDasharray="9 13"

//                                 strokeLinecap="round"

//                                 mask="url(#routeRevealMask)"

//                                 opacity="0.95"
//                             />

//                             {/* subtle secondary path */}
//                             <path
//                                 d={selectedPort.path}
//                                 fill="none"

//                                 stroke="#075A12"

//                                 strokeWidth="1.3"

//                                 strokeDasharray="3 18"

//                                 opacity="0.28"
//                             />

//                             {/* ===========================
//                                 START POINT PULSE
//                             =========================== */}

//                             <circle
//                                 cx={selectedPort.x}
//                                 cy={selectedPort.y}
//                                 r="12"
//                                 fill="none"
//                                 stroke="#075A12"
//                                 strokeWidth="3"
//                             >
//                                 <animate
//                                     attributeName="r"
//                                     values="10;25;10"
//                                     dur="1.8s"
//                                     repeatCount="indefinite"
//                                 />

//                                 <animate
//                                     attributeName="opacity"
//                                     values="0.8;0;0.8"
//                                     dur="1.8s"
//                                     repeatCount="indefinite"
//                                 />
//                             </circle>

//                             {/* ===========================
//                                 INDIA DESTINATION PULSE
//                             =========================== */}

//                             <circle
//                                 cx={INDIA.x}
//                                 cy={INDIA.y}
//                                 r="10"
//                                 fill="none"
//                                 stroke="#075A12"
//                                 strokeWidth="2.5"
//                             >
//                                 <animate
//                                     attributeName="r"
//                                     values="8;20;8"
//                                     dur="2s"
//                                     repeatCount="indefinite"
//                                 />

//                                 <animate
//                                     attributeName="opacity"
//                                     values="0.7;0;0.7"
//                                     dur="2s"
//                                     repeatCount="indefinite"
//                                 />
//                             </circle>

//                             {/* ===========================
//                                 MOVING SHIP
//                             =========================== */}

//                             <g>
//                                 <ShipIcon />

//                                 <animateMotion
//                                     path={selectedPort.path}
//                                     dur="5s"
//                                     begin="0.45s"
//                                     repeatCount="indefinite"
//                                     rotate="auto"
//                                     calcMode="spline"
//                                     keyTimes="0;1"
//                                     keySplines="0.4 0 0.2 1"
//                                 />
//                             </g>

//                         </g>
//                     )}
//                 </Box>

//                 {/* ==========================================
//                     CLICKABLE PORT MARKERS
//                 ========================================== */}

//                 {ports.map((port) => {
//                     const isActive =
//                         activePort === port.id;

//                     return (
//                         <Box
//                             key={port.id}

//                             component="button"

//                             type="button"

//                             aria-label={`Show shipping route from ${port.name} to India`}

//                             onClick={() =>
//                                 handlePortClick(port.id)
//                             }

//                             sx={{
//                                 position: "absolute",

//                                 left: port.markerLeft,
//                                 top: port.markerTop,

//                                 transform:
//                                     "translate(-50%, -50%)",

//                                 width: {
//                                     xs: 42,
//                                     sm: 50,
//                                     md: 58,
//                                 },

//                                 height: {
//                                     xs: 52,
//                                     sm: 60,
//                                     md: 68,
//                                 },

//                                 border: "none",
//                                 padding: 0,
//                                 margin: 0,

//                                 borderRadius: "50%",

//                                 backgroundColor:
//                                     "transparent",

//                                 cursor: "pointer",

//                                 zIndex: 5,

//                                 outline: "none",

//                                 WebkitTapHighlightColor:
//                                     "transparent",

//                                 "&::before": {
//                                     content: '""',

//                                     position: "absolute",

//                                     left: "50%",
//                                     top: "50%",

//                                     width: {
//                                         xs: 35,
//                                         md: 44,
//                                     },

//                                     height: {
//                                         xs: 35,
//                                         md: 44,
//                                     },

//                                     borderRadius: "50%",

//                                     border: isActive
//                                         ? "2px solid #075A12"
//                                         : "2px solid transparent",

//                                     transform:
//                                         "translate(-50%, -50%)",

//                                     opacity: isActive
//                                         ? 1
//                                         : 0,

//                                     transition:
//                                         "opacity 0.25s ease, transform 0.25s ease",

//                                     animation: isActive
//                                         ? "markerPulse 1.7s infinite"
//                                         : "none",
//                                 },

//                                 "&:hover::before": {
//                                     opacity: 1,

//                                     border:
//                                         "2px solid rgba(7,90,18,0.55)",

//                                     transform:
//                                         "translate(-50%, -50%) scale(1.15)",
//                                 },

//                                 "@keyframes markerPulse": {
//                                     "0%": {
//                                         boxShadow:
//                                             "0 0 0 0 rgba(7,90,18,0.28)",
//                                     },

//                                     "70%": {
//                                         boxShadow:
//                                             "0 0 0 14px rgba(7,90,18,0)",
//                                     },

//                                     "100%": {
//                                         boxShadow:
//                                             "0 0 0 0 rgba(7,90,18,0)",
//                                     },
//                                 },
//                             }}
//                         />
//                     );
//                 })}

//                 {/* ==========================================
//                     OPTIONAL ACTIVE ROUTE LABEL
//                 ========================================== */}

//                 {selectedPort && (
//                     <Box
//                         sx={{
//                             position: "absolute",

//                             left: "50%",
//                             bottom: {
//                                 xs: 8,
//                                 md: 18,
//                             },

//                             transform:
//                                 "translateX(-50%)",

//                             zIndex: 6,

//                             px: {
//                                 xs: 1.5,
//                                 md: 2,
//                             },

//                             py: {
//                                 xs: 0.6,
//                                 md: 0.8,
//                             },

//                             backgroundColor:
//                                 "rgba(255,255,255,0.92)",

//                             border:
//                                 "1px solid rgba(7,90,18,0.12)",

//                             borderRadius: "100px",

//                             boxShadow:
//                                 "0 5px 20px rgba(0,60,10,0.08)",

//                             lineHeight: 1,

//                             backdropFilter: "blur(5px)",
//                         }}
//                     >
//                         <Box
//                             component="span"
//                             sx={{
//                                 fontFamily:
//                                     '"IBM Plex Sans", sans-serif',

//                                 color: "#075A12",

//                                 fontWeight: 600,

//                                 fontSize: {
//                                     xs: 10,
//                                     sm: 12,
//                                     md: 14,
//                                 },

//                                 lineHeight: 1,

//                                 whiteSpace: "nowrap",
//                             }}
//                         >
//                             {selectedPort.name} → India
//                         </Box>
//                     </Box>
//                 )}

//             </Box>
//         </Box>
//     );
// };

// export default LogisticsShippingSection;


import { useState } from "react";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import desktopMap from "../../assets/images/map_dv.webp";
import mobileMap from "../../assets/images/map_mv.webp";

/* =========================================================
   DESKTOP CONFIG
========================================================= */

const desktopIndia = {
    x: 1520,
    y: 225,
};

const desktopPorts = [
    {
        id: "musandam",
        name: "Musandam",

        markerLeft: "27.8%",
        markerTop: "17%",

        x: 570,
        y: 125,

        path: `
            M 570 125
            C 820 35,
              1250 65,
              1520 225
        `,
    },

    {
        id: "sohar",
        name: "Sohar",

        markerLeft: "38.9%",
        markerTop: "43.7%",

        x: 795,
        y: 315,

        path: `
            M 795 315
            C 1020 210,
              1300 150,
              1520 225
        `,
    },

    {
        id: "duqm",
        name: "Duqm",

        markerLeft: "28.8%",
        markerTop: "65.5%",

        x: 590,
        y: 475,

        path: `
            M 590 475
            C 850 570,
              1230 430,
              1520 225
        `,
    },

    {
        id: "salalah",
        name: "Salalah",

        markerLeft: "13.5%",
        markerTop: "86.5%",

        x: 275,
        y: 630,

        path: `
            M 275 630
            C 720 760,
              1210 520,
              1520 225
        `,
    },
];

/* =========================================================
   MOBILE CONFIG
   Based on your mobile layout
   ViewBox = 936 x 812
========================================================= */

const mobileIndia = {
    x: 660,
    y: 475,
};

const mobilePorts = [
    {
        id: "musandam",
        name: "Musandam",

        markerLeft: "33%",
        markerTop: "13%",

        x: 310,
        y: 105,

        path: `
            M 310 105
            C 470 80,
              620 210,
              660 475
        `,
    },

    {
        id: "sohar",
        name: "Sohar",

        markerLeft: "43.5%",
        markerTop: "25.5%",

        x: 407,
        y: 205,

        path: `
            M 407 205
            C 520 240,
              620 340,
              660 475
        `,
    },

    {
        id: "duqm",
        name: "Duqm",

        markerLeft: "28.2%",
        markerTop: "43%",

        x: 264,
        y: 350,

        path: `
            M 264 350
            C 390 430,
              530 500,
              660 475
        `,
    },

    {
        id: "salalah",
        name: "Salalah",

        markerLeft: "11.8%",
        markerTop: "53.5%",

        x: 110,
        y: 435,

        path: `
            M 110 435
            C 280 560,
              500 560,
              660 475
        `,
    },
];

/* =========================================================
   SHIP ICON
========================================================= */

const ShipIcon = ({ isMobile }) => {
    return (
        <g
            transform={
                isMobile
                    ? "translate(-20 -14) scale(0.55)"
                    : "translate(-28 -19) scale(0.8)"
            }
            style={{
                filter:
                    "drop-shadow(0px 3px 3px rgba(0, 70, 15, 0.18))",
            }}
        >
            <path
                d="
                    M4 26
                    L10 37
                    C15 44 49 44 57 37
                    L63 26
                    Z
                "
                fill="#075A12"
            />

            <rect
                x="21"
                y="15"
                width="29"
                height="11"
                rx="1"
                fill="#075A12"
            />

            <rect
                x="9"
                y="17"
                width="10"
                height="7"
                fill="#075A12"
            />

            <rect
                x="20"
                y="7"
                width="10"
                height="8"
                fill="#075A12"
            />

            <rect
                x="32"
                y="7"
                width="10"
                height="8"
                fill="#075A12"
            />

            <rect
                x="44"
                y="9"
                width="9"
                height="17"
                rx="1"
                fill="#075A12"
            />

            <rect
                x="47"
                y="3"
                width="4"
                height="7"
                rx="1"
                fill="#075A12"
            />

            <path
                d="
                    M7 48
                    C12 44 17 44 22 48
                    C27 52 32 52 37 48
                    C42 44 47 44 52 48
                    C57 52 62 52 67 48
                "
                fill="none"
                stroke="#075A12"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </g>
    );
};

/* =========================================================
   COMPONENT
========================================================= */

const LogisticsShippingSection = () => {
    const isMobile = useMediaQuery("(max-width:899px)");

    const [activePort, setActivePort] =
        useState("salalah");

    const ports = isMobile
        ? mobilePorts
        : desktopPorts;

    const INDIA = isMobile
        ? mobileIndia
        : desktopIndia;

    const selectedPort = ports.find(
        (port) => port.id === activePort
    );

    const handlePortClick = (portId) => {
        if (activePort === portId) {
            setActivePort(null);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setActivePort(portId);
                });
            });

            return;
        }

        setActivePort(portId);
    };

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                    lineHeight: 0,
                    userSelect: "none",
                }}
            >
                {/* =====================================
                    BACKGROUND IMAGE
                ===================================== */}

                <Box
                    component="picture"
                    sx={{
                        display: "block",
                        width: "100%",
                        lineHeight: 0,
                    }}
                >
                    <source
                        media="(max-width: 899px)"
                        srcSet={mobileMap}
                    />

                    <Box
                        component="img"
                        src={desktopMap}
                        alt="Logistics and shipping routes between Oman and India"
                        draggable={false}
                        sx={{
                            display: "block",
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {/* =====================================
                    SVG ROUTE
                ===================================== */}

                <Box
                    component="svg"
                    viewBox={
                        isMobile
                            ? "0 0 936 812"
                            : "0 0 2048 723"
                    }
                    preserveAspectRatio="xMidYMid meet"
                    sx={{
                        position: "absolute",
                        inset: 0,

                        width: "100%",
                        height: "100%",

                        pointerEvents: "none",

                        zIndex: 2,
                    }}
                >
                    {selectedPort && (
                        <g
                            key={`${selectedPort.id}-${isMobile}`}
                        >
                            <defs>
                                <mask
                                    id={
                                        isMobile
                                            ? "routeRevealMaskMobile"
                                            : "routeRevealMaskDesktop"
                                    }
                                >
                                    <path
                                        d={selectedPort.path}
                                        fill="none"
                                        stroke="#FFFFFF"
                                        strokeWidth={
                                            isMobile
                                                ? 14
                                                : 22
                                        }
                                        strokeLinecap="round"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset="1"
                                    >
                                        <animate
                                            attributeName="stroke-dashoffset"
                                            from="1"
                                            to="0"
                                            dur="1.7s"
                                            fill="freeze"
                                            calcMode="spline"
                                            keySplines="0.22 1 0.36 1"
                                        />
                                    </path>
                                </mask>
                            </defs>

                            {/* MAIN DOTTED LINE */}

                            <path
                                d={selectedPort.path}
                                fill="none"
                                stroke="#075A12"

                                strokeWidth={
                                    isMobile
                                        ? 2
                                        : 3
                                }

                                strokeDasharray={
                                    isMobile
                                        ? "6 9"
                                        : "9 13"
                                }

                                strokeLinecap="round"

                                mask={`url(#${isMobile
                                    ? "routeRevealMaskMobile"
                                    : "routeRevealMaskDesktop"
                                    })`}

                                opacity="0.95"
                            />

                            {/* SECONDARY SUBTLE LINE */}

                            <path
                                d={selectedPort.path}
                                fill="none"
                                stroke="#075A12"

                                strokeWidth={
                                    isMobile
                                        ? 0.8
                                        : 1.3
                                }

                                strokeDasharray={
                                    isMobile
                                        ? "2 12"
                                        : "3 18"
                                }

                                opacity="0.25"
                            />

                            {/* START PULSE */}

                            <circle
                                cx={selectedPort.x}
                                cy={selectedPort.y}
                                r={
                                    isMobile
                                        ? 6
                                        : 12
                                }
                                fill="none"
                                stroke="#075A12"

                                strokeWidth={
                                    isMobile
                                        ? 1.5
                                        : 3
                                }
                            >
                                <animate
                                    attributeName="r"
                                    values={
                                        isMobile
                                            ? "5;12;5"
                                            : "10;25;10"
                                    }
                                    dur="1.8s"
                                    repeatCount="indefinite"
                                />

                                <animate
                                    attributeName="opacity"
                                    values="0.8;0;0.8"
                                    dur="1.8s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* INDIA PULSE */}

                            <circle
                                cx={INDIA.x}
                                cy={INDIA.y}

                                r={
                                    isMobile
                                        ? 5
                                        : 10
                                }

                                fill="none"
                                stroke="#075A12"

                                strokeWidth={
                                    isMobile
                                        ? 1.5
                                        : 2.5
                                }
                            >
                                <animate
                                    attributeName="r"
                                    values={
                                        isMobile
                                            ? "5;11;5"
                                            : "8;20;8"
                                    }
                                    dur="2s"
                                    repeatCount="indefinite"
                                />

                                <animate
                                    attributeName="opacity"
                                    values="0.7;0;0.7"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {/* MOVING SHIP */}

                            <g>
                                <ShipIcon
                                    isMobile={
                                        isMobile
                                    }
                                />

                                <animateMotion
                                    path={selectedPort.path}

                                    dur={
                                        isMobile
                                            ? "4.5s"
                                            : "5s"
                                    }

                                    begin="0.45s"

                                    repeatCount="indefinite"

                                    rotate="auto"

                                    calcMode="spline"

                                    keyTimes="0;1"

                                    keySplines="0.4 0 0.2 1"
                                />
                            </g>
                        </g>
                    )}
                </Box>

                {/* =====================================
                    CLICKABLE HOTSPOTS
                ===================================== */}

                {ports.map((port) => {
                    const isActive =
                        activePort === port.id;

                    return (
                        <Box
                            key={port.id}

                            component="button"

                            type="button"

                            aria-label={`Show shipping route from ${port.name} to India`}

                            onClick={() =>
                                handlePortClick(
                                    port.id
                                )
                            }

                            sx={{
                                position:
                                    "absolute",

                                left:
                                    port.markerLeft,

                                top:
                                    port.markerTop,

                                transform:
                                    "translate(-50%, -50%)",

                                width: {
                                    xs: 34,
                                    sm: 42,
                                    md: 58,
                                },

                                height: {
                                    xs: 42,
                                    sm: 50,
                                    md: 68,
                                },

                                border:
                                    "none",

                                padding: 0,
                                margin: 0,

                                borderRadius:
                                    "50%",

                                backgroundColor:
                                    "transparent",

                                cursor:
                                    "pointer",

                                zIndex: 5,

                                outline:
                                    "none",

                                WebkitTapHighlightColor:
                                    "transparent",

                                "&::before": {
                                    content:
                                        '""',

                                    position:
                                        "absolute",

                                    left:
                                        "50%",

                                    top:
                                        "50%",

                                    width: {
                                        xs: 24,
                                        sm: 30,
                                        md: 44,
                                    },

                                    height: {
                                        xs: 24,
                                        sm: 30,
                                        md: 44,
                                    },

                                    borderRadius:
                                        "50%",

                                    border:
                                        isActive
                                            ? {
                                                xs: "1.5px solid #075A12",
                                                md: "2px solid #075A12",
                                            }
                                            : "2px solid transparent",

                                    transform:
                                        "translate(-50%, -50%)",

                                    opacity:
                                        isActive
                                            ? 1
                                            : 0,

                                    transition:
                                        "opacity 0.25s ease, transform 0.25s ease",

                                    animation:
                                        isActive
                                            ? "markerPulse 1.7s infinite"
                                            : "none",
                                },

                                "&:hover::before":
                                {
                                    opacity: 1,

                                    border:
                                        "2px solid rgba(7,90,18,0.55)",
                                },

                                "@keyframes markerPulse":
                                {
                                    "0%": {
                                        boxShadow:
                                            "0 0 0 0 rgba(7,90,18,0.25)",
                                    },

                                    "70%": {
                                        boxShadow:
                                        {
                                            xs: "0 0 0 7px rgba(7,90,18,0)",
                                            md: "0 0 0 14px rgba(7,90,18,0)",
                                        },
                                    },

                                    "100%":
                                    {
                                        boxShadow:
                                            "0 0 0 0 rgba(7,90,18,0)",
                                    },
                                },
                            }}
                        />
                    );
                })}

                {/* =====================================
                    ACTIVE ROUTE LABEL
                ===================================== */}

                {selectedPort && (
                    <Box
                        sx={{
                            position:
                                "absolute",

                            left: "50%",

                            bottom: {
                                xs: 12,
                                sm: 14,
                                md: 18,
                            },

                            transform:
                                "translateX(-50%)",

                            zIndex: 6,

                            px: {
                                xs: 1.5,
                                md: 2,
                            },

                            py: {
                                xs: 0.7,
                                md: 0.8,
                            },

                            backgroundColor:
                                "rgba(255,255,255,0.94)",

                            border:
                                "1px solid rgba(7,90,18,0.12)",

                            borderRadius:
                                "100px",

                            boxShadow:
                                "0 5px 20px rgba(0,60,10,0.08)",

                            lineHeight: 1,

                            backdropFilter:
                                "blur(5px)",
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                fontFamily:
                                    '"IBM Plex Sans", sans-serif',

                                color:
                                    "#075A12",

                                fontWeight:
                                    600,

                                fontSize: {
                                    xs: 11,
                                    sm: 12,
                                    md: 14,
                                },

                                whiteSpace:
                                    "nowrap",
                            }}
                        >
                            {
                                selectedPort.name
                            }{" "}
                            → India
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default LogisticsShippingSection;