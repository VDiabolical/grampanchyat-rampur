import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Users, Briefcase, Phone } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import heroImage from "@/assets/hero-village.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const quickLinks = [
    {
      icon: FileText,
      title: t('apply.certificate'),
      description: t('birth.death.certificates'),
      href: "#certificates"
    },
    {
      icon: Users,
      title: t('grievance.portal'),
      description: t('register.complaints'),
      href: "#grievance"
    },
    {
      icon: Briefcase,
      title: t('government.schemes'),
      description: t('view.available.schemes'),
      href: "#schemes"
    },
    {
      icon: Phone,
      title: t('emergency.services'),
      description: t('important.contacts'),
      href: "#emergency"
    }
  ];

  return (
    <section id="home" className="relative">
      {/* Hero background */}
      <div 
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-government-blue/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('welcome.to')} <br />
              <span className="text-government-orange">{t('gram.panchayat.rampur')}</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="bg-government-orange hover:bg-government-orange/90 text-white border-0 text-sm md:text-base"
              >
                {t('citizen.services')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-government-blue text-sm md:text-base"
              >
                {t('view.announcements')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick access cards */}
      <div className="relative -mt-16 md:-mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className="p-4 md:p-6 bg-gradient-card shadow-card-government hover:shadow-government transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-government-blue/10 rounded-lg flex items-center justify-center group-hover:bg-government-orange/10 transition-colors">
                    <link.icon className="w-5 h-5 md:w-6 md:h-6 text-government-blue group-hover:text-government-orange transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-government-blue mb-2 text-sm md:text-base">
                      {link.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;