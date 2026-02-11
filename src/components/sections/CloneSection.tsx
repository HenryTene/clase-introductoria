import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { FolderGit2 } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Qué hace el comando 'git clone'?",
    options: [
      "Crea un nuevo repositorio en GitHub",
      "Descarga una copia completa de un repositorio remoto a tu máquina",
      "Sube tus cambios a GitHub",
      "Actualiza tu repositorio local"
    ],
    correctAnswer: 1,
    explanation: "El comando 'git clone' descarga una copia completa de un repositorio remoto (incluido todo su historial) a tu máquina local."
  },
  {
    question: "Después de clonar el repositorio, ¿qué debes hacer antes de ejecutar código?",
    options: [
      "Nada, ya está listo",
      "Ejecutar 'uv sync' para instalar las dependencias del proyecto",
      "Solo crear un entorno virtual manualmente",
      "Solo instalar dependencias globalmente con pip"
    ],
    correctAnswer: 1,
    explanation: "Con uv, solo necesitas ejecutar 'uv sync' para instalar todas las dependencias definidas en el proyecto. uv se encarga del entorno virtual automáticamente."
  }
];

export const CloneSection = () => {
  return (
    <>
      <SectionCard title="Clonar el Repositorio del Curso" icon={FolderGit2}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué significa clonar un repositorio?</h3>
            <p>
              <strong>Clonar</strong> un repositorio significa descargar una copia completa de un proyecto 
              desde GitHub (o cualquier servicio Git remoto) a tu computadora. Esto incluye:
            </p>
            <ul className="list-disc list-inside my-3 space-y-1">
              <li>Todos los archivos del proyecto</li>
              <li>Todo el historial de cambios (commits)</li>
              <li>Las ramas del repositorio</li>
              <li>La configuración para sincronizar con el repositorio remoto</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">¿Por qué clonar el repositorio del curso?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Obtienes todos los materiales: notebooks, datasets, scripts de ejemplo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>El proyecto ya está estructurado correctamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Puedes recibir actualizaciones del instructor fácilmente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Incluye el archivo <code className="bg-code text-code-foreground px-1 rounded text-xs">pyproject.toml</code> con todas las dependencias</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Paso a paso: Clonar el repositorio</h3>

            <h4 className="font-semibold mt-4 mb-2">Paso 1: Obtén la URL del repositorio</h4>
            <p className="text-sm mb-2">
              El instructor te proporcionará la URL del repositorio. Suele verse así:
            </p>
            <CodeBlock code="https://github.com/instructor/curso-ml-python.git" />
            <p className="text-sm text-muted-foreground mt-2">
              Puedes encontrar esta URL en GitHub, en el botón verde "Code" de la página del repositorio.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 2: Decide dónde guardar el proyecto</h4>
            <p className="text-sm mb-2">
              Elige una carpeta donde guardarás proyectos del curso. Por ejemplo:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1 ml-4">
              <li><strong>Windows:</strong> <code className="text-xs">C:\Users\tu_usuario\Cursos\</code></li>
              <li><strong>macOS/Linux:</strong> <code className="text-xs">~/Cursos/</code></li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Paso 3: Abre la terminal en esa ubicación</h4>
            <p className="text-sm mb-2">Navega a la carpeta elegida:</p>
            <CodeBlock code="cd C:\Users\tu_usuario\Cursos" />

            <h4 className="font-semibold mt-4 mb-2">Paso 4: Clona el repositorio</h4>
            <CodeBlock code="git clone https://github.com/instructor/curso-ml-python.git" />

            <h4 className="font-semibold mt-4 mb-2">Paso 5: Entra a la carpeta del proyecto</h4>
            <CodeBlock code="cd curso-ml-python" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Configurar el entorno con uv</h3>
            <p className="mb-3">
              Ahora que tienes el código, usa <strong className="text-primary">uv</strong> para preparar el entorno:
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 1: Sincroniza las dependencias</h4>
            <p className="text-sm mb-2">Si el proyecto ya usa uv (tiene <code className="bg-code text-code-foreground px-1 rounded text-xs">pyproject.toml</code>):</p>
            <CodeBlock code="uv sync" />
            <p className="text-sm text-muted-foreground mt-2">
              uv creará automáticamente el entorno virtual e instalará todas las dependencias.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 2 (alternativo): Si el proyecto usa requirements.txt</h4>
            <p className="text-sm mb-2">Si el proyecto aún usa el formato tradicional:</p>
            <CodeBlock code="uv pip install -r requirements.txt" />

            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">¡Listo!</h4>
              <p className="text-sm">
                Ya tienes el repositorio clonado y las dependencias instaladas. Ahora puedes ejecutar 
                cualquier script con <code className="bg-code text-code-foreground px-1 rounded text-xs">uv run python script.py</code>.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Abrir el proyecto en VS Code</h3>
            <p className="text-sm mb-2">
              Una vez clonado y configurado, abre el proyecto en VS Code:
            </p>
            <CodeBlock code="code ." />
            <p className="text-sm mt-3">
              <strong>O desde VS Code:</strong> File → Open Folder → Selecciona la carpeta <code>curso-ml-python</code>
            </p>

            <div className="bg-muted rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2 text-sm">Seleccionar el intérprete de Python en VS Code</h4>
              <ol className="text-sm space-y-2">
                <li><strong>1.</strong> Abre cualquier archivo .py en VS Code</li>
                <li><strong>2.</strong> Presiona <code className="bg-code text-code-foreground px-1 rounded text-xs">Ctrl+Shift+P</code> (o <code className="bg-code text-code-foreground px-1 rounded text-xs">Cmd+Shift+P</code> en macOS)</li>
                <li><strong>3.</strong> Busca "Python: Select Interpreter"</li>
                <li><strong>4.</strong> Selecciona el intérprete del entorno virtual creado por uv (<code>.venv</code>)</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Recibir actualizaciones del repositorio</h3>
            <p className="text-sm mb-2">
              Si el instructor actualiza el repositorio, obtén los cambios:
            </p>
            <CodeBlock code={`git pull origin main
uv sync`} />
            <p className="text-sm text-muted-foreground mt-2">
              <code className="bg-code text-code-foreground px-1 rounded text-xs">uv sync</code> se asegura de que las nuevas dependencias también se instalen.
            </p>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Consejo:</strong> Si quieres experimentar sin miedo a romper el código original, 
              crea una rama nueva con <code>git checkout -b mi-experimento</code>. Así el código original 
              permanece intacto en la rama principal.
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
