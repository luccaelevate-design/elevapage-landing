import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Shield, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Truck,
      title: "Ampla Frota",
      description: "Mais de 200 empilhadeiras disponíveis para locação e venda",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Técnicos certificados e treinamento completo para operadores",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Equipamentos com certificação de segurança e manutenção preventiva",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Peças originais e serviços com garantia estendida",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre a EmpilhaMax
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 20 anos no mercado, somos referência em soluções completas para movimentação de cargas. 
            Oferecemos empilhadeiras novas e usadas, locação, manutenção especializada e treinamento de operadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-industrial hover:shadow-yellow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-industrial rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-industrial-yellow-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Fornecer soluções eficientes e seguras em movimentação de cargas, 
              contribuindo para o sucesso e crescimento dos nossos clientes através 
              de equipamentos de qualidade e serviços especializados.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-industrial-yellow rounded-full"></div>
                <span className="text-foreground">Compromisso com a qualidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-industrial-yellow rounded-full"></div>
                <span className="text-foreground">Atendimento personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-industrial-yellow rounded-full"></div>
                <span className="text-foreground">Soluções inovadoras</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-industrial-yellow mb-2">500+</div>
              <div className="text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-industrial-yellow mb-2">1000+</div>
              <div className="text-sm">Equipamentos Vendidos</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-industrial-yellow mb-2">24/7</div>
              <div className="text-sm">Suporte Técnico</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-industrial-yellow mb-2">98%</div>
              <div className="text-sm">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;