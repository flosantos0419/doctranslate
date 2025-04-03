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
