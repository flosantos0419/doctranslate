import React, { useState } from "react";
import { Button } from "./components/ui/button";

const translations = { /* existing translations stay here */ };

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 relative font-sans">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {['en', 'es', 'pt', 'fr', 'it'].map((code) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`px-3 py-1 rounded text-sm font-medium shadow-sm transition ${
              lang === code ? "bg-blue-600 text-white" : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      {/* rest of the page remains unchanged */}
    </div>
  );
}
