import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">
          Progreso del curso
        </span>
        <span className="text-sm text-muted-foreground">
          {current} de {total} secciones
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};
