import { SectionCard } from "@/components/SectionCard";
import { Rocket, Zap, BookOpen, Code2, Package, GitBranch } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <SectionCard title="Bienvenida" icon={Rocket}>
      <div className="space-y-4">
        <p className="text-lg">
          ¡Bienvenido al curso!
        </p>
        
        <p className="text-muted-foreground">
          Esta clase introductoria te preparará con todas las herramientas y conocimientos 
          necesarios para comenzar tu viaje en el mundo del Machine Learning. Aprenderás a 
          configurar tu entorno de desarrollo profesional desde cero.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-4 text-primary">¿Qué lograrás en esta clase?</h3>
          <div className="grid gap-3">
            {[
              { icon: GitBranch, text: "Entender qué es Git y GitHub y cómo usarlos para control de versiones" },
              { icon: Code2, text: "Configurar VS Code como tu editor principal para Python" },
              { icon: Zap, text: "Verificar y entender tu instalación de Python" },
              { icon: Package, text: "Crear y gestionar entornos virtuales para tus proyectos" },
              { icon: BookOpen, text: "Clonar el repositorio del curso y ejecutar tu primer script" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-primary/5 transition-colors">
                <item.icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground">
          Cada sección incluye explicaciones claras, ejemplos prácticos y ejercicios interactivos. 
          Al final, tendrás un checklist completo para asegurar que estás listo para la siguiente clase.
        </p>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
          <p className="text-sm text-accent">
            💡 <strong>Consejo:</strong> Toma tu tiempo en cada sección. Es mejor entender bien 
            los fundamentos ahora que tener problemas técnicos más adelante.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};
