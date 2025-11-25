import { SectionCard } from "@/components/SectionCard";
import { Quiz } from "@/components/Quiz";
import { Code2 } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Cuál es la principal ventaja de usar VS Code para programar en Python?",
    options: [
      "Es el único editor que soporta Python",
      "Ofrece autocompletado inteligente, depuración integrada y extensiones potentes",
      "Es más rápido que escribir código en un bloc de notas",
      "Solo funciona con Python"
    ],
    correctAnswer: 1,
    explanation: "VS Code destaca por su IntelliSense (autocompletado inteligente), depurador integrado, extensiones que mejoran la productividad, y terminal integrada."
  },
  {
    question: "¿Qué extensión es esencial instalar para trabajar con Python en VS Code?",
    options: [
      "JavaScript Extension Pack",
      "Python (de Microsoft)",
      "Git Lens",
      "Prettier"
    ],
    correctAnswer: 1,
    explanation: "La extensión 'Python' de Microsoft proporciona todas las herramientas necesarias: IntelliSense, linting, depuración, testing, y soporte para Jupyter notebooks."
  },
  {
    question: "¿Cómo abres la terminal integrada en VS Code?",
    options: [
      "Menú View → Terminal o Ctrl+` (tecla de acento grave)",
      "Solo se puede usar terminal externa",
      "F5",
      "Ctrl+T"
    ],
    correctAnswer: 0,
    explanation: "Puedes abrir la terminal integrada desde el menú View → Terminal, o con el atajo Ctrl+` (tecla de acento grave, junto al 1)."
  }
];

export const VSCodeSection = () => {
  return (
    <>
      <SectionCard title="Visual Studio Code" icon={Code2}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es VS Code?</h3>
            <p>
              <strong>Visual Studio Code (VS Code)</strong> es un editor de código moderno, gratuito y 
              de código abierto desarrollado por Microsoft. Es uno de los editores más populares entre 
              desarrolladores de Python por sus características potentes y su extensibilidad.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">¿Por qué usar VS Code para Python?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>IntelliSense:</strong> Autocompletado inteligente que sugiere código mientras escribes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Depuración integrada:</strong> Encuentra y corrige errores fácilmente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Terminal integrada:</strong> Ejecuta comandos sin salir del editor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Git integrado:</strong> Control de versiones visual y sencillo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Extensiones:</strong> Miles de extensiones para mejorar tu productividad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Jupyter Notebooks:</strong> Soporte nativo para notebooks interactivos</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instalación de VS Code</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Visita <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">code.visualstudio.com</a></li>
              <li>Descarga la versión para tu sistema operativo (Windows, macOS o Linux)</li>
              <li>Ejecuta el instalador y sigue las instrucciones</li>
              <li>En Windows, marca la opción "Add to PATH" durante la instalación</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Extensiones esenciales para Python</h3>
            
            <div className="space-y-4 mt-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2">1. Python (Microsoft) - IMPRESCINDIBLE</h4>
                <p className="text-sm mb-2">
                  La extensión oficial de Python que proporciona todas las herramientas necesarias.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Cómo instalar:</strong>
                </p>
                <ol className="text-sm list-decimal list-inside ml-2 mt-1 space-y-1">
                  <li>Abre VS Code</li>
                  <li>Haz clic en el ícono de extensiones (cuadrado con piezas) en la barra lateral izquierda</li>
                  <li>Busca "Python" y selecciona la de Microsoft</li>
                  <li>Haz clic en "Install"</li>
                </ol>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2">2. Pylance (Microsoft) - Recomendada</h4>
                <p className="text-sm">
                  Mejora el IntelliSense con análisis de tipos más rápido y preciso. 
                  Suele instalarse automáticamente con la extensión de Python.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2">3. Jupyter (Microsoft) - Recomendada</h4>
                <p className="text-sm">
                  Permite crear y ejecutar Jupyter Notebooks directamente en VS Code, 
                  muy útil para experimentar y visualizar datos.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-2">4. Otras extensiones útiles (opcionales)</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Python Indent:</strong> Mejora la indentación automática</li>
                  <li>• <strong>autoDocstring:</strong> Genera documentación automáticamente</li>
                  <li>• <strong>GitLens:</strong> Potencia las capacidades de Git</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Características clave de VS Code</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Terminal integrada</h4>
                <p className="text-sm">
                  Accede con <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Ctrl+`</code> 
                  (Windows/Linux) o <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Cmd+`</code> (macOS).
                  Te permite ejecutar comandos Python, Git y más sin salir del editor.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Explorador de archivos</h4>
                <p className="text-sm">
                  Panel lateral izquierdo donde puedes ver y navegar la estructura de tu proyecto, 
                  crear archivos y carpetas, y más.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Control de versiones (Git)</h4>
                <p className="text-sm">
                  Ícono de rama en la barra lateral. Permite hacer commits, ver cambios, 
                  gestionar ramas y más, todo de forma visual.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Paleta de comandos</h4>
                <p className="text-sm">
                  Accede con <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Ctrl+Shift+P</code>.
                  Busca y ejecuta cualquier comando de VS Code rápidamente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Consejo:</strong> Dedica tiempo a familiarizarte con VS Code. 
              Aprende los atajos de teclado básicos (Ctrl+S para guardar, Ctrl+Z para deshacer, etc.) 
              y explora la configuración para personalizarlo a tu gusto.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <Quiz questions={quizQuestions} />
      </div>
    </>
  );
};
