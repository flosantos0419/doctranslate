import React, { useState } from "react";
import { Button } from "./components/ui/button";

const flagEmojis = {
  en: "🇺🇸",
  es: "🇪🇸",
  pt: "🇧🇷",
  fr: "🇫🇷",
  it: "🇮🇹"
};

const translations = {
  en: {
    hero: "Elegant, Certified, and Fast — Translations for Legal, Immigration, Academic, and Business Use.",
    servicesTitle: "Our Services",
    services: [
      "Certified Translations",
      "Legal & Immigration Documents",
      "Academic Transcripts & Diplomas",
      "Business & Financial Documents",
      "Personal Letters & Forms",
      "Emergency Translations in Hours"
    ],
    languagesTitle: "Languages We Translate",
    languagesNote: "Translations between Spanish, Portuguese, French, Italian, and English — accurate and elegant.",
    processTitle: "How It Works",
    process: [
      "Upload your document",
      "We review and send you a free quote",
      "Pay and receive your translation in 24–48 hours",
      "Need it sooner? Emergency delivery in a few hours available."
    ],
    about: "We provide accurate, confidential translations by certified linguists — with the option of same-day delivery when urgency matters most. Always elegant. Always reliable.",
    quoteTitle: "Get a Free Quote",
    spanishNotice: "We also accept requests in Spanish. You may write to us in your language and we’ll gladly reply.",
    paymentTitle: "Payment Options",
    paymentMethods: "• PayPal: paypal.me/flosantos • Zelle: 201-908-7148",
    confirmationNote: "You will receive a confirmation email once we receive your request."
  },
  es: {
    hero: "Elegante, certificada y rápida — Traducciones legales, migratorias, académicas y comerciales.",
    servicesTitle: "Nuestros Servicios",
    services: [
      "Traducciones Certificadas",
      "Documentos Legales y Migratorios",
      "Títulos y Certificados Académicos",
      "Documentos Financieros y Empresariales",
      "Cartas Personales y Formularios",
      "Traducciones de Urgencia en Horas"
    ],
    languagesTitle: "Idiomas que Traducimos",
    languagesNote: "Traducciones entre español, portugués, francés, italiano e inglés — precisas y elegantes.",
    processTitle: "Cómo Funciona",
    process: [
      "Sube tu documento",
      "Revisamos y te enviamos una cotización gratuita",
      "Pagas y recibes la traducción en 24–48 horas",
      "¿Lo necesitas antes? Entrega urgente disponible."
    ],
    about: "Ofrecemos traducciones precisas y confidenciales por lingüistas certificados — con opción de entrega urgente. Siempre elegantes. Siempre confiables.",
    quoteTitle: "Solicita una Cotización Gratuita",
    spanishNotice: "También aceptamos solicitudes en español. Puede escribirnos en su idioma y responderemos con gusto.",
    paymentTitle: "Opciones de Pago",
    paymentMethods: "• PayPal: paypal.me/flosantos • Zelle: 201-908-7148",
    confirmationNote: "Recibirá un correo electrónico de confirmación una vez recibido su pedido."
  },
  pt: {
    hero: "Elegante, Certificada e Rápida — Traduções jurídicas, imigratórias, acadêmicas e comerciais.",
    servicesTitle: "Nossos Serviços",
    services: [
      "Traduções Certificadas",
      "Documentos Jurídicos e de Imigração",
      "Diplomas e Históricos Acadêmicos",
      "Documentos Comerciais e Financeiros",
      "Cartas Pessoais e Formulários",
      "Traduções de Emergência em Horas"
    ],
    languagesTitle: "Idiomas que Traduzimos",
    languagesNote: "Traduções entre espanhol, português, francês, italiano e inglês — com precisão e elegância.",
    processTitle: "Como Funciona",
    process: [
      "Envie seu documento",
      "Revisamos e enviamos um orçamento gratuito",
      "Pague e receba sua tradução em 24–48 horas",
      "Com urgência? Entrega em algumas horas disponível."
    ],
    about: "Fornecemos traduções precisas e confidenciais feitas por linguistas certificados — com entrega no mesmo dia quando necessário. Sempre elegantes. Sempre confiáveis.",
    quoteTitle: "Solicite um Orçamento Gratuito",
    spanishNotice: "Também aceitamos solicitações em português ou espanhol. Escreva no seu idioma e responderemos com prazer.",
    paymentTitle: "Formas de Pagamento",
    paymentMethods: "• PayPal: paypal.me/flosantos • Zelle: 201-908-7148",
    confirmationNote: "Você receberá um e-mail de confirmação assim que recebermos seu pedido."
  },
  fr: {
    hero: "Élégante, certifiée et rapide — Traductions juridiques, d'immigration, académiques et commerciales.",
    servicesTitle: "Nos Services",
    services: [
      "Traductions Certifiées",
      "Documents Juridiques et d'Immigration",
      "Diplômes et Relevés Académiques",
      "Documents Financiers et Professionnels",
      "Lettres Personnelles et Formulaires",
      "Traductions Urgentes en Quelques Heures"
    ],
    languagesTitle: "Langues que Nous Traduisons",
    languagesNote: "Traductions entre l'espagnol, le portugais, le français, l'italien et l'anglais — précises et élégantes.",
    processTitle: "Comment Ça Marche",
    process: [
      "Envoyez votre document",
      "Nous examinons et vous envoyons un devis gratuit",
      "Payez et recevez votre traduction en 24 à 48 heures",
      "Besoin en urgence ? Livraison le jour même disponible."
    ],
    about: "Nous proposons des traductions précises et confidentielles réalisées par des linguistes certifiés — avec livraison express en cas d'urgence. Toujours élégantes. Toujours fiables.",
    quoteTitle: "Obtenez un Devis Gratuit",
    spanishNotice: "Nous acceptons également les demandes en français ou espagnol. N'hésitez pas à nous écrire dans votre langue.",
    paymentTitle: "Moyens de Paiement",
    paymentMethods: "• PayPal: paypal.me/flosantos • Zelle: 201-908-7148",
    confirmationNote: "Vous recevrez un e-mail de confirmation dès réception de votre demande."
  },
  it: {
    hero: "Elegante, Certificata e Rapida — Traduzioni legali, accademiche, d'immigrazione e commerciali.",
    servicesTitle: "I Nostri Servizi",
    services: [
      "Traduzioni Certificate",
      "Documenti Legali e d'Immigrazione",
      "Diplomi e Trascrizioni Accademiche",
      "Documenti Finanziari e Aziendali",
      "Lettere Personali e Moduli",
      "Traduzioni Urgenti in Poche Ore"
    ],
    languagesTitle: "Lingue che Traduciamo",
    languagesNote: "Traduzioni tra spagnolo, portoghese, francese, italiano e inglese — precise ed eleganti.",
    processTitle: "Come Funziona",
    process: [
      "Carica il tuo documento",
      "Lo esaminiamo e ti inviamo un preventivo gratuito",
      "Paga e ricevi la tua traduzione in 24–48 ore",
      "Hai urgenza? Consegna nello stesso giorno disponibile."
    ],
    about: "Forniamo traduzioni accurate e riservate eseguite da linguisti certificati — con consegna urgente se necessario. Sempre eleganti. Sempre affidabili.",
    quoteTitle: "Richiedi un Preventivo Gratuito",
    spanishNotice: "Accettiamo anche richieste in italiano o spagnolo. Scrivici nella tua lingua.",
    paymentTitle: "Modalità di Pagamento",
    paymentMethods: "• PayPal: paypal.me/flosantos • Zelle: 201-908-7148",
    confirmationNote: "Riceverai un'e-mail di conferma una volta ricevuta la tua richiesta."
  }
};

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
