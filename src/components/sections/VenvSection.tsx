import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { Package, ExternalLink } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Qué es uv?",
    options: [
      "Un editor de código para Python",
      "Un gestor de paquetes y proyectos Python extremadamente rápido escrito en Rust",
      "Una librería de Machine Learning",
      "Un sistema operativo para programadores"
    ],
    correctAnswer: 1,
    explanation: "uv es un gestor de paquetes y proyectos Python extremadamente rápido, escrito en Rust, que reemplaza a pip, venv, pip-tools y más en una sola herramienta."
  },
  {
    question: "¿Qué comando se usa para crear un nuevo proyecto con uv?",
    options: [
      "uv new proyecto",
      "uv create proyecto",
      "uv init proyecto",
      "uv start proyecto"
    ],
    correctAnswer: 2,
    explanation: "El comando 'uv init nombre-proyecto' crea un nuevo proyecto Python con la estructura básica y archivos de configuración necesarios."
  },
  {
    question: "¿Qué ventaja principal tiene uv sobre pip?",
    options: [
      "Es más fácil de escribir",
      "Es 10-100x más rápido y gestiona todo el flujo de trabajo Python",
      "Solo funciona en Windows",
      "No necesita Python instalado previamente"
    ],
    correctAnswer: 1,
    explanation: "uv es 10-100x más rápido que pip gracias a estar escrito en Rust, y además unifica la gestión de paquetes, entornos virtuales, versiones de Python y proyectos en una sola herramienta."
  }
];

