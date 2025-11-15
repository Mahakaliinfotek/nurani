import { Box, Button, Container, Typography } from "@mui/material";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import TextGrid from "../../components/TextGrid";
import BusinessFocus from "../../components/BusinessFocus";
import MiningStats from "../../components/MiningStats";
import Footer from "../../components/Footer";
import ProductsSection from "../../components/ProductsSection";
import Logistics from "../../components/Logistics";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";
import WhyChooseUs from "../../components/WhyChooseUs";
import EnquiryForm from "../../components/EnquiryForm";

const HomePage = () => {
    return (
        <>
            {/* <Header /> */}
            <HeroSection />
            <Box sx={{
                px: { md: 10, lg: 10 }

            }}
            >
                <TextGrid />
                <BusinessFocus />
                <MiningStats />
                <ProductsSection />
                <Logistics />
                <WhatMakesUsDifferent />
                <WhyChooseUs />
                {/* <EnquiryForm /> */}
            </Box>


            <Footer />


        </>
    );
}
export default HomePage;