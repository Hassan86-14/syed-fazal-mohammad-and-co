import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { OfficeInfo } from "./OfficeInfo";
import { HeroSection } from "./HeroSection";
import { BranchOffices } from "./BranchOffice";
import { offices } from "../data/offices";
import { OwnerInfo } from "./OwnerInfo";
import { Footer } from "./Footer";
import { Services } from "./Services";
import { ContactInfo } from "./ContactInfo";
import { AboutUsInfo } from "./AboutUsInfo";
import { NotFound } from "./NotFound";

const CompanyPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      <Routes>
        {/* Page 1: Home - Company Info */}
        <Route
          path="/"
          element={
            <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto w-full">
                <HeroSection />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                  {offices.map((office, idx) => (
                    <OfficeInfo key={idx} {...office} />
                  ))}
                </div>
                <BranchOffices />
                <OwnerInfo />
              </div>
            </div>
          }
        />

        {/* Page 2: Services & Clients */}
        <Route path="/services" element={<Services />} />

        {/* Page 3: Contact & About */}
        <Route
          path="/contact"
          element={
            <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen">
              <div className="max-w-7xl mx-auto py-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <ContactInfo />
                  <AboutUsInfo />
                </div>
              </div>
            </div>
          }
        />
        {/* 404 - Catch all invalid routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default CompanyPortfolio;
