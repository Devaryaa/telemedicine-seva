import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import PatientPortal from "./components/PatientPortal";
import DoctorPortal from "./components/DoctorPortal";
import PharmacyPortal from "./components/PharmacyPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [currentRole, setCurrentRole] = useState<'patient' | 'doctor' | 'pharmacy' | null>(null);
  const [language, setLanguage] = useState<'en' | 'hi' | 'pa'>('en');

  const renderCurrentView = () => {
    switch (currentRole) {
      case 'patient':
        return <PatientPortal language={language} />;
      case 'doctor':
        return <DoctorPortal language={language} />;
      case 'pharmacy':
        return <PharmacyPortal language={language} />;
      default:
        return <Homepage language={language} onRoleSelect={setCurrentRole} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header 
              currentRole={currentRole}
              onRoleChange={setCurrentRole}
              language={language}
              onLanguageChange={setLanguage}
            />
            <Routes>
              <Route path="/" element={renderCurrentView()} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
