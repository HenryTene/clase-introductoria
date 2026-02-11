import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ProgressBar } from "@/components/ProgressBar";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { GitSection } from "@/components/sections/GitSection";
import { VSCodeSection } from "@/components/sections/VSCodeSection";
import { PythonSection } from "@/components/sections/PythonSection";
import { VenvSection } from "@/components/sections/VenvSection";
import { CloneSection } from "@/components/sections/CloneSection";
import { FirstScriptSection } from "@/components/sections/FirstScriptSection";
import { FinalChecklistSection } from "@/components/sections/FinalChecklistSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const sections = [
    "welcome",
    "git",
    "vscode",
    "python",
    "venv",
    "clone",
    "first-script",
    "final",
  ];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (!completedSections.includes(activeSection)) {
      setCompletedSections([...completedSections, activeSection]);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChecklistToggle = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case "welcome":
        return <WelcomeSection />;
      case "git":
        return <GitSection />;
      case "vscode":
        return <VSCodeSection />;
      case "python":
        return <PythonSection />;
      case "venv":
        return <VenvSection />;
      case "clone":
        return <CloneSection />;
      case "first-script":
        return <FirstScriptSection />;
      case "final":
        return (
          <FinalChecklistSection
            checkedItems={checkedItems}
            onToggle={handleChecklistToggle}
          />
        );
      default:
        return <WelcomeSection />;
    }
  };

  const currentIndex = sections.indexOf(activeSection);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        completedSections={completedSections}
      />

      <main className="flex-1 p-6 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <ProgressBar
            current={currentIndex + 1}
            total={sections.length}
          />
        </div>

        <div className="animate-slide-up">{renderSection()}</div>

        {activeSection !== "final" && (
          <div className="mt-8 flex justify-between">
            {currentIndex > 0 && (
              <Button
                variant="ghost"
                onClick={() => handleSectionChange(sections[currentIndex - 1])}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Sección anterior
              </Button>
            )}
            {currentIndex < sections.length - 1 && (
              <Button
                onClick={() => handleSectionChange(sections[currentIndex + 1])}
                className="ml-auto bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
              >
                Siguiente sección
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
