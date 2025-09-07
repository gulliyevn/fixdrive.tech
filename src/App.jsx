import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import Features from '@/components/Features';
import ForDrivers from '@/components/ForDrivers';
import ForCustomers from '@/components/ForCustomers';
import Packages from '@/components/Packages';
import Demo from '@/components/Demo';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { TooltipProvider } from "@/components/ui/tooltip";
import SmoothScroll from '@/components/SmoothScroll';

function App() {
    return (
        <ErrorBoundary>
            <TooltipProvider>
                <Helmet>
                <title>FixDrive - Your personal driver. Simplified.</title>
                <meta name="description" content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life." />
                <meta name="keywords" content="personal driver, ride sharing, transportation, reliable driver, fixed schedule, safe rides" />
                <meta name="author" content="Axivion LLC" />
                <meta name="robots" content="index, follow" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="FixDrive - Your personal driver. Simplified." />
                <meta property="og:description" content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life." />
                <meta property="og:url" content="https://fixdrive.tech" />
                <meta property="og:image" content="/assets/Logo.png" />
                <meta property="og:site_name" content="FixDrive" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FixDrive - Your personal driver. Simplified." />
                <meta name="twitter:description" content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life." />
                <meta name="twitter:image" content="/assets/Logo.png" />
                
                {/* Additional SEO */}
                <link rel="canonical" href="https://fixdrive.tech" />
                <meta name="theme-color" content="#3b82f6" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <SmoothScroll />
                <Navigation />
                <main role="main" aria-label="Main content">
                    <Hero />
                    <About />
                    <MissionVision />
                    <Features />
                    <section id="for-drivers" className="py-16 md:py-24 bg-secondary" aria-label="For drivers and customers">
                        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
                            <ForDrivers />
                            <ForCustomers />
                        </div>
                    </section>
                    <Packages />
                    <Demo />
                    <Testimonials />
                    <CtaBanner />
                    <Newsletter />
                </main>
                <Footer />
                <Toaster />
            </div>
            </TooltipProvider>
        </ErrorBoundary>
    );
}

export default App;