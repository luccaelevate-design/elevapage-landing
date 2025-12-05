import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Contato", href: "#contato" },
  ];

  const services = [
    "Venda de Empilhadeiras",
    "Locação de Equipamentos",
    "Manutenção Técnica",
    "Peças Originais",
    "Treinamento",
    "Suporte Técnico",
  ];


  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-industrial-yellow">DG Empilhadeiras</h3>
            <p className="text-primary-foreground/80">
              Há mais de 20 anos oferecendo as melhores soluções em empilhadeiras 
              para empresas de todos os portes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-industrial-yellow" />
                <span className="text-sm">(11) 98550-8149</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-industrial-yellow" />
                <span className="text-sm">Várzea Paulista - SP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-industrial-yellow">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2025 DG Empilhadeiras. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-industrial-yellow transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-industrial-yellow transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-industrial-yellow transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
