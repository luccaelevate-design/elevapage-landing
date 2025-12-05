import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-forklift.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Empilhadeira industrial em operação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Soluções em
            <span className="block text-industrial-yellow">Empilhadeiras</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            Vendas, locação, manutenção e peças para empilhadeiras. 
            Mais de 20 anos de experiência no mercado industrial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Button size="lg" variant="industrial" className="min-w-[200px]" asChild>
              <a href="http://wa.me/5511985508149" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            <div className="text-center">
              <div className="text-4xl font-bold text-industrial-yellow mb-2">500+</div>
              <div className="text-primary-foreground/80">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-industrial-yellow mb-2">20+</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-industrial-yellow mb-2">24h</div>
              <div className="text-primary-foreground/80">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
