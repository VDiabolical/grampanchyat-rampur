import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/contexts/TranslationContext";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User,
  Calendar
} from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: MapPin,
      title: t('office.address'),
      details: ["Grampanchayat Office, Village Rampur","District Chandrapur"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [`Office: ${t('+91 9765246810')}` ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [t('sangramrampur@gmail.com')]
    },
    {
      icon: Clock,
      title: t('working.hours'),
      details: [t('monday.friday'), t('saturday'), t('sunday.closed')]
    }
  ];

  const officials = [
    {
      name: "Smt. Nikita Zade",
      position: "Sarpanch",
      phone: "+91-7218266300",
    },
    {
      name: "Shri. Rahul Bankar",
      position: "Up-Sarpanch",
      phone: "+91-7020572195",
    },
    {
      name: "Shri. Sachin Virutkar",
      position: "Village Development Officer",
      phone: "+91-9765246810",

    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-government-blue mb-4">
            {t('contact.us')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-government-blue/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-government-blue" />
                    </div>
                    <CardTitle className="text-government-blue text-lg">
                      {info.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-government-blue">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-government-blue mb-2 block">
                      Full Name *
                    </label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-government-blue mb-2 block">
                      Phone Number *
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    Subject *
                  </label>
                  <Input placeholder="Enter the subject of your message" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-government-blue mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Enter your message here..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-government-blue hover:bg-government-blue/90"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Officials Information */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-government-blue mb-8 text-center">
            Key Officials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officials.map((official, index) => (
              <Card key={index} className="text-center bg-gradient-card">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-government-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-government-blue" />
                  </div>
                  <CardTitle className="text-government-blue">{official.name}</CardTitle>
                  <CardDescription className="text-government-orange font-medium">
                    {official.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {official.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;