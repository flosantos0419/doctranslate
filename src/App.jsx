import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Fast & Accurate Document Translation Services</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Certified translations for immigration, legal, academic, and more — delivered fast and hassle-free.
        </p>
        <Button className="text-lg px-6 py-3">Get a Free Quote</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Certified Translations",
            "Legal & Immigration Documents",
            "Academic Transcripts & Diplomas",
            "Business & Financial Documents",
            "Personal Letters & Forms",
            "More upon request"
          ].map((service, index) => (
            <div key={index} className="border rounded-2xl p-6 shadow">
              <h3 className="text-xl font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Language Pairs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Languages We Translate</h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-6">
          We offer translations among Spanish, Portuguese, French, and Italian — to and from English as well as between each language.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {["Spanish", "Portuguese", "French", "Italian", "English"].map((lang, i) => (
            <span key={i} className="border px-4 py-2 rounded-xl shadow-sm bg-white">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            { step: "1", desc: "Upload your document" },
            { step: "2", desc: "We review and send you a free quote" },
            { step: "3", desc: "Pay and receive your translation in 24–48 hours" }
          ].map(({ step, desc }) => (
            <div key={step} className="bg-gray-50 rounded-2xl p-6 shadow">
              <div className="text-4xl font-bold mb-4">{step}</div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <p className="text-center text-lg">
          We provide fast, accurate, and confidential translations by professional linguists. Whether you need Spanish, Portuguese, French, or Italian translations — we've got you covered.
        </p>
      </section>

      {/* Contact / Quote Form */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Get a Free Quote</h2>
        <form
          className="max-w-xl mx-auto grid gap-4"
          action="https://formsubmit.co/studiolegalsantos@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_next" value="https://doctranslate.pro/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <input name="name" type="text" placeholder="Name" className="p-3 border rounded-xl" required />
          <input name="email" type="email" placeholder="Email" className="p-3 border rounded-xl" required />
          <input name="language" type="text" placeholder="Language pair (e.g., Spanish to English)" className="p-3 border rounded-xl" required />
          <textarea name="notes" placeholder="Notes" rows="4" className="p-3 border rounded-xl"></textarea>
          <label className="text-sm text-gray-600">Upload your document for a free appraisal:</label>
          <input name="attachment" type="file" className="p-3 border rounded-xl" required />
          <Button type="submit" className="mt-2">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 FastTranslate. All rights reserved. | Página disponible en Español pronto.
      </footer>
    </div>
  );
}
