import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Home, GraduationCap, Briefcase } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Statistics = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      title: t('total.population'),
      value: "3911",
      change: "+2.5%",
      color: "text-government-blue"
    },
    {
      icon: Home,
      title: t('total.households'),
      value: "1278",
      change: "+1.8%",
      color: "text-government-orange"
    },
    {
      icon: GraduationCap,
      title: t('LGD code'),
      value: "245277",
      change: "",
      color: "text-green-600"
    },
    {
      icon: Briefcase,
      title: t('Female Ratio'),
      value: "88%",
      change: "+3.1%",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="statistics" className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-government-blue mb-4">
            {t('village.statistics')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="hover:shadow-government transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-government-blue/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                  </div>
                  <span className="text-xs md:text-sm text-green-600 font-semibold">
                    {stat.change}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardTitle className="text-xl md:text-2xl font-bold text-government-blue mb-1">
                  {stat.value}
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;