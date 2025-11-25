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
    // Scroll to top when changing sections
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
            current={sections.indexOf(activeSection) + 1}
            total={sections.length}
          />
        </div>

        <div className="animate-in fade-in duration-300">{renderSection()}</div>

        {activeSection !== "final" && (
          <div className="mt-8 flex justify-between">
            {sections.indexOf(activeSection) > 0 && (
              <button
                onClick={() =>
                  handleSectionChange(
                    sections[sections.indexOf(activeSection) - 1]
                  )
                }
                className="text-primary hover:underline"
              >
                ← Sección anterior
              </button>
            )}
            {sections.indexOf(activeSection) < sections.length - 1 && (
              <button
                onClick={() =>
                  handleSectionChange(
                    sections[sections.indexOf(activeSection) + 1]
                  )
                }
                className="ml-auto text-primary hover:underline"
              >
                Siguiente sección →
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
