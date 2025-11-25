import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <Card className="p-6 bg-card">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">¡Quiz completado!</h3>
          <p className="text-4xl font-bold text-primary mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-muted-foreground mb-6">
            Has respondido correctamente {percentage.toFixed(0)}% de las preguntas
          </p>
          <Button onClick={handleReset}>Reintentar</Button>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswer !== null;

  return (
    <Card className="p-6 bg-card">
      <div className="mb-4">
        <span className="text-sm text-muted-foreground">
          Pregunta {currentQuestion + 1} de {questions.length}
        </span>
        <h3 className="text-lg font-semibold mt-2">{question.question}</h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswer;
          const isSelected = index === selectedAnswer;
          
          let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
          
          if (isAnswered) {
            if (isSelected && isCorrect) {
              buttonClass += " bg-success/10 border-success text-success-foreground hover:bg-success/20";
            } else if (isSelected && !isCorrect) {
              buttonClass += " bg-destructive/10 border-destructive text-destructive hover:bg-destructive/20";
            } else if (isCorrect) {
              buttonClass += " bg-success/10 border-success";
            }
          }

          return (
            <Button
              key={index}
              variant="outline"
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              <span className="flex items-center gap-2 flex-1">
                {option}
                {isAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 text-success ml-auto" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive ml-auto" />}
              </span>
            </Button>
          );
        })}
      </div>

      {isAnswered && question.explanation && (
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      {isAnswered && (
        <Button onClick={handleNext} className="w-full mt-4">
          {currentQuestion < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
        </Button>
      )}
    </Card>
  );
};
