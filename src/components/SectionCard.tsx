import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export const SectionCard = ({ title, icon: Icon, children }: SectionCardProps) => {
  return (
    <Card className="p-6 md:p-8 bg-card shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="prose prose-sm max-w-none text-foreground">
        {children}
      </div>
    </Card>
  );
};
