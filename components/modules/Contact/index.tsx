"use client";
import { gilroyMedium, gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import Footer from "../Footer";
import GetinTouch from "../GetinTouch";
import Layout from "@/shared/Layout";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions";

const Contact = () => {
  return (
    <Layout currentPage="Contact">
      <GetinTouch />
      <FrequentlyAskedQuestions />
    </Layout>
  );
};

export default Contact;
