import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'gram.panchayat.rampur': 'Grampanchayat Rampur',
    'district.rampur': 'District Rampur, State Government',
    'hindi.english': 'Hindi | English',
    'font.size': 'A+ | A | A-',
    'phone': '+91-1234567890',
    'email': 'rampur.gp@gov.in',
    'digital.india': 'Digital India Initiative | Make in India',
    
    // Navigation
    'home': 'Home',
    'images': 'Images',
    'announcements': 'Announcements',
    'contact': 'Contact',
    'statistics': 'Statistics',
    'schemes': 'Schemes',
    
    // Hero
    'welcome.to': 'Welcome to',
    'hero.description': 'Serving our community with transparency, efficiency, and dedication. Your local government working for you.',
    'citizen.services': 'Citizen Services',
    'view.announcements': 'View Announcements',
    
    // Quick Links
    'apply.certificate': 'Apply for Certificate',
    'birth.death.certificates': 'Birth, Death, Income certificates',
    'grievance.portal': 'Grievance Portal',
    'register.complaints': 'Register your complaints',
    'government.schemes': 'Government Schemes',
    'view.available.schemes': 'View available schemes',
    'emergency.services': 'Emergency Services',
    'important.contacts': 'Important contact numbers',
    
    // Services
    'citizen.services.title': 'Citizen Services',
    'services.description': 'Access all government services online with ease and transparency. Your one-stop destination for all administrative needs.',
    'certificate.services': 'Certificate Services',
    'certificate.description': 'Apply for birth, death, caste, income, and residence certificates',
    'property.services': 'Property Services',
    'property.description': 'Property registration, mutation, and land records',
    'welfare.schemes': 'Welfare Schemes',
    'welfare.description': 'Government welfare schemes and social security programs',
    'financial.services': 'Financial Services',
    'financial.description': 'Tax collection, payments, and financial assistance',
    'employment.services': 'Employment Services',
    'employment.description': 'Job opportunities and skill development programs',
    'grievance.redressal': 'Grievance Redressal',
    'grievance.description': 'Submit complaints and track resolution status',
    'access.service': 'Access Service',
    
    // Announcements
    'latest.announcements': 'Latest Announcements',
    'announcements.description': 'Stay updated with the latest news, notices, and important announcements from Grampanchayat Rampur.',
    'read.more': 'Read More',
    'view.all.announcements': 'View All Announcements',
    
    // Statistics
    'village.statistics': 'Village Statistics',
    'stats.description': 'Key statistics and demographic information about Grampanchayat Rampur',
    'total.population': 'Total Population',
    'total.households': 'Total Households',
    'literacy.rate': 'Literacy Rate',
    'employed.population': 'Employed Population',
    
    // Images
    'village.gallery': 'Village Gallery',
    'gallery.description': 'Explore the beauty and development of Grampanchayat Rampur through our photo gallery',
    'view.gallery': 'View Gallery',
    
    // Schemes
    'government.schemes.title': 'Government Schemes',
    'schemes.description': 'Various government schemes and welfare programs available for the residents of Grampanchayat Rampur',
    'apply.now': 'Apply Now',
    'learn.more': 'Learn More',
    
    // Contact
    'contact.us': 'Contact Us',
    'contact.description': 'Get in touch with us for any queries, suggestions, or assistance. We are here to serve you.',
    'office.address': 'Office Address',
    'working.hours': 'Working Hours',
    'monday.friday': 'Monday - Friday: 9:00 AM - 5:00 PM',
    'saturday': 'Saturday: 9:00 AM - 1:00 PM',
    'sunday.closed': 'Sunday: Closed',
    'send.message': 'Send Message',
    'your.name': 'Your Name',
    'your.email': 'Your Email',
    'subject': 'Subject',
    'your.message': 'Your Message',
    'send': 'Send',
  },
  mr: {
    // Header
    'gram.panchayat.rampur': 'ग्राम पंचायत रामपुर',
    'district.rampur': 'जिल्हा रामपुर, राज्य सरकार',
    'hindi.english': 'हिंदी | मराठी',
    'font.size': 'अ+ | अ | अ-',
    'phone': '+९१-१२३४५६७८९०',
    'email': 'rampur.gp@gov.in',
    'digital.india': 'डिजिटल इंडिया उपक्रम | मेक इन इंडिया',
    
    // Navigation
    'home': 'मुख्यपृष्ठ',
    'images': 'छायाचित्रे',
    'announcements': 'घोषणा',
    'contact': 'संपर्क',
    'statistics': 'आकडेवारी',
    'schemes': 'योजना',
    
    // Hero
    'welcome.to': 'स्वागत आहे',
    'hero.description': 'पारदर्शकता, कार्यक्षमता आणि समर्पणाने आमच्या समुदायाची सेवा करत आहोत. तुमची स्थानिक सरकार तुमच्यासाठी काम करत आहे.',
    'citizen.services': 'नागरिक सेवा',
    'view.announcements': 'घोषणा पहा',
    
    // Quick Links
    'apply.certificate': 'प्रमाणपत्रासाठी अर्ज करा',
    'birth.death.certificates': 'जन्म, मृत्यू, उत्पन्न प्रमाणपत्रे',
    'grievance.portal': 'तक्रार पोर्टल',
    'register.complaints': 'तुमच्या तक्रारी नोंदवा',
    'government.schemes': 'सरकारी योजना',
    'view.available.schemes': 'उपलब्ध योजना पहा',
    'emergency.services': 'आपत्कालीन सेवा',
    'important.contacts': 'महत्वाचे संपर्क क्रमांक',
    
    // Services
    'citizen.services.title': 'नागरिक सेवा',
    'services.description': 'सुलभतेने आणि पारदर्शकतेने सर्व सरकारी सेवांचा ऑनलाइन वापर करा. तुमच्या सर्व प्रशासकीय गरजांसाठी एकच ठिकाण.',
    'certificate.services': 'प्रमाणपत्र सेवा',
    'certificate.description': 'जन्म, मृत्यू, जात, उत्पन्न आणि निवास प्रमाणपत्रांसाठी अर्ज करा',
    'property.services': 'मालमत्ता सेवा',
    'property.description': 'मालमत्ता नोंदणी, उत्परिवर्तन आणि जमीन नोंदी',
    'welfare.schemes': 'कल्याणकारी योजना',
    'welfare.description': 'सरकारी कल्याणकारी योजना आणि सामाजिक सुरक्षा कार्यक्रम',
    'financial.services': 'आर्थिक सेवा',
    'financial.description': 'कर संकलन, देयके आणि आर्थिक सहाय्य',
    'employment.services': 'रोजगार सेवा',
    'employment.description': 'नोकरीच्या संधी आणि कौशल्य विकास कार्यक्रम',
    'grievance.redressal': 'तक्रार निवारण',
    'grievance.description': 'तक्रारी सादर करा आणि निराकरण स्थितीचा मागोवा घ्या',
    'access.service': 'सेवा वापरा',
    
    // Announcements
    'latest.announcements': 'नवीनतम घोषणा',
    'announcements.description': 'ग्राम पंचायत रामपुर कडून नवीनतम बातम्या, सूचना आणि महत्वाच्या घोषणांसह अद्यतन रहा.',
    'read.more': 'अधिक वाचा',
    'view.all.announcements': 'सर्व घोषणा पहा',
    
    // Statistics
    'village.statistics': 'गावाची आकडेवारी',
    'stats.description': 'ग्राम पंचायत रामपुर बद्दल मुख्य आकडेवारी आणि लोकसंख्येची माहिती',
    'total.population': 'एकूण लोकसंख्या',
    'total.households': 'एकूण कुटुंबे',
    'literacy.rate': 'साक्षरता दर',
    'employed.population': 'रोजगार असलेली लोकसंख्या',
    
    // Images
    'village.gallery': 'गावाची गॅलरी',
    'gallery.description': 'आमच्या फोटो गॅलरीतून ग्राम पंचायत रामपुरचे सौंदर्य आणि विकास पहा',
    'view.gallery': 'गॅलरी पहा',
    
    // Schemes
    'government.schemes.title': 'सरकारी योजना',
    'schemes.description': 'ग्राम पंचायत रामपुरच्या रहिवाशांसाठी उपलब्ध विविध सरकारी योजना आणि कल्याणकारी कार्यक्रम',
    'apply.now': 'आता अर्ज करा',
    'learn.more': 'अधिक जाणून घ्या',
    
    // Contact
    'contact.us': 'आमच्याशी संपर्क साधा',
    'contact.description': 'कोणत्याही प्रश्न, सूचना किंवा सहाय्यासाठी आमच्याशी संपर्क साधा. आम्ही तुमची सेवा करण्यासाठी येथे आहोत.',
    'office.address': 'कार्यालयाचा पत्ता',
    'working.hours': 'कामाचे तास',
    'monday.friday': 'सोमवार - शुक्रवार: सकाळी ९:०० - संध्याकाळी ५:००',
    'saturday': 'शनिवार: सकाळी ९:०० - दुपारी १:००',
    'sunday.closed': 'रविवार: बंद',
    'send.message': 'संदेश पाठवा',
    'your.name': 'तुमचे नाव',
    'your.email': 'तुमचा ईमेल',
    'subject': 'विषय',
    'your.message': 'तुमचा संदेश',
    'send': 'पाठवा',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};