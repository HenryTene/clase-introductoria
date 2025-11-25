import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { Terminal } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Qué comando usas para verificar si Python está instalado correctamente?",
    options: [
      "python check",
      "python --version o py --version",
      "python -v",
      "check python"
    ],
    correctAnswer: 1,
    explanation: "El comando 'python --version' (o 'py --version' en Windows) muestra la versión instalada de Python."
  },
  {
    question: "¿Por qué se usa Python para Machine Learning?",
    options: [
      "Es el lenguaje más rápido",
      "Es el único lenguaje que soporta ML",
      "Tiene bibliotecas potentes, sintaxis clara y una gran comunidad",
      "Es el más difícil de aprender"
    ],
    correctAnswer: 2,
    explanation: "Python es popular en ML por sus bibliotecas especializadas (NumPy, Pandas, Scikit-learn, TensorFlow), su sintaxis legible y su enorme comunidad que contribuye con recursos y ayuda."
  }
];

export const PythonSection = () => {
  return (
    <>
      <SectionCard title="Python" icon={Terminal}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es Python?</h3>
            <p>
              <strong>Python</strong> es un lenguaje de programación de alto nivel, interpretado y de propósito general.
              Se caracteriza por su sintaxis clara y legible, lo que lo hace ideal tanto para principiantes como para 
              expertos.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">¿Por qué Python para Machine Learning?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Bibliotecas especializadas:</strong> NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch...</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Sintaxis legible:</strong> Permite enfocarte en la lógica del ML, no en la sintaxis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Gran comunidad:</strong> Tutoriales, documentación y ayuda abundante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Jupyter Notebooks:</strong> Ideal para experimentación y visualización</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Versatilidad:</strong> Desde prototipo hasta producción</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Verificar instalación de Python</h3>
            
            <h4 className="font-semibold mt-4 mb-2">Paso 1: Abre la terminal</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Windows:</strong> Busca "cmd" o "PowerShell" en el menú inicio, o usa la terminal de VS Code</li>
              <li><strong>macOS/Linux:</strong> Abre "Terminal" o usa la terminal integrada de VS Code</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Paso 2: Verifica la versión</h4>
            <p className="text-sm mb-2">En Windows, prueba primero:</p>
            <CodeBlock code="py --version" />
            <p className="text-sm mb-2">En macOS/Linux (o Windows si lo anterior no funciona):</p>
            <CodeBlock code="python --version" />
            <p className="text-sm mb-2">O también:</p>
            <CodeBlock code="python3 --version" />

            <div className="bg-muted rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">¿Qué deberías ver?</h4>
              <p className="text-sm mb-2">
                Algo como: <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Python 3.11.5</code> o 
                <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs ml-1">Python 3.10.8</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Para este curso, necesitas <strong>Python 3.8 o superior</strong>. Lo ideal es tener 3.10 o más reciente.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">¿No tienes Python instalado?</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Windows</h4>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Visita <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">python.org/downloads</a></li>
                  <li>Descarga la última versión para Windows</li>
                  <li>Ejecuta el instalador</li>
                  <li><strong className="text-destructive">IMPORTANTE:</strong> Marca la casilla "Add Python to PATH" antes de instalar</li>
                  <li>Haz clic en "Install Now"</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold">macOS</h4>
                <p className="text-sm mb-2">macOS suele venir con Python 2.x preinstalado. Para usar Python 3:</p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Visita <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">python.org/downloads</a></li>
                  <li>Descarga la última versión para macOS</li>
                  <li>Abre el instalador .pkg y sigue las instrucciones</li>
                </ol>
                <p className="text-sm mt-2 text-muted-foreground">
                  Alternativa con Homebrew: <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">brew install python3</code>
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Linux</h4>
                <p className="text-sm mb-2">Python 3 suele venir preinstalado. Si no:</p>
                <CodeBlock code="sudo apt update
sudo apt install python3 python3-pip" />
                <p className="text-sm text-muted-foreground">
                  (En distribuciones basadas en Debian/Ubuntu. Ajusta según tu distribución)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Verificar pip (gestor de paquetes)</h3>
            <p className="mb-2">
              <strong>pip</strong> es el gestor de paquetes de Python, usado para instalar bibliotecas. 
              Verifica que esté disponible:
            </p>
            <CodeBlock code="pip --version" />
            <p className="text-sm">O en algunos sistemas:</p>
            <CodeBlock code="pip3 --version" />
            <p className="text-sm mt-2">
              Deberías ver algo como: <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">pip 23.2.1</code>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Prueba rápida: Ejecuta Python interactivo</h3>
            <p className="mb-2">Abre la consola interactiva de Python:</p>
            <CodeBlock code="python" />
            <p className="text-sm mb-2">O:</p>
            <CodeBlock code="py" />
            <p className="text-sm mb-3">
              Verás algo como <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">{">>>"}</code>. 
              Prueba un comando simple:
            </p>
            <CodeBlock code='print("Hola, Python para ML!")' />
            <p className="text-sm mt-2">
              Para salir de la consola interactiva, escribe <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">exit()</code> o 
              presiona <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Ctrl+Z</code> + Enter (Windows) 
              o <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">Ctrl+D</code> (macOS/Linux).
            </p>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Consejo:</strong> Si tienes problemas para que Windows reconozca el comando <code>python</code>, 
              intenta usar <code>py</code> en su lugar. El launcher <code>py</code> es más confiable en Windows.
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
