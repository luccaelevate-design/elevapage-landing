import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [{
    name: "Início",
    href: "#inicio"
  }, {
    name: "Sobre",
    href: "#sobre"
  }, {
    name: "Produtos",
    href: "#produtos"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">DG Empilhadeiras</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => {})}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Orçamento</Button>
            <Button variant="industrial">Contato</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Orçamento
                </Button>
                <Button variant="industrial" onClick={() => setIsOpen(false)}>
                  Contato
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;