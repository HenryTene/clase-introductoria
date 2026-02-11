import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
  checkedItems: string[];
  onToggle: (id: string) => void;
}

export const Checklist = ({ items, checkedItems, onToggle }: ChecklistProps) => {
  const progress = Math.round((checkedItems.length / items.length) * 100);

  return (
    <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
      <h3 className="text-lg font-semibold mb-4">Lista de verificación</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors">
            <Checkbox
              id={item.id}
              checked={checkedItems.includes(item.id)}
              onCheckedChange={() => onToggle(item.id)}
              className="mt-1"
            />
            <label
              htmlFor={item.id}
              className="text-sm cursor-pointer leading-relaxed"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Completado: {checkedItems.length} de {items.length}
          </p>
          <span className="text-sm font-mono text-primary">{progress}%</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};
