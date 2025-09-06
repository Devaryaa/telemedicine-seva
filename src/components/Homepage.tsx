import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Video, 
  Brain, 
  Pill, 
  Shield, 
  Globe,
  Users,
  Stethoscope,
  Activity,
  MapPin
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

interface HomepageProps {
  language?: 'en' | 'hi' | 'pa';
  onRoleSelect?: (role: 'patient' | 'doctor' | 'pharmacy') => void;
}

const Homepage = ({ language = 'en', onRoleSelect }: HomepageProps) => {
  const translations = {
    en: {
      hero: {
        title: 'Healthcare for Rural India',
        subtitle: 'Bridging the healthcare gap with telemedicine, AI-powered diagnosis, and digital health records',
        cta: 'Get Started',
        learnMore: 'Learn More'
      },
      features: {
        title: 'Comprehensive Healthcare Solutions',
        subtitle: 'Empowering rural communities with modern healthcare technology',
        telemedicine: {
          title: 'Video Consultations',
          description: 'Connect with qualified doctors through secure video calls from anywhere'
        },
        ai: {
          title: 'AI Symptom Checker',
          description: 'Get instant health advice and risk assessment powered by artificial intelligence'
        },
        records: {
          title: 'Digital Health Records',
          description: 'Secure, encrypted digital storage of all your medical history and prescriptions'
        },
        pharmacy: {
          title: 'Pharmacy Integration',
          description: 'Check medicine availability at local pharmacies and get real-time stock updates'
        }
      },
      portals: {
        title: 'Choose Your Portal',
        subtitle: 'Access the right tools for your role in the healthcare ecosystem',
        patient: {
          title: 'Patient Portal',
          description: 'Register, view health records, consult doctors, and check medicine availability',
          features: ['Secure Registration', 'Health Records', 'Video Consultations', 'AI Symptom Checker']
        },
        doctor: {
          title: 'Doctor Portal',
          description: 'Manage patients, update health records, and conduct telemedicine consultations',
          features: ['Patient Management', 'Secure Records', 'Video Consultations', 'Prescription Tools']
        },
        pharmacy: {
          title: 'Pharmacy Portal',
          description: 'Update medicine inventory and help patients find available medications',
          features: ['Inventory Management', 'Stock Updates', 'Patient Requests', 'Analytics']
        }
      },
      stats: {
        title: 'Making Healthcare Accessible',
        patients: '10,000+ Patients Served',
        doctors: '500+ Doctors Connected',
        pharmacies: '200+ Pharmacies Integrated',
        consultations: '50,000+ Consultations Completed'
      }
    },
    hi: {
      hero: {
        title: 'ग्रामीण भारत के लिए स्वास्थ्य सेवा',
        subtitle: 'टेलीमेडिसिन, एआई-संचालित निदान और डिजिटल स्वास्थ्य रिकॉर्ड के साथ स्वास्थ्य सेवा की खाई को पाटना',
        cta: 'शुरू करें',
        learnMore: 'और जानें'
      },
      features: {
        title: 'व्यापक स्वास्थ्य सेवा समाधान',
        subtitle: 'आधुनिक स्वास्थ्य सेवा प्रौद्योगिकी के साथ ग्रामीण समुदायों को सशक्त बनाना',
        telemedicine: {
          title: 'वीडियो परामर्श',
          description: 'कहीं से भी सुरक्षित वीडियो कॉल के माध्यम से योग्य डॉक्टरों से जुड़ें'
        },
        ai: {
          title: 'एआई लक्षण चेकर',
          description: 'कृत्रिम बुद्धिमत्ता द्वारा संचालित तत्काल स्वास्थ्य सलाह और जोखिम मूल्यांकन प्राप्त करें'
        },
        records: {
          title: 'डिजिटल स्वास्थ्य रिकॉर्ड',
          description: 'आपके सभी चिकित्सा इतिहास और नुस्खों का सुरक्षित, एन्क्रिप्टेड डिजिटल भंडारण'
        },
        pharmacy: {
          title: 'फार्मेसी एकीकरण',
          description: 'स्थानीय फार्मेसियों में दवा उपलब्धता की जांच करें और रीयल-टाइम स्टॉक अपडेट प्राप्त करें'
        }
      },
      portals: {
        title: 'अपना पोर्टल चुनें',
        subtitle: 'स्वास्थ्य सेवा पारिस्थितिकी तंत्र में अपनी भूमिका के लिए सही उपकरणों तक पहुंच प्राप्त करें',
        patient: {
          title: 'मरीज़ पोर्टल',
          description: 'पंजीकरण करें, स्वास्थ्य रिकॉर्ड देखें, डॉक्टरों से परामर्श लें और दवा उपलब्धता की जांच करें',
          features: ['सुरक्षित पंजीकरण', 'स्वास्थ्य रिकॉर्ड', 'वीडियो परामर्श', 'एआई लक्षण चेकर']
        },
        doctor: {
          title: 'डॉक्टर पोर्टल',
          description: 'मरीजों का प्रबंधन करें, स्वास्थ्य रिकॉर्ड अपडेट करें और टेलीमेडिसिन परामर्श आयोजित करें',
          features: ['मरीज़ प्रबंधन', 'सुरक्षित रिकॉर्ड', 'वीडियो परामर्श', 'नुस्खा उपकरण']
        },
        pharmacy: {
          title: 'फार्मेसी पोर्टल',
          description: 'दवा इन्वेंटरी अपडेट करें और मरीजों को उपलब्ध दवाएं खोजने में मदद करें',
          features: ['इन्वेंटरी प्रबंधन', 'स्टॉक अपडेट', 'मरीज़ अनुरोध', 'विश्लेषण']
        }
      },
      stats: {
        title: 'स्वास्थ्य सेवा को सुलभ बनाना',
        patients: '10,000+ मरीज़ों की सेवा',
        doctors: '500+ डॉक्टर जुड़े',
        pharmacies: '200+ फार्मेसी एकीकृत',
        consultations: '50,000+ परामर्श पूर्ण'
      }
    },
    pa: {
      hero: {
        title: 'ਪਿੰਡੂ ਭਾਰਤ ਲਈ ਸਿਹਤ ਸੇਵਾ',
        subtitle: 'ਟੈਲੀਮੈਡੀਸਿਨ, ਏਆਈ-ਸੰਚਾਲਿਤ ਨਿਦਾਨ ਅਤੇ ਡਿਜੀਟਲ ਸਿਹਤ ਰਿਕਾਰਡਾਂ ਨਾਲ ਸਿਹਤ ਸੇਵਾ ਦੀ ਖਾਈ ਨੂੰ ਪਾਟਣਾ',
        cta: 'ਸ਼ੁਰੂ ਕਰੋ',
        learnMore: 'ਹੋਰ ਜਾਣੋ'
      },
      features: {
        title: 'ਵਿਆਪਕ ਸਿਹਤ ਸੇਵਾ ਹੱਲ',
        subtitle: 'ਆਧੁਨਿਕ ਸਿਹਤ ਸੇਵਾ ਤਕਨਾਲੋਜੀ ਨਾਲ ਪਿੰਡੂ ਕਮਿਊਨਿਟੀਆਂ ਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ',
        telemedicine: {
          title: 'ਵੀਡੀਓ ਸਲਾਹ',
          description: 'ਕਿਤੇ ਵੀ ਸੁਰਖਿਅਤ ਵੀਡੀਓ ਕਾਲਾਂ ਰਾਹੀਂ ਯੋਗ ਡਾਕਟਰਾਂ ਨਾਲ ਜੁੜੋ'
        },
        ai: {
          title: 'ਏਆਈ ਲੱਛਣ ਜਾਂਚਕਰਤਾ',
          description: 'ਨਕਲੀ ਬੁਧੀ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਤਤਕਾਲ ਸਿਹਤ ਸਲਾਹ ਅਤੇ ਜੋਖਮ ਮੁਲਾਂਕਣ ਪ੍ਰਾਪਤ ਕਰੋ'
        },
        records: {
          title: 'ਡਿਜੀਟਲ ਸਿਹਤ ਰਿਕਾਰਡ',
          description: 'ਤੁਹਾਡੇ ਸਾਰੇ ਮੈਡੀਕਲ ਇਤਿਹਾਸ ਅਤੇ ਨੁਸਖਿਆਂ ਦਾ ਸੁਰਖਿਅਤ, ਐਨਕ੍ਰਿਪਟਿਡ ਡਿਜੀਟਲ ਭੰਡਾਰਣ'
        },
        pharmacy: {
          title: 'ਫਾਰਮੇਸੀ ਏਕੀਕਰਣ',
          description: 'ਸਥਾਨਕ ਫਾਰਮੇਸੀਆਂ ਵਿੱਚ ਦਵਾਈ ਦੀ ਉਪਲਬਧਤਾ ਦੀ ਜਾਂਚ ਕਰੋ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਸਟਾਕ ਅਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ'
        }
      },
      portals: {
        title: 'ਆਪਣਾ ਪੋਰਟਲ ਚੁਣੋ',
        subtitle: 'ਸਿਹਤ ਸੇਵਾ ਈਕੋਸਿਸਟਮ ਵਿੱਚ ਆਪਣੀ ਭੂਮਿਕਾ ਲਈ ਸਹੀ ਸਾਧਨਾਂ ਦੀ ਪਹੁੰਚ ਪ੍ਰਾਪਤ ਕਰੋ',
        patient: {
          title: 'ਮਰੀਜ਼ ਪੋਰਟਲ',
          description: 'ਰਜਿਸਟਰ ਕਰੋ, ਸਿਹਤ ਰਿਕਾਰਡ ਦੇਖੋ, ਡਾਕਟਰਾਂ ਨਾਲ ਸਲਾਹ ਲਓ, ਅਤੇ ਦਵਾਈ ਦੀ ਉਪਲਬਧਤਾ ਦੀ ਜਾਂਚ ਕਰੋ',
          features: ['ਸੁਰਖਿਅਤ ਰਜਿਸਟ੍ਰੇਸ਼ਨ', 'ਸਿਹਤ ਰਿਕਾਰਡ', 'ਵੀਡੀਓ ਸਲਾਹ', 'ਏਆਈ ਲੱਛਣ ਜਾਂਚਕਰਤਾ']
        },
        doctor: {
          title: 'ਡਾਕਟਰ ਪੋਰਟਲ',
          description: 'ਮਰੀਜ਼ਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ, ਸਿਹਤ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ, ਅਤੇ ਟੈਲੀਮੈਡੀਸਿਨ ਸਲਾਹ ਆਯੋਜਿਤ ਕਰੋ',
          features: ['ਮਰੀਜ਼ ਪ੍ਰਬੰਧਨ', 'ਸੁਰਖਿਅਤ ਰਿਕਾਰਡ', 'ਵੀਡੀਓ ਸਲਾਹ', 'ਨੁਸਖਾ ਸਾਧਨ']
        },
        pharmacy: {
          title: 'ਫਾਰਮੇਸੀ ਪੋਰਟਲ',
          description: 'ਦਵਾਈ ਦੀ ਸੂਚੀ ਅਪਡੇਟ ਕਰੋ ਅਤੇ ਮਰੀਜ਼ਾਂ ਨੂੰ ਉਪਲਬਧ ਦਵਾਈਆਂ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰੋ',
          features: ['ਸੂਚੀ ਪ੍ਰਬੰਧਨ', 'ਸਟਾਕ ਅਪਡੇਟ', 'ਮਰੀਜ਼ ਬੇਨਤੀਆਂ', 'ਵਿਸ਼ਲੇਸ਼ਣ']
        }
      },
      stats: {
        title: 'ਸਿਹਤ ਸੇਵਾ ਨੂੰ ਪਹੁੰਚਯੋਗ ਬਣਾਉਣਾ',
        patients: '10,000+ ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ',
        doctors: '500+ ਡਾਕਟਰ ਜੁੜੇ',
        pharmacies: '200+ ਫਾਰਮੇਸੀਆਂ ਏਕੀਕ੍ਰਿਤ',
        consultations: '50,000+ ਸਲਾਹਾਂ ਪੂਰੀਆਂ'
      }
    }
  };

  const t = translations[language];

  const features = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: t.features.telemedicine?.title || 'Video Consultations',
      description: t.features.telemedicine?.description || 'Connect with qualified doctors through secure video calls from anywhere'
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: t.features.ai?.title || 'AI Symptom Checker',
      description: t.features.ai?.description || 'Get instant health advice and risk assessment powered by artificial intelligence'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: t.features.records?.title || 'Digital Health Records',
      description: t.features.records?.description || 'Secure, encrypted digital storage of all your medical history and prescriptions'
    },
    {
      icon: <Pill className="w-8 h-8 text-secondary" />,
      title: t.features.pharmacy?.title || 'Pharmacy Integration',
      description: t.features.pharmacy?.description || 'Check medicine availability at local pharmacies and get real-time stock updates'
    }
  ];

  const portals = [
    {
      role: 'patient' as const,
      icon: <Users className="w-12 h-12 text-primary" />,
      title: t.portals.patient?.title || 'Patient Portal',
      description: t.portals.patient?.description || 'Register, view health records, consult doctors, and check medicine availability',
      features: t.portals.patient?.features || ['Secure Registration', 'Health Records', 'Video Consultations', 'AI Symptom Checker'],
      color: 'border-primary/20 hover:border-primary/40 hover:shadow-glow'
    },
    {
      role: 'doctor' as const,
      icon: <Stethoscope className="w-12 h-12 text-secondary" />,
      title: t.portals.doctor?.title || 'Doctor Portal',
      description: t.portals.doctor?.description || 'Manage patients, update health records, and conduct telemedicine consultations',
      features: t.portals.doctor?.features || ['Patient Management', 'Secure Records', 'Video Consultations', 'Prescription Tools'],
      color: 'border-secondary/20 hover:border-secondary/40 hover:shadow-glow'
    },
    {
      role: 'pharmacy' as const,
      icon: <Pill className="w-12 h-12 text-primary" />,
      title: t.portals.pharmacy?.title || 'Pharmacy Portal',
      description: t.portals.pharmacy?.description || 'Update medicine inventory and help patients find available medications',
      features: t.portals.pharmacy?.features || ['Inventory Management', 'Stock Updates', 'Patient Requests', 'Analytics'],
      color: 'border-primary/20 hover:border-primary/40 hover:shadow-glow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                  onClick={() => onRoleSelect?.('patient')}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {t.hero.cta}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  {t.hero.learnMore}
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src={heroImage}
                alt="Rural healthcare telemedicine"
                className="rounded-2xl shadow-medical w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medical transition-all duration-300 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-background/50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.portals.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.portals.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 ${portal.color} bg-gradient-card hover:-translate-y-2`}
                onClick={() => onRoleSelect?.(portal.role)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-background/50">
                    {portal.icon}
                  </div>
                  <CardTitle className="text-xl">{portal.title}</CardTitle>
                  <CardDescription className="text-base">
                    {portal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {portal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Activity className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-primary text-white hover:opacity-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRoleSelect?.(portal.role);
                    }}
                  >
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.stats?.title || 'Making Healthcare Accessible'}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Patients Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Doctors Connected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Pharmacies Integrated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50,000+</div>
              <p className="text-muted-foreground">Consultations Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;