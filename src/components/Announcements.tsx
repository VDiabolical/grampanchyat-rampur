import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/contexts/TranslationContext";
import { Calendar, Bell, FileText, Users } from "lucide-react";

const Announcements = () => {
  const { t } = useTranslation();
  const announcements = [
    {
      id: 3,
      title: "Water Supply Maintenance Schedule",
      description: "Scheduled maintenance of water supply systems in sectors A and B. Supply will be restored by evening.",
      date: "2024-09-23",
      category: "Maintenance",
      priority: "medium",
      icon: Bell
    },
    {
      id: 4,
      title: "Property Tax Collection Drive",
      description: "Last date for property tax payment extended to March 31st. Pay online or visit the office during working hours.",
      date: "2024-09-18",
      category: "Tax",
      priority: "high",
      icon: Calendar
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <section id="announcements" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-government-blue mb-4">
            {t('latest.announcements')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('announcements.description')}
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {announcements.map((announcement) => (
            <Card 
              key={announcement.id}
              className="hover:shadow-government transition-all duration-300 bg-gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-3 md:gap-4 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-government-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <announcement.icon className="w-5 h-5 md:w-6 md:h-6 text-government-blue" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-government-blue mb-2 text-lg md:text-xl">
                        {announcement.title}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base">
                        {announcement.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${getPriorityColor(announcement.priority)} text-xs`}
                  >
                    {announcement.priority.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{new Date(announcement.date).toLocaleDateString('en-IN')}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs w-fit">
                      {announcement.category}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs md:text-sm">
                    {t('read.more')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            className="bg-government-blue hover:bg-government-blue/90"
          >
            {t('view.all.announcements')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Announcements;