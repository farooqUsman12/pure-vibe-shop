"use client"
import AboutFounder from "@/components/modules/AboutFounder";
import Banner from "@/components/modules/Banner";
import FeatureProducts from "@/components/modules/FeaturedProducts";
import FeedBack from "@/components/modules/FeedBack";
import FrequentlyAskedQuestions from "@/components/modules/FrequentlyAskedQuestions";
import PartnerBrands from "@/components/modules/PartnerBrands";
import PricingPlan from "@/components/modules/PricingPlan";
import Services from "@/components/modules/Services";
import Layout from "@/shared/Layout";
import React from "react";

const HomePage = () => {
  return (
    <Layout currentPage="Home">
      <Banner />
      <Services />
      <FeatureProducts />
      <AboutFounder />
      <FeedBack />
      <PricingPlan />
      <PartnerBrands />
      <FrequentlyAskedQuestions />
    </Layout>
  );
};

export default HomePage;
