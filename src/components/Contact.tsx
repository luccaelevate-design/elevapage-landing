import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890",
      subcontent: "(11) 98765-4321",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@empilhamax.com.br",
      subcontent: "vendas@empilhamax.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Carana - Vila Jeriva",
      subcontent: "Várzea Paulista - SP, 13225-432",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 7h às 18h",
      subcontent: "Sáb: 8h às 12h",
    },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa. Solicite um orçamento ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-industrial">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Tipo de Serviço</Label>
                <Input id="service" placeholder="Ex: Locação, Venda, Manutenção" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva suas necessidades..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full" size="lg" variant="industrial">
                Enviar Solicitação
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-industrial hover:shadow-yellow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-industrial rounded-full mb-4">
                      <info.icon className="h-8 w-8 text-industrial-yellow-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-muted-foreground text-sm">{info.subcontent}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="border-none bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-industrial-yellow mb-3">
                  Suporte de Emergência 24h
                </h3>
                <p className="mb-4">
                  Para emergências e quebras de equipamentos
                </p>
                <div className="text-2xl font-bold text-industrial-yellow">
                  (11) 9999-0000
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-none shadow-industrial">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Localização no Mapa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;