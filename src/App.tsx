import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { TooltipProvider } from '@/components/ui/tooltip';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingSpinner from '@/components/LoadingSpinner';
import { initGA } from '@/lib/analytics';
import { initPixels } from '@/lib/pixels';
import NotFound from '@/pages/NotFound'
import { initWebVitals } from '@/lib/webvitals'
import { initSentry } from '@/lib/sentry'

// Lazy load components
const Hero = React.lazy(() => import('@/components/Hero'));
const About = React.lazy(() => import('@/components/About'));
const Features = React.lazy(() => import('@/components/Features'));
const ForDrivers = React.lazy(() => import('@/components/ForDrivers'));
const ForCustomers = React.lazy(() => import('@/components/ForCustomers'));
const Packages = React.lazy(() => import('@/components/Packages'));
const Demo = React.lazy(() => import('@/components/Demo'));
const Testimonials = React.lazy(() => import('@/components/Testimonials'));
const CtaBanner = React.lazy(() => import('@/components/CtaBanner'));
const Newsletter = React.lazy(() => import('@/components/Newsletter'));

// Lazy load pages
const AboutUs = React.lazy(() => import('@/pages/AboutUs'));
const MissionVision = React.lazy(() => import('@/pages/MissionVision'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfUse = React.lazy(() => import('@/pages/TermsOfUse'));

// Home page component
const HomePage: React.FC = () => {
  // Handle hash navigation when coming from other pages
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const sectionId = hash.substring(1);
      // Wait a bit for the page to load, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>FixDrive - Your personal driver. Simplified.</title>
        <meta
          name="description"
          content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life."
        />
        <meta
          name="keywords"
          content="personal driver, ride sharing, transportation, reliable driver, fixed schedule, safe rides"
        />
        <meta name="author" content="Axivion LLC" />
        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="FixDrive" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FixDrive - Your personal driver. Simplified." />
        <meta
          property="og:description"
          content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life."
        />
        <meta property="og:url" content="https://fixdrive.tech" />
        <meta property="og:image" content="/assets/Logo.webp" />
        <meta property="og:site_name" content="FixDrive" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FixDrive - Your personal driver. Simplified." />
        <meta
          name="twitter:description"
          content="FixDrive connects you with trusted drivers on a fixed schedule — reliability, safety and comfort for daily life."
        />
        <meta name="twitter:image" content="/assets/Logo.webp" />

        {/* Sitemap & robots */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index,follow,max-image-preview:large" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://fixdrive.tech" />
        <meta name="theme-color" content="#3b82f6" />
      </Helmet>

      <main id="main" role="main" aria-label="Main content">
        <Suspense
          fallback={
            <div className="py-16">
              <LoadingSpinner />
            </div>
          }
        >
          <Hero />
          <About />
          <Features />
          <section
            id="for-drivers"
            className="py-16 md:py-24 bg-secondary"
            aria-label="For drivers and customers"
          >
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
        </Suspense>
      </main>
    </>
  );
};

function App() {
  // Initialize Analytics and Pixels
  React.useEffect(() => {
    initSentry();
    initGA();
    initPixels();
    initWebVitals();
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <TooltipProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <SmoothScroll />
              <Navigation />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/about"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-16">
                          <LoadingSpinner />
                        </div>
                      }
                    >
                      <AboutUs />
                    </Suspense>
                  }
                />
                <Route
                  path="/mission-vision"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-16">
                          <LoadingSpinner />
                        </div>
                      }
                    >
                      <MissionVision />
                    </Suspense>
                  }
                />
                <Route
                  path="/privacy"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-16">
                          <LoadingSpinner />
                        </div>
                      }
                    >
                      <PrivacyPolicy />
                    </Suspense>
                  }
                />
                <Route
                  path="/terms"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-16">
                          <LoadingSpinner />
                        </div>
                      }
                    >
                      <TermsOfUse />
                    </Suspense>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
              <Toaster />
            </div>
          </Router>
        </TooltipProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
