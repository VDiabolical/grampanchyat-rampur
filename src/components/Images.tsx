import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";

const Images = () => {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: img1,
      alt: "Village development project",
      title: "Republic day"
    },
    {
      src: img2,
      alt: "Community meeting",
      title: "Cleaning Drive"
    },
    {
      src: img3,
      alt: "Rural landscape",
      title: "Tree plantation"
    },
    {
      src: img4,
      alt: "Rural landscape",
      title: "Tree plantation"
    },
    {
      src: img5,
      alt: "Village development project",
      title: "Gram Sabha"
    },
    {
      src: img6,
      alt: "Village development project",
      title: "Eco-Friendly Raksha Bandhan"
    },
    
  ];

  return (
    <section id="images" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-government-blue mb-4">
            {t('village.gallery')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-government transition-all duration-300 hover:-translate-y-1 bg-gradient-card group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-government-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/90 text-government-blue hover:bg-white"
                  >
                    {t('view.gallery')}
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-government-blue text-sm md:text-base">
                  {image.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg" 
            className="bg-government-blue hover:bg-government-blue/90"
          >
            {t('view.gallery')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Images;