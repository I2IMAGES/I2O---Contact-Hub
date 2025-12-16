import React from 'react';
import { Header } from './components/Header';
import { QRCodeCard } from './components/QRCodeCard';
import { QR_CODES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 overflow-x-hidden">
      
      {/* Background decoration (optional subtle geometric shapes) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100 blur-3xl opacity-50 mix-blend-multiply filter"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-slate-200 blur-3xl opacity-50 mix-blend-multiply filter"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        
        {/* Header Section */}
        <Header />

        {/* Introduction / Instruction Text */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
                Thank you for joining our presentation. <br/>
                <span className="font-semibold text-slate-900">Scan the codes below</span> to connect with us further.
            </p>
        </div>

        {/* QR Code Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-2 md:px-8 pb-20">
          {QR_CODES.map((item, index) => (
            <div 
                key={item.id} 
                className="h-full"
                style={{ animationDelay: `${index * 150}ms` }} // Staggered animation effect
            >
              <QRCodeCard item={item} />
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm py-8 border-t border-slate-200 mt-8">
          <p>© {new Date().getFullYear()} Inward2Onward Executive Coaching. All rights reserved.</p>
        </footer>
      </div>

      {/* Global Animation Styles */}
      <style>{`
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
            animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;