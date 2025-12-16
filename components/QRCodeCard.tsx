import React from "react";
import { QRCodeItem } from "../types";

interface QRCodeCardProps {
  item: QRCodeItem;
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
      
      {/* Header Section of Card */}
      <div className="mb-6 space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-2">
            <Icon className="w-6 h-6 text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{item.title}</h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* QR Code Image */}
      <div className="relative w-full aspect-square max-w-[280px] bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 group">
        <img
          src={item.imageSrc}
          alt={`QR Code for ${item.title}`}
          className="w-full h-full object-contain bg-white p-4 rounded-xl border-2 border-slate-100 shadow-md"
        />
        {/* Subtle Scan Overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 rounded-xl pointer-events-none">
          <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
            Ready to Scan
          </span>
        </div>
      </div>

      {/* Footer/CTA */}
      <div className="mt-auto">
        <div className="inline-flex items-center space-x-2 text-blue-700 font-semibold text-sm uppercase tracking-wider">
          <span>{item.ctaText}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};