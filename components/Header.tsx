import React from "react";
import { COMPANY_INFO } from "../constants";

export const Header: React.FC = () => {
  return (
    <header className="w-full py-8 md:py-12 flex flex-col items-center justify-center space-y-6 animate-fade-in-down">
      <div className="relative w-24 h-24 md:w-32 md:h-32 shadow-xl rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden border border-slate-100">
        <img
          src={COMPANY_INFO.logoSrc}
          alt={`${COMPANY_INFO.name} Logo`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Inward<span className="text-blue-700">2</span>Onward
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 mt-2 font-medium tracking-wide uppercase text-sm">
          Executive Coaching
        </p>
      </div>
    </header>
  );
};