import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { Package } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Para qué sirve un entorno virtual en Python?",
    options: [
      "Para que Python corra más rápido",
      "Para aislar las dependencias de cada proyecto y evitar conflictos",
      "Para virtualizar el sistema operativo",
      "Solo es necesario en proyectos grandes"
    ],
    correctAnswer: 1,
    explanation: "Los entornos virtuales permiten que cada proyecto tenga sus propias dependencias (bibliotecas y versiones específicas) sin afectar otros proyectos ni la instalación global de Python."
  },
  {
    question: "¿Qué comando se usa para activar un entorno virtual en Windows?",
    options: [
      ".venv\\Scripts\\activate",
      "source .venv/bin/activate",
      "activate .venv",
      "python -m venv activate"
    ],
    correctAnswer: 0,
    explanation: "En Windows, el script de activación está en .venv\\Scripts\\activate (o .venv\\Scripts\\activate.bat en cmd)."
  },
  {
    question: "¿Cuándo deberías crear un entorno virtual?",
    options: [
      "Solo cuando el proyecto usa muchas bibliotecas",
      "Al inicio de cada nuevo proyecto Python",
      "Solo si trabajas en equipo",
      "Nunca, no son necesarios"
    ],
    correctAnswer: 1,
    explanation: "Es una buena práctica crear un entorno virtual al inicio de cada proyecto Python para mantener las dependencias organizadas y evitar conflictos futuros."
  }
];

