import { useState } from "react";
import { Menu, X, Phone, Mail, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import govtEmblem from "@/assets/govt-emblem.png";

interface HeaderProps {
  onDashboardToggle: () => void;
}

const Header = ({ onDashboardToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useTranslation();

  const navItems = [
    { name: t('home'), href: "#home" },
    { name: t('images'), href: "#images" },
    { name: t('announcements'), href: "#announcements" },
    { name: t('statistics'), href: "#statistics" },
    { name: t('contact'), href: "#contact" },
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-government-blue text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 gap-2 sm:gap-0">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t('+91 9765246810')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t('sangramrampur@gmail.com')}</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span>{t('digital.india')}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-government sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          {/* Logo and title section */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <div className="flex items-center space-x-2 md:space-x-4">
              <img 
                src={govtEmblem} 
                alt="Government of India Emblem" 
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-government-blue">
                  {t('gram.panchayat.rampur')}
                </h1>
                <p className="text-sm md:text-lg text-government-blue">
                  District Chandrapur
                </p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2"
              >
                <Languages className="w-4 h-4" />
                {language === 'en' ? 'मराठी' : 'English'}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={onDashboardToggle}
              >
                Admin
              </Button>
            </div>
            
            {/* Mobile translate button */}
            <div className="lg:hidden">
              <Button 
                variant="outline" 
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1"
              >
                <Languages className="w-3 h-3" />
                <span className="text-xs">
                  {language === 'en' ? 'मर' : 'En'}
                </span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-4">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-government-blue hover:bg-government-light-blue rounded-sm transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-border mt-2 pb-4">
                <div className="flex flex-col space-y-2 pt-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-government-blue hover:bg-government-light-blue rounded-sm transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;