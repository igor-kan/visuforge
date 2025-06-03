
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Play, Download } from "lucide-react";

interface Question {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
  explanation?: string;
}

export const QuizBuilder = () => {
  const [quizTitle, setQuizTitle] = useState("Untitled Quiz");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    points: 1
  });

  const addQuestion = () => {
    if (currentQuestion.question) {
      const newQuestion: Question = {
        id: Date.now(),
        type: currentQuestion.type as Question['type'],
        question: currentQuestion.question,
        options: currentQuestion.options?.filter(opt => opt.trim() !== ''),
        correctAnswer: currentQuestion.correctAnswer || 0,
        points: currentQuestion.points || 1,
        explanation: currentQuestion.explanation
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion({
        type: 'multiple-choice',
        question: '',
        options: ['', '', '', ''],
        points: 1
      });
    }
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestionOption = (index: number, value: string) => {
    const newOptions = [...(currentQuestion.options || ['', '', '', ''])];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <div className="space-y-6">
      {/* Quiz Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Input
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                className="text-xl font-semibold border-none bg-transparent p-0 h-auto focus-visible:ring-0"
                placeholder="Enter quiz title..."
              />
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>{questions.length} questions</span>
                <span>{totalPoints} points total</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Question Builder */}
        <Card>
          <CardHeader>
            <CardTitle>Add Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Question Type */}
            <div className="space-y-2">
              <Label>Question Type</Label>
              <Select 
                value={currentQuestion.type} 
                onValueChange={(value) => setCurrentQuestion({...currentQuestion, type: value as Question['type']})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                  <SelectItem value="true-false">True/False</SelectItem>
                  <SelectItem value="short-answer">Short Answer</SelectItem>
                  <SelectItem value="essay">Essay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <Label>Question</Label>
              <Textarea
                value={currentQuestion.question}
                onChange={(e) => setCurrentQuestion({...currentQuestion, question: e.target.value})}
                placeholder="Enter your question..."
                rows={3}
              />
            </div>

            {/* Multiple Choice Options */}
            {currentQuestion.type === 'multiple-choice' && (
              <div className="space-y-2">
                <Label>Answer Options</Label>
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={option}
                      onChange={(e) => updateQuestionOption(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                    />
                    <Button
                      variant={currentQuestion.correctAnswer === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentQuestion({...currentQuestion, correctAnswer: index})}
                    >
                      {currentQuestion.correctAnswer === index ? "Correct" : "Mark Correct"}
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* True/False */}
            {currentQuestion.type === 'true-false' && (
              <div className="space-y-2">
                <Label>Correct Answer</Label>
                <div className="flex space-x-2">
                  <Button
                    variant={currentQuestion.correctAnswer === 'true' ? "default" : "outline"}
                    onClick={() => setCurrentQuestion({...currentQuestion, correctAnswer: 'true'})}
                  >
                    True
                  </Button>
                  <Button
                    variant={currentQuestion.correctAnswer === 'false' ? "default" : "outline"}
                    onClick={() => setCurrentQuestion({...currentQuestion, correctAnswer: 'false'})}
                  >
                    False
                  </Button>
                </div>
              </div>
            )}

            {/* Points */}
            <div className="space-y-2">
              <Label>Points</Label>
              <Input
                type="number"
                value={currentQuestion.points}
                onChange={(e) => setCurrentQuestion({...currentQuestion, points: parseInt(e.target.value) || 1})}
                min="1"
                max="10"
              />
            </div>

            {/* Explanation */}
            <div className="space-y-2">
              <Label>Explanation (Optional)</Label>
              <Textarea
                value={currentQuestion.explanation || ''}
                onChange={(e) => setCurrentQuestion({...currentQuestion, explanation: e.target.value})}
                placeholder="Explain the correct answer..."
                rows={2}
              />
            </div>

            <Button onClick={addQuestion} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Question
            </Button>
          </CardContent>
        </Card>

        {/* Questions List */}
        <Card>
          <CardHeader>
            <CardTitle>Questions ({questions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions.map((question, index) => (
                <div key={question.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Q{index + 1}</span>
                      <Badge variant="outline">{question.type}</Badge>
                      <Badge variant="secondary">{question.points} pts</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeQuestion(question.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{question.question}</p>
                  {question.options && (
                    <div className="text-xs text-gray-500">
                      {question.options.length} options
                    </div>
                  )}
                </div>
              ))}
              {questions.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  No questions added yet. Create your first question to get started.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
