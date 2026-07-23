// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import Box from "@mui/material/Box";
// import HeroSlider from "../../components/common/HeroSlider";
// import BusinessOfferingsSection from "../../components/homepage/BusinessOfferingsSection";
// import LogisticsShippingSection from "../../components/homepage/LogisticsShippingSection";
// import WhatMakesUsDifferents from "../../components/homepage/WhatMakesUsDifferent";
// import WhatAreWeBuiltOn from "../../components/homepage/WhatAreWeBuiltOn";
// import OurBusinessesSection from "../../components/homepage/OurBusinessesSection";


// export default function HomePageV2() {
//     useEffect(() => {
//         const sectionId = location.state?.scrollTo;

//         if (!sectionId) return;

//         const timeoutId = window.setTimeout(() => {
//             const section = document.getElementById(sectionId);

//             if (section) {
//                 section.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }

//             navigate(location.pathname, {
//                 replace: true,
//                 state: null,
//             });
//         }, 150);

//         return () => window.clearTimeout(timeoutId);
//     }, [location.pathname, location.state, navigate]);

//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 zIndex: 0,
//                 isolation: "isolate",
//                 width: "100%",
//                 overflowX: "clip",
//                 overflowY: "visible",
//                 "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     zIndex: -1,
//                     inset: 0,
//                     pointerEvents: "none",
//                     backgroundImage:
//                         "radial-gradient(circle at left center, rgba(145, 153, 173, 0.3) 0 1.25px, transparent 1.55px)",
//                     backgroundSize: {
//                         xs: "calc((100% - 40px) / 4) 8px",
//                         md: "calc((100% - 56px) / 4) 8px",
//                     },
//                     backgroundPosition: {
//                         xs: "20px 0",
//                         md: "28px 0",
//                     },
//                     backgroundRepeat: "repeat",
//                 },
//             }}
//         >

//             <HeroSlider />
//             <BusinessOfferingsSection />
//             <LogisticsShippingSection />
//             <WhatMakesUsDifferents />
//             <WhatAreWeBuiltOn />
//             <OurBusinessesSection />


//         </Box>
//     );
// }

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import HeroSlider from "../../components/common/HeroSlider";
import BusinessOfferingsSection from "../../components/homepage/BusinessOfferingsSection";
import LogisticsShippingSection from "../../components/homepage/LogisticsShippingSection";
import WhatMakesUsDifferents from "../../components/homepage/WhatMakesUsDifferent";
import WhatAreWeBuiltOn from "../../components/homepage/WhatAreWeBuiltOn";
import OurBusinessesSection from "../../components/homepage/OurBusinessesSection";

export default function HomePageV2() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const sectionId = location.state?.scrollTo;

        if (!sectionId) return;

        const timeoutId = window.setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            navigate(location.pathname, {
                replace: true,
                state: null,
            });
        }, 150);

        return () => window.clearTimeout(timeoutId);
    }, [location.pathname, location.state, navigate]);

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 0,
                isolation: "isolate",
                width: "100%",
                overflowX: "clip",
                overflowY: "visible",

                "&::after": {
                    content: '""',
                    position: "absolute",
                    zIndex: -1,
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage:
                        "radial-gradient(circle at left center, rgba(145, 153, 173, 0.3) 0 1.25px, transparent 1.55px)",
                    backgroundSize: {
                        xs: "calc((100% - 40px) / 4) 8px",
                        md: "calc((100% - 56px) / 4) 8px",
                    },
                    backgroundPosition: {
                        xs: "20px 0",
                        md: "28px 0",
                    },
                    backgroundRepeat: "repeat",
                },
            }}
        >
            <Box id="home">
                <HeroSlider />
            </Box>

            <BusinessOfferingsSection />
            <LogisticsShippingSection />
            <WhatMakesUsDifferents />
            <WhatAreWeBuiltOn />

            <OurBusinessesSection />
        </Box>
    );
}
