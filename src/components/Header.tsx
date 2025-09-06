import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Menu, 
  X, 
  Globe,
  User,
  Stethoscope,
  Pill
} from 'lucide-react';
import medicalLogo from '@/assets/medical-logo.png';

interface HeaderProps {
  currentRole?: 'patient' | 'doctor' | 'pharmacy' | null;
  onRoleChange?: (role: 'patient' | 'doctor' | 'pharmacy' | null) => void;
  language?: 'en' | 'hi' | 'pa';
  onLanguageChange?: (lang: 'en' | 'hi' | 'pa') => void;
}

const Header = ({ 
  currentRole, 
  onRoleChange, 
  language = 'en', 
  onLanguageChange 
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = {
    en: 'English',
    hi: 'हिंदी',
    pa: 'ਪੰਜਾਬੀ'
  };

  const translations = {
    en: {
      title: 'Rural TeleMed',
      tagline: 'Healthcare for Rural India',
      patient: 'Patient Portal',
      doctor: 'Doctor Portal',
      pharmacy: 'Pharmacy Portal',
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    hi: {
      title: 'ग्रामीण टेलीमेड',
      tagline: 'ग्रामीण भारत के लिए स्वास्थ्य सेवा',
      patient: 'मरीज़ पोर्टल',
      doctor: 'डॉक्टर पोर्टल',
      pharmacy: 'फार्मेसी पोर्टल',
      home: 'होम',
      about: 'के बारे में',
      contact: 'संपर्क'
    },
    pa: {
      title: 'ਪਿੰਡੂ ਟੈਲੀਮੈਡ',
      tagline: 'ਪਿੰਡੂ ਭਾਰਤ ਲਈ ਸਿਹਤ ਸੇਵਾ',
      patient: 'ਮਰੀਜ਼ ਪੋਰਟਲ',
      doctor: 'ਡਾਕਟਰ ਪੋਰਟਲ',
      pharmacy: 'ਫਾਰਮੇਸੀ ਪੋਰਟਲ',
      home: 'ਘਰ',
      about: 'ਬਾਰੇ',
      contact: 'ਸੰਪਰਕ'
    }
  };

  const t = translations[language];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'patient': return <User className="w-4 h-4" />;
      case 'doctor': return <Stethoscope className="w-4 h-4" />;
      case 'pharmacy': return <Pill className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img 
              src={medicalLogo} 
              alt="Medical Logo" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">{t.title}</h1>
              <p className="text-xs text-muted-foreground">{t.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => onRoleChange?.(null)}
              className={!currentRole ? 'text-primary' : ''}
            >
              {t.home}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => onRoleChange?.('patient')}
              className={`flex items-center gap-2 ${currentRole === 'patient' ? 'text-primary bg-primary/10' : ''}`}
            >
              <User className="w-4 h-4" />
              {t.patient}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => onRoleChange?.('doctor')}
              className={`flex items-center gap-2 ${currentRole === 'doctor' ? 'text-primary bg-primary/10' : ''}`}
            >
              <Stethoscope className="w-4 h-4" />
              {t.doctor}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => onRoleChange?.('pharmacy')}
              className={`flex items-center gap-2 ${currentRole === 'pharmacy' ? 'text-primary bg-primary/10' : ''}`}
            >
              <Pill className="w-4 h-4" />
              {t.pharmacy}
            </Button>

            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {languages[language]}
              </Button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-md shadow-medical z-50">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        onLanguageChange?.(code as 'en' | 'hi' | 'pa');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
                        language === code ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button 
                variant="ghost" 
                onClick={() => {
                  onRoleChange?.(null);
                  setIsMenuOpen(false);
                }}
                className={`justify-start ${!currentRole ? 'text-primary' : ''}`}
              >
                {t.home}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => {
                  onRoleChange?.('patient');
                  setIsMenuOpen(false);
                }}
                className={`justify-start flex items-center gap-2 ${currentRole === 'patient' ? 'text-primary bg-primary/10' : ''}`}
              >
                <User className="w-4 h-4" />
                {t.patient}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => {
                  onRoleChange?.('doctor');
                  setIsMenuOpen(false);
                }}
                className={`justify-start flex items-center gap-2 ${currentRole === 'doctor' ? 'text-primary bg-primary/10' : ''}`}
              >
                <Stethoscope className="w-4 h-4" />
                {t.doctor}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => {
                  onRoleChange?.('pharmacy');
                  setIsMenuOpen(false);
                }}
                className={`justify-start flex items-center gap-2 ${currentRole === 'pharmacy' ? 'text-primary bg-primary/10' : ''}`}
              >
                <Pill className="w-4 h-4" />
                {t.pharmacy}
              </Button>

              {/* Mobile Language Selector */}
              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2 px-3">Language</p>
                {Object.entries(languages).map(([code, name]) => (
                  <Button
                    key={code}
                    variant="ghost"
                    onClick={() => {
                      onLanguageChange?.(code as 'en' | 'hi' | 'pa');
                      setIsMenuOpen(false);
                    }}
                    className={`justify-start w-full ${
                      language === code ? 'text-primary bg-primary/10' : ''
                    }`}
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;