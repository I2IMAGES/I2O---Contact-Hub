import React from "react";
import { QRCodeItem } from "../types";

interface QRCodeCardProps {
  item: QRCodeItem;
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full group">
      
      {/* Header Section */}
      <div className="mb-8 space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl group-hover:bg-blue-700 transition-all duration-300 mb-2">
            <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors">{item.title}</h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[260px]">
          {item.description}
        </p>
      </div>

      {/* QR Code Container */}
      <div className="relative w-full aspect-square max-w-[280px] bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100 shadow-inner flex items-center justify-center">
        <img
          src={item.imageSrc}
          alt={`QR Code for ${item.title}`}
          className="w-full h-full object-contain bg-white p-3 rounded-lg border-2 border-solid border-slate-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
        />
        
        {/* Scannability corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-600/10 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-600/10 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-600/10 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-600/10 rounded-br-lg"></div>
      </div>

      {/* Action Footer */}
      <div className="mt-auto w-full">
        <div className="flex items-center justify-center space-x-3 text-blue-700 font-bold text-xs uppercase tracking-widest py-4 border-t border-slate-50 group-hover:text-blue-900 transition-colors">
          <span>{item.ctaText}</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};