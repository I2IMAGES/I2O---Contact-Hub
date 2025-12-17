import React from "react";
import { COMPANY_INFO } from "../constants";

export const Header: React.FC = () => {
  return (
    <header className="w-full py-12 md:py-16 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center drop-shadow-xl">
        {/* 
          High-Precision Geometric Reconstruction of the Inward2Onward Logo 
          Logic:
          - A base diamond frame.
          - A black right-facing chevron (The 'Onward' arrow).
          - A gray horizontal left-facing arrow (The 'Inward' arrow).
          - Gray diamond tips at top and bottom.
        */}
        <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={COMPANY_INFO.name}
        >
            {/* 1. Base White Diamond (Left Side Background) */}
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#ffffff" />
            
            {/* 2. Black Right-Facing Chevron (The Onward Arrow) */}
            {/* Starts near the top, extends to the far right, cuts back to create the chevron shape */}
            <path d="M50 5 L95 50 L50 95 L65 50 Z" fill="#000000" />
            
            {/* 3. Top Gray Terminal Accent (Diamond/Square) */}
            <path d="M50 0 L62 12 L50 24 L38 12 Z" fill="#6d6e71" />
            
            {/* 4. Bottom Gray Terminal Accent (Diamond/Square) */}
            <path d="M50 100 L62 88 L50 76 L38 88 Z" fill="#6d6e71" />
            
            {/* 5. Gray Horizontal Left-Facing Arrow (The Inward Arrow) */}
            {/* This arrow spans the middle and points left */}
            <path d="M5 50 L38 32 V44 H95 V56 H38 V68 Z" fill="#6d6e71" />
        </svg>
      </div>
      
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-3">
          Inward<span className="text-blue-700">2</span>Onward
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <div className="h-[2px] w-12 bg-slate-200"></div>
          <p className="text-sm md:text-lg text-slate-500 font-bold tracking-[0.3em] uppercase">
            Executive Coaching
          </p>
          <div className="h-[2px] w-12 bg-slate-200"></div>
        </div>
      </div>
    </header>
  );
};