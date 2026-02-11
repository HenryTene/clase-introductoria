import { SectionCard } from "@/components/SectionCard";
import { Checklist } from "@/components/Checklist";
import { CheckSquare } from "lucide-react";

const checklistItems = [
  { id: "git-installed", label: "He verificado que Git está instalado y configurado (git --version)" },
  { id: "github-account", label: "Tengo una cuenta de GitHub creada" },
  { id: "git-config", label: "He configurado mi nombre y correo en Git (git config --global)" },
  { id: "vscode-installed", label: "He instalado VS Code" },
  { id: "python-extension", label: "He instalado la extensión de Python en VS Code" },
  { id: "python-installed", label: "He verificado que Python 3.8+ está instalado (python --version)" },
  { id: "uv-installed", label: "He instalado uv y verificado con (uv --version)" },
  { id: "uv-project", label: "Sé cómo crear un proyecto con uv (uv init)" },
  { id: "uv-add", label: "Sé cómo agregar dependencias con uv (uv add)" },
  { id: "repo-cloned", label: "He clonado (o sé cómo clonar) el repositorio del curso" },
  { id: "deps-installed", label: "He instalado las dependencias del curso (uv sync)" },
  { id: "first-script", label: "He ejecutado exitosamente mi primer script de Python (uv run python hola_ml.py)" },
  { id: "vscode-setup", label: "He configurado VS Code para usar el intérprete del entorno virtual" },
  { id: "git-basics", label: "Entiendo los comandos básicos de Git (status, add, commit, push, pull)" },
];

interface FinalChecklistSectionProps {
  checkedItems: string[];
  onToggle: (id: string) => void;
}

export const FinalChecklistSection = ({ checkedItems, onToggle }: FinalChecklistSectionProps) => {
  const completionPercentage = Math.round((checkedItems.length / checklistItems.length) * 100);

  return (
    <SectionCard title="Checklist Final y Próximos Pasos" icon={CheckSquare}>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">¡Casi listo para empezar con Machine Learning!</h3>
          <p>
            Esta es tu lista de verificación final. Asegúrate de haber completado todos los pasos antes de 
            continuar con las siguientes clases del curso.
          </p>
        </div>

        {completionPercentage === 100 && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-success">🎉 ¡Felicitaciones!</h3>
            <p className="text-sm">
              Has completado todos los requisitos de la clase introductoria. Estás completamente preparado 
              para comenzar a aprender Machine Learning con Python. ¡Excelente trabajo!
            </p>
          </div>
        )}

        <Checklist 
          items={checklistItems}
          checkedItems={checkedItems}
          onToggle={onToggle}
        />

        <div>
          <h3 className="text-xl font-semibold mb-3">Tarea para la próxima clase</h3>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h4 className="font-semibold mb-3">Tu primera contribución al repositorio</h4>
            <p className="text-sm mb-4">
              Practica el flujo de trabajo completo de Git haciendo un pequeño cambio:
            </p>
            <ol className="text-sm space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">1.</span>
                <div>
                  <strong>Modifica tu script:</strong>
                  <p className="text-muted-foreground mt-1">
                    Abre <code>hola_ml.py</code> y cambia el mensaje de bienvenida por uno personalizado.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">2.</span>
                <div>
                  <strong>Guarda y verifica el estado:</strong>
                  <pre className="bg-code text-code-foreground p-2 rounded text-xs mt-2">git status</pre>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">3.</span>
                <div>
                  <strong>Prepara el cambio:</strong>
                  <pre className="bg-code text-code-foreground p-2 rounded text-xs mt-2">git add hola_ml.py</pre>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">4.</span>
                <div>
                  <strong>Haz un commit:</strong>
                  <pre className="bg-code text-code-foreground p-2 rounded text-xs mt-2">git commit -m "Personalizo mensaje de bienvenida"</pre>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary flex-shrink-0">5.</span>
                <div>
                  <strong>Sube los cambios:</strong>
                  <pre className="bg-code text-code-foreground p-2 rounded text-xs mt-2">git push origin main</pre>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Recursos adicionales</h3>
          <div className="space-y-3">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Documentación oficial</h4>
              <ul className="text-sm space-y-1">
                <li>• <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de uv</a></li>
                <li>• <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de Python</a></li>
                <li>• <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de Git</a></li>
                <li>• <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de VS Code</a></li>
                <li>• <a href="https://numpy.org/doc/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de NumPy</a></li>
                <li>• <a href="https://pandas.pydata.org/docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentación de Pandas</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-3">¿Qué viene ahora?</h3>
          <p className="text-sm mb-3">En las próximas clases del curso, comenzarás a trabajar con:</p>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span><strong>Fundamentos de NumPy y Pandas:</strong> Manipulación y análisis de datos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span><strong>Visualización de datos:</strong> Matplotlib, Seaborn</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span><strong>Introducción a Machine Learning:</strong> Conceptos y algoritmos básicos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span><strong>Scikit-learn:</strong> Tu primera librería de ML</span>
            </li>
          </ul>
        </div>

        <div className="text-center py-6">
          <p className="text-lg font-semibold mb-2">¡Nos vemos en la próxima clase! 🚀</p>
          <p className="text-sm text-muted-foreground">
            Si tienes dudas sobre esta clase introductoria, no dudes en consultar con el instructor.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};
