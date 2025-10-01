import { LogoVariants } from './components/LogoVariants';
import { ColorPalette } from './components/ColorPalette';
import { TypographySection } from './components/TypographySection';
import { WebDesignMockups } from './components/WebDesignMockups';
import { Moodboard } from './components/Moodboard';
import { Cloud, Palette, Type, Globe, Image, Lightbulb } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <Cloud className="w-9 h-9 text-white" />
              </div>
              <h1 className="text-5xl tracking-tight">
                <span className="font-bold">Iman</span>{' '}
                <span className="font-light">Cloud</span>
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl mb-4">Design Concept Board</h2>
              <p className="text-xl text-blue-100 mb-6">
                Logo-Designs, Farbpalette, Typografie und erste Webdesign-Mockups für eine moderne IT-Dienstleistungsfirma
              </p>
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Lightbulb className="w-5 h-5" />
                <span className="text-lg">Cloud-Lösungen • Beratung • Implementierung</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
            <a href="#logos" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Cloud className="w-4 h-4" />
              <span>Logo-Varianten</span>
            </a>
            <a href="#colors" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Palette className="w-4 h-4" />
              <span>Farbpalette</span>
            </a>
            <a href="#typography" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Type className="w-4 h-4" />
              <span>Typografie</span>
            </a>
            <a href="#webdesign" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Globe className="w-4 h-4" />
              <span>Web-Mockups</span>
            </a>
            <a href="#moodboard" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              <Image className="w-4 h-4" />
              <span>Moodboard</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo Variants */}
        <div id="logos" className="mb-16">
          <LogoVariants />
        </div>

        {/* Color Palette */}
        <div id="colors" className="mb-16">
          <ColorPalette />
        </div>

        {/* Typography */}
        <div id="typography" className="mb-16">
          <TypographySection />
        </div>

        {/* Web Design Mockups */}
        <div id="webdesign" className="mb-16">
          <WebDesignMockups />
        </div>

        {/* Moodboard */}
        <div id="moodboard" className="mb-16">
          <Moodboard />
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-center text-blue-900 mb-8">Design-Zusammenfassung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-blue-900 mb-2">Logo & Branding</h4>
              <p className="text-blue-800 text-sm">
                Moderne Logo-Varianten mit Wolken-Symbol und klarer Typografie für verschiedene Anwendungsfälle
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-orange-900 mb-2">Farbsystem</h4>
              <p className="text-orange-800 text-sm">
                Durchdachte Blau-/Türkis-Palette für Vertrauen mit Orange-Akzenten für Dynamik und Energie
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Type className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-green-900 mb-2">Webdesign</h4>
              <p className="text-green-800 text-sm">
                Clean, professionelle Website-Mockups mit klarer Hierarchie und modernen Design-Elementen
              </p>
            </div>
          </div>

          {/* Design Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border border-blue-200">
              <h4 className="text-blue-900 mb-3">Design-Prinzipien</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Modern und professionell</li>
                <li>• Vertrauenswürdig aber nahbar</li>
                <li>• Clean und minimalistisch</li>
                <li>• Tech-orientiert mit menschlicher Note</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg border border-orange-200">
              <h4 className="text-orange-900 mb-3">Visuelle Identität</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>• Wolken-Symbolik für Cloud-Services</li>
                <li>• Blau-Töne für IT & Vertrauen</li>
                <li>• Orange-Akzente für Startup-Energie</li>
                <li>• Typografie: Inter & Space Grotesk Mix</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl tracking-tight">
                <span className="font-bold">Iman</span>{' '}
                <span className="font-light text-blue-400">Cloud</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Design Concept Board für eine moderne IT-Dienstleistungsfirma
            </p>
            <p className="text-gray-500 text-sm">
              "Cloud mit Vertrauen • Startup-Energie meets Enterprise-Qualität"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}