export const VenvSection = () => {
  return (
    <>
      <SectionCard title="Entornos Virtuales" icon={Package}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es un entorno virtual?</h3>
            <p>
              Un <strong>entorno virtual</strong> es como una "burbuja" aislada para tu proyecto de Python. 
              Dentro de esta burbuja, puedes instalar bibliotecas y dependencias específicas sin afectar 
              otros proyectos ni la instalación global de Python en tu sistema.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">¿Por qué usar entornos virtuales?</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Imagina este escenario sin entornos virtuales:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Proyecto A necesita TensorFlow 2.10</li>
                <li>• Proyecto B necesita TensorFlow 2.15</li>
                <li>• Solo puedes tener una versión instalada globalmente</li>
                <li>• Cambiar de versión rompe uno de los proyectos</li>
              </ul>
            </div>

            <h4 className="font-semibold mb-2">Con entornos virtuales:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Cada proyecto tiene sus propias dependencias y versiones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>No hay conflictos entre proyectos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Fácil de reproducir el entorno en otra máquina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Mantiene limpia tu instalación global de Python</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Crear un entorno virtual</h3>
            
            <h4 className="font-semibold mt-4 mb-2">Paso 1: Navega a la carpeta de tu proyecto</h4>
            <p className="text-sm mb-2">Abre la terminal en la carpeta donde está (o estará) tu proyecto:</p>
            <CodeBlock code="cd ruta/a/tu/proyecto" />

            <h4 className="font-semibold mt-4 mb-2">Paso 2: Crea el entorno virtual</h4>
            <p className="text-sm mb-2">Ejecuta este comando (funciona en Windows, macOS y Linux):</p>
            <CodeBlock code="python -m venv .venv" />
            <p className="text-sm mb-2">O en Windows también puedes usar:</p>
            <CodeBlock code="py -m venv .venv" />
            
            <div className="bg-muted rounded-lg p-4 mt-3">
              <h4 className="font-semibold mb-2 text-sm">¿Qué significa este comando?</h4>
              <ul className="text-sm space-y-1">
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">python -m venv</code>: ejecuta el módulo venv de Python</li>
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">.venv</code>: nombre de la carpeta del entorno (puedes usar otro nombre, pero .venv es convención)</li>
              </ul>
            </div>

            <p className="text-sm mt-3 text-muted-foreground">
              Esto creará una carpeta <code>.venv</code> en tu proyecto con una copia de Python y herramientas necesarias.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Activar el entorno virtual</h3>
            <p className="mb-3">
              Antes de instalar dependencias o ejecutar código, debes <strong>activar</strong> el entorno virtual.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Windows (PowerShell)</h4>
                <CodeBlock code=".\.venv\Scripts\Activate.ps1" />
                <p className="text-sm text-muted-foreground mt-2">
                  Si obtienes un error de permisos, ejecuta esto una vez (como administrador):
                </p>
                <CodeBlock code="Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" />
              </div>

              <div>
                <h4 className="font-semibold">Windows (CMD)</h4>
                <CodeBlock code=".venv\Scripts\activate.bat" />
              </div>

              <div>
                <h4 className="font-semibold">macOS / Linux</h4>
                <CodeBlock code="source .venv/bin/activate" />
              </div>
            </div>

            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">¿Cómo saber si está activado?</h4>
              <p className="text-sm">
                Verás <code className="bg-code text-code-foreground px-2 py-1 rounded text-xs">(.venv)</code> al 
                inicio de tu línea de comando:
              </p>
              <p className="text-sm mt-2 font-mono text-xs">
                <span className="text-success">(.venv)</span> C:\Users\tu_usuario\proyecto{">"}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instalar dependencias</h3>
            <p className="mb-2">Con el entorno activado, instala las bibliotecas que necesitas:</p>
            
            <h4 className="font-semibold mt-4 mb-2">Instalar una biblioteca específica</h4>
            <CodeBlock code="pip install numpy" />

            <h4 className="font-semibold mt-4 mb-2">Instalar múltiples bibliotecas</h4>
            <CodeBlock code="pip install numpy pandas matplotlib scikit-learn" />

            <h4 className="font-semibold mt-4 mb-2">Instalar desde un archivo requirements.txt</h4>
            <p className="text-sm mb-2">
              El archivo <code>requirements.txt</code> lista todas las dependencias del proyecto:
            </p>
            <CodeBlock code="pip install -r requirements.txt" />

            <div className="bg-muted rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2 text-sm">¿Qué es requirements.txt?</h4>
              <p className="text-sm mb-2">
                Es un archivo de texto que lista todas las bibliotecas (y opcionalmente sus versiones) que 
                tu proyecto necesita. Ejemplo:
              </p>
              <pre className="bg-code text-code-foreground p-3 rounded text-xs overflow-x-auto">
{`numpy==1.24.3
pandas==2.0.2
scikit-learn==1.3.0
matplotlib==3.7.1`}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Generar un requirements.txt de tu entorno actual</h4>
            <CodeBlock code="pip freeze > requirements.txt" />
            <p className="text-sm text-muted-foreground">
              Esto guarda todas las bibliotecas instaladas en tu entorno virtual.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Desactivar el entorno virtual</h3>
            <p className="mb-2">Cuando termines de trabajar, desactiva el entorno:</p>
            <CodeBlock code="deactivate" />
            <p className="text-sm text-muted-foreground">
              (Este comando funciona en todos los sistemas operativos)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Flujo de trabajo típico</h3>
            <div className="bg-muted rounded-lg p-4">
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> Crear el proyecto y navegar a su carpeta</li>
                <li><strong>2.</strong> Crear entorno virtual: <code className="bg-code text-code-foreground px-1 rounded text-xs">python -m venv .venv</code></li>
                <li><strong>3.</strong> Activar entorno: <code className="bg-code text-code-foreground px-1 rounded text-xs">.venv\Scripts\activate</code> (Windows) 
                  o <code className="bg-code text-code-foreground px-1 rounded text-xs">source .venv/bin/activate</code> (macOS/Linux)</li>
                <li><strong>4.</strong> Instalar dependencias: <code className="bg-code text-code-foreground px-1 rounded text-xs">pip install -r requirements.txt</code></li>
                <li><strong>5.</strong> Trabajar en tu proyecto (escribir código, ejecutar scripts)</li>
                <li><strong>6.</strong> Desactivar cuando termines: <code className="bg-code text-code-foreground px-1 rounded text-xs">deactivate</code></li>
              </ol>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Consejo:</strong> La carpeta <code>.venv</code> NO se sube a Git. Normalmente se incluye 
              en <code>.gitignore</code>. Lo que se comparte es el archivo <code>requirements.txt</code>, y cada 
              persona recrea su propio entorno virtual.
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
