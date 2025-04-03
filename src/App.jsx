import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "./components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const flagEmojis = {
  en: "🇺🇸",
  es: "🇪🇸",
  pt: "🇧🇷",
  fr: "🇫🇷",
  it: "🇮🇹"
};

const logoUrl = "/logo.png";
const slogan = "Certified translations with elegance & speed.";

// Dummy translations object to avoid crash (replace with your actual data)
const translations = {
  en: {
    hero: "Fast and accurate translations.",
    quoteTitle: "Get a Quote",
    servicesTitle: "Our Services",
    services: ["Service 1", "Service 2", "Service 3"],
    languagesTitle: "Languages We Translate",
    languagesNote: "We translate between major global languages.",
    processTitle: "How It Works",
    process: ["Step 1", "Step 2", "Step 3", "Step 4"],
    about: "We offer professional translation services.",
    paymentTitle: "Payment Methods",
    paymentMethods: "Zelle, PayPal, Remitly",
    confirmationNote: "We will contact you shortly.",
    spanishNotice: "También aceptamos solicitudes en español."
  }
};

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const t = translations[lang];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 relative font-sans">
      <Helmet>
        <title>DocTranslate | Certified Translation Services</title>
        <meta
          name="description"
          content="Professional translation services in Spanish, French, Portuguese, Italian and English. Upload your documents and get a free quote instantly."
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* (Rest of your page remains unchanged) */}

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 DocTranslate. All rights reserved.
      </footer>
    </div>
  );
}
