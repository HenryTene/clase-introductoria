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
      "Crear y activar un entorno virtual, luego instalar dependencias",
      "Solo crear un entorno virtual",
      "Solo instalar dependencias globalmente"
    ],
    correctAnswer: 1,
    explanation: "Debes crear un entorno virtual, activarlo, e instalar las dependencias especificadas en requirements.txt para que el proyecto funcione correctamente."
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
                <span>Incluye el archivo requirements.txt con todas las dependencias</span>
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
            <p className="text-sm text-muted-foreground">
              (Ajusta la ruta según tu sistema operativo y estructura de carpetas)
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 4: Clona el repositorio</h4>
            <p className="text-sm mb-2">Ejecuta el comando <code>git clone</code> seguido de la URL:</p>
            <CodeBlock code="git clone https://github.com/instructor/curso-ml-python.git" />
            <p className="text-sm mt-2 text-muted-foreground">
              Esto creará una carpeta <code>curso-ml-python</code> con todo el contenido del repositorio.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 5: Entra a la carpeta del proyecto</h4>
            <CodeBlock code="cd curso-ml-python" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Configurar el entorno del proyecto clonado</h3>
            <p className="mb-3">
              Ahora que tienes el código, necesitas preparar el entorno para ejecutarlo:
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 1: Crea un entorno virtual</h4>
            <CodeBlock code="python -m venv .venv" />

            <h4 className="font-semibold mt-4 mb-2">Paso 2: Activa el entorno virtual</h4>
            <p className="text-sm mb-2"><strong>Windows (PowerShell):</strong></p>
            <CodeBlock code=".\.venv\Scripts\Activate.ps1" />
            <p className="text-sm mb-2"><strong>Windows (CMD):</strong></p>
            <CodeBlock code=".venv\Scripts\activate.bat" />
            <p className="text-sm mb-2"><strong>macOS / Linux:</strong></p>
            <CodeBlock code="source .venv/bin/activate" />

            <h4 className="font-semibold mt-4 mb-2">Paso 3: Instala las dependencias del curso</h4>
            <p className="text-sm mb-2">
              El repositorio debe incluir un archivo <code>requirements.txt</code>. Instala todas las 
              bibliotecas necesarias:
            </p>
            <CodeBlock code="pip install -r requirements.txt" />
            <p className="text-sm mt-2 text-muted-foreground">
              Esto puede tardar varios minutos, especialmente si incluye bibliotecas grandes como TensorFlow 
              o PyTorch.
            </p>

            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">¡Listo!</h4>
              <p className="text-sm">
                Ya tienes el repositorio del curso clonado y el entorno configurado. Ahora puedes:
              </p>
              <ul className="text-sm list-disc list-inside mt-2 space-y-1">
                <li>Explorar los archivos del proyecto</li>
                <li>Abrir notebooks en Jupyter o VS Code</li>
                <li>Ejecutar scripts de ejemplo</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Abrir el proyecto en VS Code</h3>
            <p className="text-sm mb-2">
              Una vez clonado y configurado, abre el proyecto en VS Code:
            </p>
            <CodeBlock code="code ." />
            <p className="text-sm text-muted-foreground mt-2">
              (El punto significa "carpeta actual". Asegúrate de estar dentro de la carpeta del proyecto)
            </p>
            <p className="text-sm mt-3">
              <strong>O desde VS Code:</strong> File → Open Folder → Selecciona la carpeta <code>curso-ml-python</code>
            </p>

            <div className="bg-muted rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2 text-sm">Seleccionar el intérprete de Python en VS Code</h4>
              <ol className="text-sm space-y-2">
                <li><strong>1.</strong> Abre cualquier archivo .py en VS Code</li>
                <li><strong>2.</strong> Presiona <code className="bg-code text-code-foreground px-1 rounded text-xs">Ctrl+Shift+P</code> (o <code className="bg-code text-code-foreground px-1 rounded text-xs">Cmd+Shift+P</code> en macOS)</li>
                <li><strong>3.</strong> Busca "Python: Select Interpreter"</li>
                <li><strong>4.</strong> Selecciona el intérprete de tu entorno virtual (.venv)</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                Esto asegura que VS Code use el entorno virtual correcto con todas las dependencias instaladas.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Recibir actualizaciones del repositorio</h3>
            <p className="text-sm mb-2">
              Si el instructor actualiza el repositorio (agrega ejemplos, corrige errores), puedes obtener 
              los cambios:
            </p>
            <CodeBlock code="git pull origin main" />
            <p className="text-sm text-muted-foreground mt-2">
              (Asegúrate de haber guardado y committeado tus propios cambios primero, o podrías tener conflictos)
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
