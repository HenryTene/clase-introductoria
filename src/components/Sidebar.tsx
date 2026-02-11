import { 
  Home, 
  GitBranch, 
  Code2, 
  Terminal, 
  Package, 
  FolderGit2, 
  PlayCircle, 
  CheckSquare,
  Menu,
  X,
  Brain
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  completedSections: string[];
}

const sections = [
  { id: "welcome", label: "Bienvenida", icon: Home },
  { id: "git", label: "Git y GitHub", icon: GitBranch },
  { id: "vscode", label: "VS Code", icon: Code2 },
  { id: "python", label: "Python", icon: Terminal },
  { id: "venv", label: "Entornos Virtuales", icon: Package },
  { id: "clone", label: "Clonar Repositorio", icon: FolderGit2 },
  { id: "first-script", label: "Primer Script", icon: PlayCircle },
  { id: "final", label: "Checklist Final", icon: CheckSquare },
];

export const Sidebar = ({ activeSection, onSectionChange, completedSections }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const progress = Math.round((completedSections.length / sections.length) * 100);

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">ML con Python</h1>
            <p className="text-xs text-muted-foreground">Clase Introductoria</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isCompleted = completedSections.includes(section.id);

            return (
              <li key={section.id}>
                <button
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/30 shadow-glow"
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-4 w-4 flex-shrink-0", isCompleted && !isActive && "text-success")} />
                  <span className="flex-1 text-sm font-medium">
                    {index + 1}. {section.label}
                  </span>
                  {isCompleted && !isActive && (
                    <div className="h-2 w-2 rounded-full bg-success flex-shrink-0" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          Inteligencia Artificial y Machine Learning
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card border-border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-border flex flex-col transition-transform duration-300 z-40",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar spacer */}
      <div className="hidden md:block w-72 flex-shrink-0" />
    </>
  );
};
