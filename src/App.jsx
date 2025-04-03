import React, { useState } from "react";
import { Button } from "./components/ui/button";

const flagEmojis = {
  en: "🇺🇸",
  es: "🇪🇸",
  pt: "🇧🇷",
  fr: "🇫🇷",
  it: "🇮🇹"
};

// ...translations object remains as is...

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 relative font-sans">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {Object.keys(flagEmojis).map((code) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`px-3 py-1 rounded text-sm font-medium shadow-sm transition flex items-center gap-1 ${
              lang === code ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            <span>{flagEmojis[code]}</span>
            <span>{code.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/14047406571"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white opacity-50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 mb-4 font-serif">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">DocTranslate</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 mb-6">{t.hero}</p>
          <Button
            onClick={() => {
              const formSection = document.getElementById("quote-form");
              if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg px-8 py-4 rounded-full shadow-md"
          >
            {t.quoteTitle}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">{t.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, i) => (
            <div key={i} className="border rounded-2xl p-6 shadow bg-white">
              <h3 className="text-xl font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Language Pairs */}
      <section className="py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold text-center mb-6">{t.languagesTitle}</h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-4">{t.languagesNote}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Spanish", "Portuguese", "French", "Italian", "English"].map((lang, i) => (
            <span key={i} className="bg-white border rounded-xl px-4 py-2 shadow-sm">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">{t.processTitle}</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.process.map((step, i) => (
            <div key={i} className="p-6 rounded-xl shadow bg-blue-50">
              <div className="text-4xl font-bold text-blue-700 mb-2">{i === 3 ? "⚡" : i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <p className="text-center text-lg text-gray-700">{t.about}</p>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="bg-blue-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">{t.quoteTitle}</h2>
        <form
          className="max-w-xl mx-auto grid gap-4 bg-white p-8 rounded-xl shadow"
          action="https://formsubmit.co/studiolegalsantos@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_next" value="https://doctranslate.pro/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <input name="name" type="text" placeholder="Name" className="p-3 border rounded-xl" required />
          <input name="email" type="email" placeholder="Email" className="p-3 border rounded-xl" required />
          <input name="language" type="text" placeholder="Language pair (e.g., Spanish to English)" className="p-3 border rounded-xl" required />
          <textarea name="notes" placeholder="Notes (mention if urgent)" rows="4" className="p-3 border rounded-xl"></textarea>
          <label className="text-sm text-gray-600">Upload your document:</label>
          <input name="attachment" type="file" className="p-3 border rounded-xl" required />
          <Button type="submit" className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700">Submit</Button>
        </form>

        {/* Payment Info */}
        <div className="text-center text-sm text-gray-600 mt-10">
          <h3 className="text-lg font-semibold mb-2">{t.paymentTitle}</h3>
          <p>{t.paymentMethods}</p>
          <p className="mt-2 italic text-gray-500">{t.confirmationNote}</p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 italic">{t.spanishNotice}</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 DocTranslate. All rights reserved.
      </footer>
    </div>
  );
}
