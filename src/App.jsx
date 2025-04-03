import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 relative font-sans">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
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
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 mb-6">
            Elegant, Certified, and Fast — Translations for Legal, Immigration, Academic, and Business Use.
          </p>
          <Button className="text-lg px-8 py-4 rounded-full shadow-md">Get a Free Quote</Button>
        </div>
      </section>

      {/* Trust Badge */}
      <div className="text-center py-6 bg-blue-50 text-blue-800 font-medium text-lg">
        ⭐ Emergency same-day delivery available. Trusted by professionals worldwide.
      </div>

      {/* Services Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-900 font-serif">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Certified Translations", "Legal & Immigration Documents", "Academic Transcripts & Diplomas", "Business & Financial Documents", "Personal Letters & Forms", "Emergency Translations in Hours"].map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition duration-300">
              <h3 className="text-xl font-medium text-blue-800">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Language Pairs Section */}
      <section className="py-20 px-6 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-blue-900 font-serif">Languages We Translate</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          Translations between Spanish, Portuguese, French, Italian, and English — accurate and elegant.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {["Spanish", "Portuguese", "French", "Italian", "English"].map((lang, i) => (
            <span key={i} className="border border-blue-300 px-4 py-2 rounded-xl shadow-sm bg-white text-blue-900">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-900 font-serif">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            { step: "1", desc: "Upload your document" },
            { step: "2", desc: "We review and send you a free quote" },
            { step: "3", desc: "Pay and receive your translation in 24–48 hours" },
            { step: "⚡", desc: "Need it sooner? Emergency delivery in a few hours available." }
          ].map(({ step, desc }) => (
            <div key={step} className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-md transition duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4 font-mono">{step}</div>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-blue-900 font-serif">Why Choose Us?</h2>
        <p className="text-center text-lg text-gray-700">
          We provide accurate, confidential translations by certified linguists — with the option of same-day delivery when urgency matters most. Always elegant. Always reliable.
        </p>
      </section>

      {/* Contact / Quote Form */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-900 font-serif">Get a Free Quote</h2>
        <form
          className="max-w-xl mx-auto grid gap-4 bg-white p-8 rounded-2xl shadow-xl"
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
          <label className="text-sm text-gray-600">Upload your document for a free appraisal:</label>
          <input name="attachment" type="file" className="p-3 border rounded-xl" required />
          <Button type="submit" className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 DocTranslate. All rights reserved. | Página disponible en Español pronto.
      </footer>
    </div>
  );
}
