import { SectionCard } from "@/components/SectionCard";
import { Rocket } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <SectionCard title="Bienvenida" icon={Rocket}>
      <div className="space-y-4">
        <p className="text-lg">
          ¡Bienvenido al curso de <strong>Inteligencia Artificial y Machine Learning con Python</strong>!
        </p>
        
        <p>
          Esta clase introductoria te preparará con todas las herramientas y conocimientos 
          necesarios para comenzar tu viaje en el mundo del Machine Learning. Aprenderás a 
          configurar tu entorno de desarrollo profesional desde cero.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
          <h3 className="font-bold text-lg mb-3">¿Qué lograrás en esta clase?</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Entender qué es Git y GitHub y cómo usarlos para control de versiones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Configurar VS Code como tu editor principal para Python</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Verificar y entender tu instalación de Python</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Crear y gestionar entornos virtuales para tus proyectos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Clonar el repositorio del curso y ejecutar tu primer script</span>
            </li>
          </ul>
        </div>

        <p>
          Cada sección incluye explicaciones claras, ejemplos prácticos y ejercicios interactivos. 
          Al final, tendrás un checklist completo para asegurar que estás listo para la siguiente clase.
        </p>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
          <p className="text-sm">
            💡 <strong>Consejo:</strong> Toma tu tiempo en cada sección. Es mejor entender bien 
            los fundamentos ahora que tener problemas técnicos más adelante.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};
