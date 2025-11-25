import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Quiz } from "@/components/Quiz";
import { GitBranch } from "lucide-react";

const quizQuestions = [
  {
    question: "¿Para qué sirve GitHub?",
    options: [
      "Solo para almacenar código en la nube",
      "Para colaborar en proyectos y guardar un historial de cambios",
      "Es un editor de código online",
      "Solo sirve para proyectos de código abierto"
    ],
    correctAnswer: 1,
    explanation: "GitHub es una plataforma que permite colaborar en proyectos, mantener un historial completo de cambios, y compartir código tanto en proyectos públicos como privados."
  },
  {
    question: "¿Qué comando usas para ver el estado de tu repositorio local?",
    options: [
      "git check",
      "git status",
      "git info",
      "git show"
    ],
    correctAnswer: 1,
    explanation: "El comando 'git status' muestra el estado actual del repositorio, incluyendo archivos modificados, en staging o sin seguimiento."
  },
  {
    question: "¿Qué ventaja ofrece Git sobre guardar múltiples versiones de archivos manualmente?",
    options: [
      "Ocupa menos espacio en disco",
      "Permite ver exactamente qué cambió entre versiones y quién lo cambió",
      "Es más rápido de usar",
      "No hay ninguna ventaja real"
    ],
    correctAnswer: 1,
    explanation: "Git mantiene un historial detallado de todos los cambios, permitiendo ver qué se modificó, quién lo hizo y cuándo, además de poder revertir cambios fácilmente."
  }
];

export const GitSection = () => {
  return (
    <>
      <SectionCard title="Git y GitHub" icon={GitBranch}>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es el control de versiones?</h3>
            <p>
              Imagina que estás escribiendo un documento importante. Guardas versiones como:
            </p>
            <ul className="list-disc list-inside my-3 space-y-1 text-muted-foreground">
              <li>documento_final.docx</li>
              <li>documento_final_revisado.docx</li>
              <li>documento_final_definitivo.docx</li>
              <li>documento_final_definitivo_ahora_si.docx</li>
            </ul>
            <p>
              ¿Te resulta familiar? El <strong>control de versiones</strong> resuelve este problema de forma profesional,
              manteniendo un historial completo de cambios sin necesidad de duplicar archivos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es Git?</h3>
            <p>
              <strong>Git</strong> es un sistema de control de versiones que te permite:
            </p>
            <ul className="list-disc list-inside my-3 space-y-2">
              <li>Guardar "instantáneas" de tu proyecto en diferentes momentos</li>
              <li>Ver qué cambió exactamente entre versiones</li>
              <li>Trabajar en diferentes funcionalidades simultáneamente (ramas)</li>
              <li>Colaborar con otros desarrolladores sin conflictos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">¿Qué es GitHub?</h3>
            <p>
              <strong>GitHub</strong> es una plataforma web que funciona como un "Google Drive" para proyectos Git.
              Te permite:
            </p>
            <ul className="list-disc list-inside my-3 space-y-2">
              <li>Almacenar tus repositorios en la nube</li>
              <li>Colaborar con equipos de forma organizada</li>
              <li>Compartir código con la comunidad</li>
              <li>Mantener un respaldo de tu trabajo</li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Conceptos clave</h3>
            <div className="space-y-3">
              <div>
                <strong className="text-primary">Repositorio local:</strong> La carpeta de tu proyecto en tu computadora, 
                con su historial de cambios.
              </div>
              <div>
                <strong className="text-primary">Repositorio remoto:</strong> La copia de tu proyecto almacenada en GitHub 
                (en la nube).
              </div>
              <div>
                <strong className="text-primary">Commit:</strong> Una "instantánea" de tu proyecto en un momento específico, 
                con un mensaje que describe qué cambió.
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Comandos básicos de Git</h3>
            
            <h4 className="font-semibold mt-4 mb-2">1. Verificar que Git está instalado</h4>
            <CodeBlock code="git --version" />

            <h4 className="font-semibold mt-4 mb-2">2. Configurar tu identidad (primera vez)</h4>
            <p className="text-sm mb-2">Git necesita saber quién eres para registrar tus cambios:</p>
            <CodeBlock code={`git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@ejemplo.com"`} />

            <h4 className="font-semibold mt-4 mb-2">3. Ver el estado de tu repositorio</h4>
            <p className="text-sm mb-2">Muestra qué archivos han cambiado:</p>
            <CodeBlock code="git status" />

            <h4 className="font-semibold mt-4 mb-2">4. Preparar cambios para guardar (staging)</h4>
            <p className="text-sm mb-2">Añade archivos que quieres incluir en el próximo commit:</p>
            <CodeBlock code="git add nombre_archivo.py" />
            <p className="text-sm mb-2">O añade todos los archivos modificados:</p>
            <CodeBlock code="git add ." />

            <h4 className="font-semibold mt-4 mb-2">5. Guardar cambios (commit)</h4>
            <p className="text-sm mb-2">Crea una instantánea de los cambios preparados:</p>
            <CodeBlock code='git commit -m "Descripción clara de lo que cambió"' />

            <h4 className="font-semibold mt-4 mb-2">6. Enviar cambios a GitHub (push)</h4>
            <p className="text-sm mb-2">Sube tus commits al repositorio remoto:</p>
            <CodeBlock code="git push origin main" />

            <h4 className="font-semibold mt-4 mb-2">7. Traer cambios de GitHub (pull)</h4>
            <p className="text-sm mb-2">Descarga y combina cambios del repositorio remoto:</p>
            <CodeBlock code="git pull origin main" />
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <p className="text-sm">
              💡 <strong>Flujo típico:</strong> Modificas archivos → <code>git add .</code> → 
              <code>git commit -m "mensaje"</code> → <code>git push</code>
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
