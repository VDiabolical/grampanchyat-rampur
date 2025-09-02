import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Schemes", href: "#schemes" },
    { name: "RTI Act", href: "#rti" },
    { name: "Tenders", href: "#tenders" },
    { name: "Downloads", href: "#downloads" }
  ];

  const governmentLinks = [
    { name: "Digital India", href: "https://digitalindia.gov.in" },
    { name: "Make in India", href: "https://makeinindia.com" },
    { name: "Swachh Bharat", href: "https://swachhbharatmission.gov.in" },
    { name: "PM-KISAN", href: "https://pmkisan.gov.in" },
    { name: "Ayushman Bharat", href: "https://pmjay.gov.in" },
    { name: "MyGov.in", href: "https://mygov.in" }
  ];

  const importantNumbers = [
    { service: "Police", number: "100" },
    { service: "Fire Brigade", number: "101" },
    { service: "Ambulance", number: "108" },
    { service: "Women Helpline", number: "1091" },
    { service: "Child Helpline", number: "1098" },
    { service: "Tourist Helpline", number: "1363" }
  ];

  return (
    <footer className="bg-government-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grampanchayat Rampur</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Committed to transparent governance, efficient service delivery, 
              and sustainable development of our village community.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Village Rampur, District Chandrapur</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91-9765246810</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>sangramrampur@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-government-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government Links</h3>
            <ul className="space-y-2">
              {governmentLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-government-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Numbers</h3>
            <ul className="space-y-2">
              {importantNumbers.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">{item.service}</span>
                  <span className="text-government-orange font-semibold text-sm">
                    {item.number}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Social Media & Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/80">Follow us:</span>
            <div className="flex gap-3">
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-white/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80">
              © 2025 Grampanchayat Rampur. All rights reserved.
            </p>
          </div>
        </div>

        {/* Website Policies */}
        <Separator className="my-6 bg-white/20" />
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60">
            <a href="#privacy" className="hover:text-government-orange transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-government-orange transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#accessibility" className="hover:text-government-orange transition-colors">
              Accessibility Statement
            </a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-government-orange transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;