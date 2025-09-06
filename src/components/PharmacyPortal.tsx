import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Pill, 
  Package, 
  Plus,
  Search,
  Edit,
  Shield,
  BarChart3,
  TrendingUp,
  Users,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface PharmacyPortalProps {
  language?: 'en' | 'hi' | 'pa';
}

const PharmacyPortal = ({ language = 'en' }: PharmacyPortalProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      stock: 150,
      price: 5.50,
      status: 'In Stock'
    },
    {
      id: 2,
      name: 'Metformin 500mg',
      category: 'Diabetes',
      stock: 75,
      price: 12.00,
      status: 'In Stock'
    },
    {
      id: 3,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotic',
      stock: 5,
      price: 25.00,
      status: 'Low Stock'
    },
    {
      id: 4,
      name: 'Omeprazole 20mg',
      category: 'Gastric',
      stock: 0,
      price: 18.50,
      status: 'Out of Stock'
    }
  ]);

  const translations = {
    en: {
      title: 'Pharmacy Portal',
      subtitle: 'Manage medicine inventory and serve patients',
      login: {
        title: 'Pharmacy Login',
        description: 'Secure access to inventory management system',
        email: 'Email Address',
        password: 'Password',
        submit: 'Login',
        forgotPassword: 'Forgot Password?'
      },
      inventory: {
        title: 'Medicine Inventory',
        description: 'Manage your medicine stock and availability',
        search: 'Search medicines...',
        addNew: 'Add New Medicine',
        name: 'Medicine Name',
        category: 'Category',
        stock: 'Stock Quantity',
        price: 'Price (₹)',
        status: 'Status',
        actions: 'Actions',
        edit: 'Edit',
        update: 'Update Stock'
      },
      requests: {
        title: 'Patient Requests',
        description: 'View and respond to patient medicine requests',
        patient: 'Patient',
        medicine: 'Requested Medicine',
        quantity: 'Quantity',
        status: 'Status',
        respond: 'Respond'
      },
      analytics: {
        title: 'Analytics',
        description: 'View sales and inventory analytics',
        totalMedicines: 'Total Medicines',
        lowStock: 'Low Stock Items',
        requests: 'Patient Requests',
        revenue: 'Monthly Revenue'
      }
    },
    hi: {
      title: 'फार्मेसी पोर्टल',
      subtitle: 'दवा इन्वेंटरी का प्रबंधन करें और मरीजों की सेवा करें',
      login: {
        title: 'फार्मेसी लॉगिन',
        description: 'इन्वेंटरी प्रबंधन प्रणाली तक सुरक्षित पहुंच',
        email: 'ईमेल पता',
        password: 'पासवर्ड',
        submit: 'लॉगिन',
        forgotPassword: 'पासवर्ड भूल गए?'
      }
    },
    pa: {
      title: 'ਫਾਰਮੇਸੀ ਪੋਰਟਲ',
      subtitle: 'ਦਵਾਈ ਦੀ ਸੂਚੀ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ ਅਤੇ ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ ਕਰੋ',
      login: {
        title: 'ਫਾਰਮੇਸੀ ਲਾਗਇਨ',
        description: 'ਸੂਚੀ ਪ੍ਰਬੰਧਨ ਸਿਸਟਮ ਤੱਕ ਸੁਰਖਿਅਤ ਪਹੁੰਚ',
        email: 'ਈਮੇਲ ਪਤਾ',
        password: 'ਪਾਸਵਰਡ',
        submit: 'ਲਾਗਇਨ',
        forgotPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?'
      }
    }
  };

  const t = translations[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveTab('inventory');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'text-secondary';
      case 'Low Stock': return 'text-destructive';
      case 'Out of Stock': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Stock': return <CheckCircle className="w-4 h-4 text-secondary" />;
      case 'Low Stock': return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case 'Out of Stock': return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
      default: return null;
    }
  };

  const tabs = [
    { id: 'login', label: 'Login', icon: <Shield className="w-4 h-4" /> },
    { id: 'inventory', label: 'Inventory', icon: <Package className="w-4 h-4" /> },
    { id: 'requests', label: 'Requests', icon: <Users className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const mockRequests = [
    {
      id: 1,
      patient: 'Rajesh Kumar (PT12345678)',
      medicine: 'Paracetamol 500mg',
      quantity: 10,
      status: 'Pending',
      requestDate: '2024-01-20'
    },
    {
      id: 2,
      patient: 'Priya Sharma (PT87654321)',
      medicine: 'Metformin 500mg',
      quantity: 30,
      status: 'Available',
      requestDate: '2024-01-19'
    }
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
                  <Pill className="w-6 h-6 text-primary" />
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
                      placeholder="pharmacy@store.com"
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

          {activeTab === 'inventory' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Package className="w-6 h-6 text-primary" />
                  {t.inventory?.title || 'Medicine Inventory'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.inventory?.description || 'Manage your medicine stock and availability'}
                </CardDescription>
                
                <div className="flex gap-2 mt-4">
                  <Input
                    type="text"
                    placeholder={t.inventory?.search || 'Search medicines...'}
                    className="flex-1"
                  />
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button className="bg-gradient-primary text-white hover:opacity-90">
                    <Plus className="w-4 h-4 mr-2" />
                    {t.inventory?.addNew || 'Add New'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2">{t.inventory?.name || 'Medicine Name'}</th>
                        <th className="text-left p-2">{t.inventory?.category || 'Category'}</th>
                        <th className="text-left p-2">{t.inventory?.stock || 'Stock'}</th>
                        <th className="text-left p-2">{t.inventory?.price || 'Price'}</th>
                        <th className="text-left p-2">{t.inventory?.status || 'Status'}</th>
                        <th className="text-left p-2">{t.inventory?.actions || 'Actions'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.map((medicine) => (
                        <tr key={medicine.id} className="border-b border-border/50">
                          <td className="p-2 font-medium">{medicine.name}</td>
                          <td className="p-2 text-muted-foreground">{medicine.category}</td>
                          <td className="p-2">
                            <span className={medicine.stock < 10 ? 'text-destructive font-medium' : ''}>
                              {medicine.stock}
                            </span>
                          </td>
                          <td className="p-2">₹{medicine.price}</td>
                          <td className="p-2">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(medicine.status)}
                              <span className={getStatusColor(medicine.status)}>
                                {medicine.status}
                              </span>
                            </div>
                          </td>
                          <td className="p-2">
                            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                              <Edit className="w-3 h-3 mr-1" />
                              {t.inventory?.edit || 'Edit'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'requests' && (
            <Card className="shadow-medical bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  {t.requests?.title || 'Patient Requests'}
                </CardTitle>
                <CardDescription className="text-base">
                  {t.requests?.description || 'View and respond to patient medicine requests'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRequests.map((request) => (
                    <Card key={request.id} className="border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="font-semibold">{request.patient}</div>
                            <div className="text-muted-foreground">
                              Requested: <span className="font-medium">{request.medicine}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Quantity: {request.quantity} units
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Request Date: {request.requestDate}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2 items-end">
                            <div className={`px-2 py-1 rounded text-sm ${
                              request.status === 'Available' 
                                ? 'bg-secondary/20 text-secondary' 
                                : 'bg-destructive/20 text-destructive'
                            }`}>
                              {request.status}
                            </div>
                            <Button 
                              size="sm"
                              className="bg-gradient-primary text-white hover:opacity-90"
                            >
                              {t.requests?.respond || 'Respond'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="shadow-soft bg-gradient-card border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {t.analytics?.totalMedicines || 'Total Medicines'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{medicines.length}</div>
                    <div className="flex items-center text-xs text-secondary">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +2 this month
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft bg-gradient-card border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {t.analytics?.lowStock || 'Low Stock Items'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">
                      {medicines.filter(m => m.stock < 10).length}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Needs attention
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft bg-gradient-card border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {t.analytics?.requests || 'Patient Requests'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockRequests.length}</div>
                    <div className="text-xs text-muted-foreground">
                      This week
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft bg-gradient-card border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {t.analytics?.revenue || 'Monthly Revenue'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹45,230</div>
                    <div className="flex items-center text-xs text-secondary">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12% from last month
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Analytics Chart Placeholder */}
              <Card className="shadow-medical bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    {t.analytics?.title || 'Analytics'}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t.analytics?.description || 'View sales and inventory analytics'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-primary/30 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Analytics charts will be displayed here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyPortal;