import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  FileText, 
  Brain, 
  Video, 
  Pill, 
  Plus,
  Search,
  Calendar,
  Shield,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface PatientPortalProps {
  language?: 'en' | 'hi' | 'pa';
}

const PatientPortal = ({ language = 'en' }: PatientPortalProps) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [patientId, setPatientId] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [activeTab, setActiveTab] = useState('register');

  const translations = {
    en: {
      title: 'Patient Portal',
      subtitle: 'Your gateway to digital healthcare',
      register: {
        title: 'Patient Registration',
        description: 'Register to access your digital health records and telemedicine services',
        name: 'Full Name',
        age: 'Age',
        phone: 'Phone Number',
        address: 'Address',
        submit: 'Register',
        success: 'Registration successful! Your Patient ID: '
      },
      healthRecords: {
        title: 'Health Records',
        description: 'View your complete medical history and prescriptions',
        noRecords: 'No health records found. Visit a doctor to add your first record.',
        viewAll: 'View All Records'
      },
      symptomChecker: {
        title: 'AI Symptom Checker',
        description: 'Describe your symptoms to get AI-powered health advice',
        placeholder: 'Describe your symptoms in detail...',
        submit: 'Check Symptoms',
        disclaimer: 'This is for informational purposes only. Always consult a doctor for medical advice.'
      },
      telemedicine: {
        title: 'Video Consultation',
        description: 'Connect with qualified doctors through secure video calls',
        startCall: 'Start Consultation',
        schedule: 'Schedule Appointment'
      },
      pharmacy: {
        title: 'Medicine Availability',
        description: 'Check real-time medicine availability at local pharmacies',
        search: 'Search medicine...',
        checkStock: 'Check Stock'
      }
    },
    hi: {
      title: 'मरीज़ पोर्टल',
      subtitle: 'डिजिटल स्वास्थ्य सेवा का आपका प्रवेश द्वार',
      register: { title: 'मरीज़ पंजीकरण', description: 'अपने डिजिटल स्वास्थ्य रिकॉर्ड और टेलीमेडिसिन सेवाओं तक पहुंच के लिए पंजीकरण करें', name: 'पूरा नाम', age: 'उम्र', phone: 'फोन नंबर', address: 'पता', submit: 'पंजीकरण करें', success: 'पंजीकरण सफल! आपकी मरीज़ आईडी: ' },
      healthRecords: { title: 'स्वास्थ्य रिकॉर्ड', description: 'अपने पूर्ण चिकित्सा इतिहास देखें', noRecords: 'कोई स्वास्थ्य रिकॉर्ड नहीं मिला', viewAll: 'सभी रिकॉर्ड देखें' },
      symptomChecker: { title: 'एआई लक्षण चेकर', description: 'एआई-संचालित स्वास्थ्य सलाह के लिए अपने लक्षणों का वर्णन करें', placeholder: 'अपने लक्षणों का विस्तार से वर्णन करें...', submit: 'लक्षण जांचें', disclaimer: 'यह केवल जानकारी के लिए है। चिकित्सा सलाह के लिए हमेशा डॉक्टर से सलाह लें।' },
      telemedicine: { title: 'वीडियो परामर्श', description: 'सुरक्षित वीडियो कॉल के माध्यम से योग्य डॉक्टरों से जुड़ें', startCall: 'परामर्श शुरू करें', schedule: 'अपॉइंटमेंट शेड्यूल करें' },
      pharmacy: { title: 'दवा उपलब्धता', description: 'स्थानीय फार्मेसियों में रीयल-टाइम दवा उपलब्धता जांचें', search: 'दवा खोजें...', checkStock: 'स्टॉक जांचें' }
    },
    pa: {
      title: 'ਮਰੀਜ਼ ਪੋਰਟਲ',
      subtitle: 'ਡਿਜੀਟਲ ਸਿਹਤ ਸੇਵਾ ਦਾ ਤੁਹਾਡਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ',
      register: { title: 'ਮਰੀਜ਼ ਰਜਿਸਟ੍ਰੇਸ਼ਨ', description: 'ਆਪਣੇ ਡਿਜੀਟਲ ਸਿਹਤ ਰਿਕਾਰਡ ਅਤੇ ਟੈਲੀਮੈਡੀਸਿਨ ਸੇਵਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਲਈ ਰਜਿਸਟਰ ਕਰੋ', name: 'ਪੂਰਾ ਨਾਮ', age: 'ਉਮਰ', phone: 'ਫੋਨ ਨੰਬਰ', address: 'ਪਤਾ', submit: 'ਰਜਿਸਟਰ ਕਰੋ', success: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਸਫਲ! ਤੁਹਾਡੀ ਮਰੀਜ਼ ਆਈਡੀ: ' },
      healthRecords: { title: 'ਸਿਹਤ ਰਿਕਾਰਡ', description: 'ਆਪਣਾ ਪੂਰਾ ਮੈਡੀਕਲ ਇਤਿਹਾਸ ਦੇਖੋ', noRecords: 'ਕੋਈ ਸਿਹਤ ਰਿਕਾਰਡ ਨਹੀਂ ਮਿਲਿਆ', viewAll: 'ਸਾਰੇ ਰਿਕਾਰਡ ਦੇਖੋ' },
      symptomChecker: { title: 'ਏਆਈ ਲੱਛਣ ਜਾਂਚਕਰਤਾ', description: 'ਏਆਈ-ਸੰਚਾਲਿਤ ਸਿਹਤ ਸਲਾਹ ਲਈ ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ', placeholder: 'ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ...', submit: 'ਲੱਛਣ ਜਾਂਚੋ', disclaimer: 'ਇਹ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਲਈ ਹੈ। ਮੈਡੀਕਲ ਸਲਾਹ ਲਈ ਹਮੇਸ਼ਾ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।' },
      telemedicine: { title: 'ਵੀਡੀਓ ਸਲਾਹ', description: 'ਸੁਰਖਿਅਤ ਵੀਡੀਓ ਕਾਲਾਂ ਰਾਹੀਂ ਯੋਗ ਡਾਕਟਰਾਂ ਨਾਲ ਜੁੜੋ', startCall: 'ਸਲਾਹ ਸ਼ੁਰੂ ਕਰੋ', schedule: 'ਮੁਲਾਕਾਤ ਸ਼ੈਡਿਊਲ ਕਰੋ' },
      pharmacy: { title: 'ਦਵਾਈ ਉਪਲਬਧਤਾ', description: 'ਸਥਾਨਕ ਫਾਰਮੇਸੀਆਂ ਵਿੱਚ ਰੀਅਲ-ਟਾਈਮ ਦਵਾਈ ਉਪਲਬਧਤਾ ਜਾਂਚੋ', search: 'ਦਵਾਈ ਖੋਜੋ...', checkStock: 'ਸਟਾਕ ਜਾਂਚੋ' }
    }
  };

  const t = translations[language];

  const generatePatientId = (name: string, phone: string) => {
    // Simple hash simulation - in real app, this would use SHA-256
    const combined = name + phone + Date.now();
    return 'PT' + Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    
    const newPatientId = generatePatientId(name, phone);
    setPatientId(newPatientId);
    setIsRegistered(true);
    setActiveTab('records');
  };

  const tabs = [
    { id: 'register', label: 'Register', icon: <User className="w-4 h-4" /> },
    { id: 'records', label: 'Health Records', icon: <FileText className="w-4 h-4" /> },
    { id: 'symptoms', label: 'Symptom Checker', icon: <Brain className="w-4 h-4" /> },
    { id: 'consult', label: 'Video Call', icon: <Video className="w-4 h-4" /> },
    { id: 'pharmacy', label: 'Pharmacy', icon: <Pill className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
          {patientId && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-primary font-medium">Patient ID: {patientId}</p>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'bg-gradient-primary text-white shadow-glow' 
                  : 'hover:border-primary/40'
              }`}
              disabled={!isRegistered && tab.id !== 'register'}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-slide-up">
          {activeTab === 'register' && (
            <Card className="max-w-2xl mx-auto shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <User className="w-6 h-6 text-primary" />
                  {t.register.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.register.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.register.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">{t.register.age}</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        required
                        className="mt-1"
                        placeholder="Enter your age"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">{t.register.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">{t.register.address}</Label>
                    <Textarea
                      id="address"
                      name="address"
                      required
                      className="mt-1"
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    {t.register.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'records' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  {t.healthRecords?.title || 'Health Records'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.healthRecords?.description || 'View your complete medical history'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    {t.healthRecords?.noRecords || 'No health records found'}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Record
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'symptoms' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Brain className="w-6 h-6 text-secondary" />
                  {t.symptomChecker?.title || 'AI Symptom Checker'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.symptomChecker?.description || 'Describe your symptoms to get AI-powered health advice'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="symptoms">Symptoms</Label>
                    <Textarea
                      id="symptoms"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder={t.symptomChecker?.placeholder || 'Describe your symptoms...'}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                    disabled={!symptoms.trim()}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    {t.symptomChecker?.submit || 'Check Symptoms'}
                  </Button>
                  
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <p className="text-sm text-destructive">
                      <Shield className="w-4 h-4 inline mr-2" />
                      {t.symptomChecker?.disclaimer || 'This is for informational purposes only. Always consult a doctor for medical advice.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'consult' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Video className="w-6 h-6 text-primary" />
                  {t.telemedicine?.title || 'Video Consultation'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.telemedicine?.description || 'Connect with qualified doctors through secure video calls'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div className="p-8 border-2 border-dashed border-primary/30 rounded-lg">
                    <Video className="w-20 h-20 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Ready to connect with a doctor?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-gradient-primary text-white hover:opacity-90 shadow-glow">
                        <Video className="w-4 h-4 mr-2" />
                        {t.telemedicine?.startCall || 'Start Consultation'}
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <Calendar className="w-4 h-4 mr-2" />
                        {t.telemedicine?.schedule || 'Schedule Appointment'}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'pharmacy' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Pill className="w-6 h-6 text-secondary" />
                  {t.pharmacy?.title || 'Medicine Availability'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.pharmacy?.description || 'Check real-time medicine availability at local pharmacies'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder={t.pharmacy?.search || 'Search medicine...'}
                      className="flex-1"
                    />
                    <Button className="bg-gradient-primary text-white hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      {t.pharmacy?.checkStock || 'Check Stock'}
                    </Button>
                  </div>
                  
                  <div className="text-center py-8">
                    <Pill className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Enter medicine name to check availability at nearby pharmacies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;