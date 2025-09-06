import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Stethoscope, 
  Users, 
  FileText, 
  Video, 
  Plus,
  Search,
  Calendar,
  Shield,
  User,
  Phone,
  Mail,
  Clock,
  Activity
} from 'lucide-react';

interface DoctorPortalProps {
  language?: 'en' | 'hi' | 'pa';
}

const DoctorPortal = ({ language = 'en' }: DoctorPortalProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const translations = {
    en: {
      title: 'Doctor Portal',
      subtitle: 'Manage patients and provide quality healthcare',
      login: {
        title: 'Doctor Login',
        description: 'Secure access to patient management system',
        email: 'Email Address',
        password: 'Password',
        submit: 'Login',
        forgotPassword: 'Forgot Password?'
      },
      patients: {
        title: 'Patient Management',
        description: 'View and manage your assigned patients',
        search: 'Search patients...',
        noPatients: 'No patients assigned',
        viewRecords: 'View Records',
        addRecord: 'Add Record'
      },
      records: {
        title: 'Health Records',
        description: 'Add and update patient health records',
        symptoms: 'Symptoms',
        diagnosis: 'Diagnosis',
        prescription: 'Prescription',
        notes: 'Clinical Notes',
        save: 'Save Record'
      },
      consultations: {
        title: 'Video Consultations',
        description: 'Manage telemedicine appointments',
        upcoming: 'Upcoming Consultations',
        join: 'Join Call',
        schedule: 'Schedule New'
      }
    },
    hi: {
      title: 'डॉक्टर पोर्टल',
      subtitle: 'मरीजों का प्रबंधन करें और गुणवत्तापूर्ण स्वास्थ्य सेवा प्रदान करें',
      login: {
        title: 'डॉक्टर लॉगिन',
        description: 'मरीज़ प्रबंधन प्रणाली तक सुरक्षित पहुंच',
        email: 'ईमेल पता',
        password: 'पासवर्ड',
        submit: 'लॉगिन',
        forgotPassword: 'पासवर्ड भूल गए?'
      },
      patients: { title: 'मरीज़ प्रबंधन', description: 'मरीजों को देखें और प्रबंधित करें', search: 'मरीज़ खोजें...', noPatients: 'कोई मरीज़ नहीं', viewRecords: 'रिकॉर्ड देखें', addRecord: 'रिकॉर्ड जोड़ें' },
      records: { title: 'स्वास्थ्य रिकॉर्ड', description: 'मरीज़ के स्वास्थ्य रिकॉर्ड जोड़ें और अपडेट करें', symptoms: 'लक्षण', diagnosis: 'निदान', prescription: 'नुस्खा', notes: 'क्लिनिकल नोट्स', save: 'रिकॉर्ड सहेजें' },
      consultations: { title: 'वीडियो परामर्श', description: 'टेलीमेडिसिन अपॉइंटमेंट प्रबंधित करें', upcoming: 'आने वाले परामर्श', join: 'कॉल में शामिल हों', schedule: 'नया शेड्यूल करें' }
    },
    pa: {
      title: 'ਡਾਕਟਰ ਪੋਰਟਲ',
      subtitle: 'ਮਰੀਜ਼ਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ ਅਤੇ ਗੁਣਵੱਤਾ ਸਿਹਤ ਸੇਵਾ ਪ੍ਰਦਾਨ ਕਰੋ',
      login: {
        title: 'ਡਾਕਟਰ ਲਾਗਇਨ',
        description: 'ਮਰੀਜ਼ ਪ੍ਰਬੰਧਨ ਸਿਸਟਮ ਤੱਕ ਸੁਰਖਿਅਤ ਪਹੁੰਚ',
        email: 'ਈਮੇਲ ਪਤਾ',
        password: 'ਪਾਸਵਰਡ',
        submit: 'ਲਾਗਇਨ',
        forgotPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?'
      },
      patients: { title: 'ਮਰੀਜ਼ ਪ੍ਰਬੰਧਨ', description: 'ਮਰੀਜ਼ਾਂ ਨੂੰ ਦੇਖੋ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ', search: 'ਮਰੀਜ਼ ਖੋਜੋ...', noPatients: 'ਕੋਈ ਮਰੀਜ਼ ਨਹੀਂ', viewRecords: 'ਰਿਕਾਰਡ ਦੇਖੋ', addRecord: 'ਰਿਕਾਰਡ ਜੋੜੋ' },
      records: { title: 'ਸਿਹਤ ਰਿਕਾਰਡ', description: 'ਮਰੀਜ਼ ਦੇ ਸਿਹਤ ਰਿਕਾਰਡ ਜੋੜੋ ਅਤੇ ਅਪਡੇਟ ਕਰੋ', symptoms: 'ਲੱਛਣ', diagnosis: 'ਨਿਦਾਨ', prescription: 'ਨੁਸਖਾ', notes: 'ਕਲੀਨਿਕਲ ਨੋਟਸ', save: 'ਰਿਕਾਰਡ ਸੇਵ ਕਰੋ' },
      consultations: { title: 'ਵੀਡੀਓ ਸਲਾਹ', description: 'ਟੈਲੀਮੈਡੀਸਿਨ ਮੁਲਾਕਾਤਾਂ ਪ੍ਰਬੰਧਿਤ ਕਰੋ', upcoming: 'ਆਉਣ ਵਾਲੀਆਂ ਸਲਾਹਾਂ', join: 'ਕਾਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ', schedule: 'ਨਵਾਂ ਸ਼ੈਡਿਊਲ ਕਰੋ' }
    }
  };

  const t = translations[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveTab('patients');
  };

  const mockPatients = [
    {
      id: 'PT12345678',
      name: 'Rajesh Kumar',
      age: 45,
      phone: '+91 9876543210',
      lastVisit: '2024-01-15',
      condition: 'Hypertension',
      nextAppointment: '2024-01-25 10:00 AM'
    },
    {
      id: 'PT87654321',
      name: 'Priya Sharma',
      age: 32,
      phone: '+91 9876543211',
      lastVisit: '2024-01-10',
      condition: 'Diabetes Type 2',
      nextAppointment: '2024-01-24 2:00 PM'
    }
  ];

  const tabs = [
    { id: 'login', label: 'Login', icon: <Shield className="w-4 h-4" /> },
    { id: 'patients', label: 'Patients', icon: <Users className="w-4 h-4" /> },
    { id: 'records', label: 'Records', icon: <FileText className="w-4 h-4" /> },
    { id: 'consult', label: 'Video Calls', icon: <Video className="w-4 h-4" /> }
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
              disabled={!isLoggedIn && tab.id !== 'login'}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-slide-up">
          {activeTab === 'login' && (
            <Card className="max-w-md mx-auto shadow-medical bg-gradient-card border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Stethoscope className="w-6 h-6 text-primary" />
                  {t.login.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.login.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">{t.login.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                      placeholder="doctor@hospital.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">{t.login.password}</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="mt-1"
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    {t.login.submit}
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-primary">
                      {t.login.forgotPassword}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'patients' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  {t.patients?.title || 'Patient Management'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.patients?.description || 'View and manage your assigned patients'}
                </CardDescription>
                
                <div className="flex gap-2 mt-4">
                  <Input
                    type="text"
                    placeholder={t.patients?.search || 'Search patients...'}
                    className="flex-1"
                  />
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {mockPatients.map((patient) => (
                    <Card key={patient.id} className="border-primary/20 hover:border-primary/40 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-primary" />
                              <span className="font-semibold">{patient.name}</span>
                              <span className="text-sm text-muted-foreground">({patient.age} years)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="w-3 h-3" />
                              {patient.phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Activity className="w-3 h-3 text-secondary" />
                              <span className="text-secondary font-medium">{patient.condition}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              Last visit: {patient.lastVisit}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary/10"
                              onClick={() => {
                                setSelectedPatient(patient);
                                setActiveTab('records');
                              }}
                            >
                              <FileText className="w-3 h-3 mr-1" />
                              View Records
                            </Button>
                            <Button 
                              size="sm"
                              className="bg-gradient-primary text-white hover:opacity-90"
                              onClick={() => setActiveTab('consult')}
                            >
                              <Video className="w-3 h-3 mr-1" />
                              Video Call
                            </Button>
                          </div>
                        </div>
                        
                        {patient.nextAppointment && (
                          <div className="mt-3 p-2 bg-primary/10 rounded text-sm">
                            <div className="flex items-center gap-2 text-primary">
                              <Calendar className="w-3 h-3" />
                              Next: {patient.nextAppointment}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'records' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  {t.records?.title || 'Health Records'}
                  {selectedPatient && (
                    <span className="text-lg text-muted-foreground">
                      - {selectedPatient.name}
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.records?.description || 'Add and update patient health records'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="symptoms">{t.records?.symptoms || 'Symptoms'}</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Patient reported symptoms..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="diagnosis">{t.records?.diagnosis || 'Diagnosis'}</Label>
                      <Textarea
                        id="diagnosis"
                        placeholder="Clinical diagnosis..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="prescription">{t.records?.prescription || 'Prescription'}</Label>
                    <Textarea
                      id="prescription"
                      placeholder="Prescribed medications and dosage..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">{t.records?.notes || 'Clinical Notes'}</Label>
                    <Textarea
                      id="notes"
                      placeholder="Additional clinical observations and recommendations..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t.records?.save || 'Save Record'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {activeTab === 'consult' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Video className="w-6 h-6 text-primary" />
                  {t.consultations?.title || 'Video Consultations'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.consultations?.description || 'Manage telemedicine appointments'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t.consultations?.upcoming || 'Upcoming Consultations'}
                    </h3>
                    
                    <div className="grid gap-4">
                      {mockPatients.map((patient) => (
                        <Card key={patient.id} className="border-primary/20">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <User className="w-4 h-4 text-primary" />
                                  <span className="font-semibold">{patient.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  {patient.nextAppointment}
                                </div>
                              </div>
                              
                              <Button className="bg-gradient-primary text-white hover:opacity-90 shadow-glow">
                                <Video className="w-4 h-4 mr-2" />
                                {t.consultations?.join || 'Join Call'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center pt-6 border-t border-border">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {t.consultations?.schedule || 'Schedule New Consultation'}
                    </Button>
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

export default DoctorPortal;