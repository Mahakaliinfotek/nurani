import { Box, Button, Container, Typography } from "@mui/material";

import HeroSection from "../../components/HeroSection";
import TextGrid from "../../components/TextGrid";
import BusinessFocus from "../../components/BusinessFocus";
import MiningStats from "../../components/MiningStats";
import Footer from "../../components/Footer";
import ProductsSection from "../../components/ProductsSection";
import Logistics from "../../components/Logistics";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";
import WhyChooseUs from "../../components/WhyChooseUs";
import Header from "../../layouts/Header";
import HeroSlider from "../../components/common/HeroSlider";
import CompanyStrip from "../../components/common/CompanyStrip";
import PeopleCultureSlider from "../../components/homepage/PeopleCultureSlider";
import VisionSection from "../../components/homepage/VisionSection";
import BusinessesSection from "../../components/homepage/BusinessesSection";
import HistorySection from "../../components/homepage/HistorySection";
import SustainabilitySection from "../../components/homepage/SustainabilitySection";
import MediaCSRSection from "../../components/homepage/MediaCSRSection";


const HomePage = () => {
    return (
        <>

            <Header />
            <HeroSlider />
            {/* <HeroSection /> */}
            {/* <Box sx={{
                px: { md: 10, lg: 10 }

            }}
            > */}
            <TextGrid />
            <BusinessFocus />
            <MiningStats />
            <ProductsSection />
            <Logistics />
            <WhatMakesUsDifferent />
            <WhyChooseUs />

            {/* </Box> */}


            {/* <Footer /> */}


            <CompanyStrip />
            <PeopleCultureSlider />
            <VisionSection />
            <BusinessesSection />
            <HistorySection />
            <SustainabilitySection />
            <MediaCSRSection />
            <CompanyStrip />


        </>
    );
}
export default HomePage;