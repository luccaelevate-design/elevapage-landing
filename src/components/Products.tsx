import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Zap, Wrench } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Empilhadeiras Elétricas",
      description: "Ideais para ambientes internos, operação silenciosa e zero emissão",
      capacity: "1.5 - 8.0 toneladas",
      features: ["Zero emissão", "Operação silenciosa", "Baixo custo operacional"],
      icon: Zap,
      popular: true,
    },
    {
      title: "Empilhadeiras a Combustão",
      description: "Para trabalhos pesados e ambientes externos, máxima potência",
      capacity: "1.5 - 25 toneladas",
      features: ["Alta potência", "Uso externo", "Combustível GLP/Diesel"],
      icon: Package,
    },
    {
      title: "Empilhadeiras Retráteis",
      description: "Para corredores estreitos e armazéns com pé-direito alto",
      capacity: "1.0 - 2.5 toneladas",
      features: ["Corredores estreitos", "Grande altura", "Precisão de posicionamento"],
      icon: Wrench,
    },
  ];

  const services = [
    "Venda de empilhadeiras novas e seminovas",
    "Locação por período flexível",
    "Manutenção preventiva e corretiva",
    "Peças originais e genuínas",
    "Treinamento de operadores",
    "Suporte técnico",
  ];

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Linha completa de empilhadeiras para atender todas as necessidades de movimentação de cargas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="relative border-none shadow-industrial hover:shadow-yellow transition-all duration-300 hover:-translate-y-2">
              {product.popular && (
                <Badge className="absolute -top-3 left-4 bg-gradient-industrial text-industrial-yellow-foreground">
                  Mais Popular
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-industrial rounded-full mb-4">
                  <product.icon className="h-8 w-8 text-industrial-yellow-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">Capacidade: </span>
                  <span className="text-industrial-yellow font-bold">{product.capacity}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-industrial-yellow rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" variant="outline">
                  <a href="http://wa.me/5511985508149" target="_blank" rel="noopener noreferrer">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Serviços Completos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-industrial-yellow rounded-full"></div>
                    <span className="text-primary-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="text-2xl font-bold text-industrial-yellow mb-4">
                Precisa de uma Solução Personalizada?
              </h4>
              <p className="text-primary-foreground/90 mb-6">
                Nossa equipe está pronta para desenvolver a solução ideal para sua empresa
              </p>
              <Button size="lg" variant="industrial">
                <a href="http://wa.me/5511985508149" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
