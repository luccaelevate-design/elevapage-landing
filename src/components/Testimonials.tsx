import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "",
      company: "",
      content: "Excelente atendimento e equipamentos de qualidade. Já somos clientes há 5 anos e sempre fomos bem atendidos.",
      rating: 5,
      initials: "CS",
    },
    {
      name: "Ana Santos",
      position: "",
      company: "",
      content: "A DG Empilhadeiras revolucionou nossa operação. Equipamentos modernos e suporte técnico excepcional.",
      rating: 5,
      initials: "AS",
    },
    {
      name: "Roberto Lima",
      position: "",
      company: "",
      content: "Locamos empilhadeiras elétricas e ficamos impressionados com a eficiência e economia de energia.",
      rating: 5,
      initials: "RL",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos de empresas que confiam na DG Empilhadeiras para suas operações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-industrial hover:shadow-yellow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-industrial-yellow fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 bg-gradient-industrial">
                    <AvatarFallback className="text-industrial-yellow-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-industrial-yellow font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-card p-6 rounded-lg shadow-industrial">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">250+</div>
              <div className="text-sm text-muted-foreground">Avaliações</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Recomendação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