export const VenvSection = () => {
  return (
    <>
      <SectionCard title="Gestor de Paquetes UV" icon={Package}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es uv?</h3>
            <p>
              <strong className="text-primary">uv</strong> es un gestor de paquetes y proyectos Python 
              extremadamente rápido, escrito en <strong>Rust</strong>. Es una herramienta todo-en-uno que 
              reemplaza a <code className="bg-code text-code-foreground px-1 rounded text-xs">pip</code>, 
              <code className="bg-code text-code-foreground px-1 rounded text-xs">venv</code>, 
              <code className="bg-code text-code-foreground px-1 rounded text-xs">pip-tools</code>, 
              <code className="bg-code text-code-foreground px-1 rounded text-xs">pipx</code> y más.
            </p>
            <p className="mt-3 text-muted-foreground">
              Desarrollado por <strong>Astral</strong> (los creadores de Ruff, el linter de Python), 
              uv está diseñado para ser el gestor de paquetes del futuro de Python.
            </p>
          </div>

          <div className="bg-info/10 border border-info/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink className="h-4 w-4 text-info" />
              <h4 className="font-semibold text-info">Documentación oficial</h4>
            </div>
            <p className="text-sm">
              Consulta la documentación completa de uv en:{" "}
              <a 
                href="https://docs.astral.sh/uv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                https://docs.astral.sh/uv/
              </a>
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">¿Por qué usar uv en lugar de pip + venv?</h3>
            
            <div className="grid gap-3">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">⚡</span>
                <span><strong>10-100x más rápido</strong> que pip para instalar paquetes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">📦</span>
                <span><strong>Todo en uno:</strong> gestiona paquetes, entornos, versiones de Python y proyectos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">🔒</span>
                <span><strong>Lockfile automático:</strong> genera <code className="bg-code text-code-foreground px-1 rounded text-xs">uv.lock</code> para reproducibilidad exacta</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">🐍</span>
                <span><strong>Gestiona versiones de Python:</strong> instala y cambia entre versiones fácilmente</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">🔄</span>
                <span><strong>Compatible con pip:</strong> usa los mismos repositorios (PyPI) y sintaxis familiar</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">🌍</span>
                <span><strong>Multiplataforma:</strong> funciona en Windows, macOS y Linux</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instalación de uv</h3>
            <p className="mb-4 text-muted-foreground">
              Elige el método de instalación según tu sistema operativo:
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">🪟 Windows (PowerShell)</h4>
                <CodeBlock code={'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"'} />
              </div>

              <div>
                <h4 className="font-semibold mb-2">🍎 macOS / 🐧 Linux</h4>
                <CodeBlock code="curl -LsSf https://astral.sh/uv/install.sh | sh" />
              </div>

              <div>
                <h4 className="font-semibold mb-2">📦 Con pip (cualquier sistema)</h4>
                <CodeBlock code="pip install uv" />
              </div>

              <div>
                <h4 className="font-semibold mb-2">🍺 Con Homebrew (macOS)</h4>
                <CodeBlock code="brew install uv" />
              </div>

              <div>
                <h4 className="font-semibold mb-2">🐧 Con pacman (Arch Linux)</h4>
                <CodeBlock code="pacman -S uv" />
              </div>
            </div>

            <h4 className="font-semibold mt-6 mb-2">Verificar la instalación</h4>
            <p className="text-sm mb-2">Después de instalar, verifica que uv funcione:</p>
            <CodeBlock code="uv --version" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Gestión de versiones de Python con uv</h3>
            <p className="mb-3 text-muted-foreground">
              uv puede instalar y gestionar múltiples versiones de Python por ti:
            </p>

            <h4 className="font-semibold mt-4 mb-2">Instalar una versión específica de Python</h4>
            <CodeBlock code="uv python install 3.12" />

            <h4 className="font-semibold mt-4 mb-2">Ver versiones instaladas</h4>
            <CodeBlock code="uv python list" />

            <h4 className="font-semibold mt-4 mb-2">Fijar la versión de Python para un proyecto</h4>
            <CodeBlock code="uv python pin 3.12" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Crear y gestionar un proyecto</h3>

            <h4 className="font-semibold mt-4 mb-2">Paso 1: Inicializar un nuevo proyecto</h4>
            <p className="text-sm mb-2">Crea un nuevo proyecto Python con la estructura básica:</p>
            <CodeBlock code="uv init mi-proyecto-ml" />
            <p className="text-sm text-muted-foreground mt-2">
              Esto crea una carpeta con <code className="bg-code text-code-foreground px-1 rounded text-xs">pyproject.toml</code>, 
              un archivo <code className="bg-code text-code-foreground px-1 rounded text-xs">hello.py</code> de ejemplo y la configuración necesaria.
            </p>

            <h4 className="font-semibold mt-4 mb-2">Paso 2: Entrar al proyecto</h4>
            <CodeBlock code="cd mi-proyecto-ml" />

            <h4 className="font-semibold mt-4 mb-2">Paso 3: Agregar dependencias</h4>
            <p className="text-sm mb-2">Agrega las bibliotecas que necesitas para el curso:</p>
            <CodeBlock code="uv add numpy pandas scikit-learn matplotlib" />
            <p className="text-sm text-muted-foreground mt-2">
              uv automáticamente crea el entorno virtual, instala las dependencias y genera el archivo <code className="bg-code text-code-foreground px-1 rounded text-xs">uv.lock</code>.
            </p>

            <div className="bg-muted rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2 text-sm">¿Qué genera uv automáticamente?</h4>
              <ul className="text-sm space-y-1">
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">pyproject.toml</code>: archivo de configuración del proyecto con las dependencias</li>
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">uv.lock</code>: lockfile con las versiones exactas de cada paquete</li>
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">.venv/</code>: el entorno virtual se crea y gestiona automáticamente</li>
                <li>• <code className="bg-code text-code-foreground px-1 rounded text-xs">.python-version</code>: la versión de Python fijada para el proyecto</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Comandos principales de uv</h3>
            
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-sm">📦 Gestión de dependencias</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Agregar un paquete:</p>
                    <CodeBlock code="uv add nombre-paquete" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Agregar un paquete de desarrollo:</p>
                    <CodeBlock code="uv add --dev pytest" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Eliminar un paquete:</p>
                    <CodeBlock code="uv remove nombre-paquete" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Sincronizar dependencias (instalar todo desde uv.lock):</p>
                    <CodeBlock code="uv sync" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Actualizar paquetes:</p>
                    <CodeBlock code="uv lock --upgrade" />
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-sm">🚀 Ejecutar código</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ejecutar un script Python:</p>
                    <CodeBlock code="uv run python mi_script.py" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ejecutar un comando dentro del entorno:</p>
                    <CodeBlock code="uv run jupyter notebook" />
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-sm">🔧 Herramientas globales</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Instalar una herramienta global (como pipx):</p>
                    <CodeBlock code="uv tool install ruff" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ejecutar una herramienta sin instalarla:</p>
                    <CodeBlock code="uvx ruff check ." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Compatibilidad con requirements.txt</h3>
            <p className="mb-3 text-muted-foreground">
              Si un proyecto existente usa <code className="bg-code text-code-foreground px-1 rounded text-xs">requirements.txt</code>, 
              uv puede trabajar con él:
            </p>

            <h4 className="font-semibold mt-4 mb-2">Instalar desde requirements.txt</h4>
            <CodeBlock code="uv pip install -r requirements.txt" />

            <h4 className="font-semibold mt-4 mb-2">Migrar a pyproject.toml</h4>
            <p className="text-sm mb-2">Para convertir un proyecto existente a uv:</p>
            <CodeBlock code={`# Inicializa uv en el proyecto existente
uv init
# Agrega las dependencias del requirements.txt
uv add $(cat requirements.txt)`} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Flujo de trabajo típico con uv</h3>
            <div className="bg-muted rounded-lg p-4">
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> Crear proyecto: <code className="bg-code text-code-foreground px-1 rounded text-xs">uv init mi-proyecto</code></li>
                <li><strong>2.</strong> Entrar al proyecto: <code className="bg-code text-code-foreground px-1 rounded text-xs">cd mi-proyecto</code></li>
                <li><strong>3.</strong> Agregar dependencias: <code className="bg-code text-code-foreground px-1 rounded text-xs">uv add numpy pandas</code></li>
                <li><strong>4.</strong> Escribir tu código en archivos <code>.py</code></li>
                <li><strong>5.</strong> Ejecutar: <code className="bg-code text-code-foreground px-1 rounded text-xs">uv run python mi_script.py</code></li>
                <li><strong>6.</strong> Compartir: el archivo <code className="bg-code text-code-foreground px-1 rounded text-xs">uv.lock</code> asegura que todos tengan las mismas versiones</li>
              </ol>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Consejo:</strong> Con uv, <strong>no necesitas activar manualmente</strong> el entorno virtual. 
              Simplemente usa <code className="bg-code text-code-foreground px-1 rounded text-xs">uv run</code> antes de 
              cualquier comando y uv se encarga de todo automáticamente.
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
