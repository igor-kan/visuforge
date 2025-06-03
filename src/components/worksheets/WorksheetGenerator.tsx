
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Eye, 
  Wand2, 
  Plus, 
  Trash2,
  Calculator,
  BookOpen,
  CheckSquare
} from "lucide-react";

interface WorksheetSection {
  id: number;
  type: 'problems' | 'theory' | 'examples' | 'practice';
  title: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;
}

export const WorksheetGenerator = () => {
  const [worksheetTitle, setWorksheetTitle] = useState("Calculus Practice Worksheet");
  const [subject, setSubject] = useState("mathematics");
  const [gradeLevel, setGradeLevel] = useState("high-school");
  const [sections, setSections] = useState<WorksheetSection[]>([]);

  const [newSection, setNewSection] = useState<Partial<WorksheetSection>>({
    type: 'problems',
    title: '',
    content: '',
    difficulty: 'medium',
    estimatedTime: 10
  });

  const addSection = () => {
    if (newSection.title && newSection.content) {
      const section: WorksheetSection = {
        id: Date.now(),
        type: newSection.type as WorksheetSection['type'],
        title: newSection.title,
        content: newSection.content,
        difficulty: newSection.difficulty as WorksheetSection['difficulty'],
        estimatedTime: newSection.estimatedTime || 10
      };
      setSections([...sections, section]);
      setNewSection({
        type: 'problems',
        title: '',
        content: '',
        difficulty: 'medium',
        estimatedTime: 10
      });
    }
  };

  const removeSection = (id: number) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const generateWithAI = () => {
    console.log("Generating worksheet content with AI for:", { subject, gradeLevel, worksheetTitle });
    // This would call AI service to generate content
  };

  const totalTime = sections.reduce((sum, section) => sum + section.estimatedTime, 0);

  const getSectionIcon = (type: WorksheetSection['type']) => {
    switch (type) {
      case 'problems': return <Calculator className="h-4 w-4" />;
      case 'theory': return <BookOpen className="h-4 w-4" />;
      case 'examples': return <Eye className="h-4 w-4" />;
      case 'practice': return <CheckSquare className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: WorksheetSection['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Input
                value={worksheetTitle}
                onChange={(e) => setWorksheetTitle(e.target.value)}
                className="text-xl font-semibold border-none bg-transparent p-0 h-auto focus-visible:ring-0"
                placeholder="Enter worksheet title..."
              />
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>{sections.length} sections</span>
                <span>~{totalTime} minutes</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button size="sm" onClick={generateWithAI}>
                <Wand2 className="h-4 w-4 mr-2" />
                Generate with AI
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Worksheet Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Grade Level</Label>
              <Select value={gradeLevel} onValueChange={setGradeLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elementary">Elementary</SelectItem>
                  <SelectItem value="middle-school">Middle School</SelectItem>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="college">College</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Add Section</Label>
              <Select 
                value={newSection.type} 
                onValueChange={(value) => setNewSection({...newSection, type: value as WorksheetSection['type']})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="problems">Problem Set</SelectItem>
                  <SelectItem value="theory">Theory Review</SelectItem>
                  <SelectItem value="examples">Worked Examples</SelectItem>
                  <SelectItem value="practice">Practice Exercises</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Section Title</Label>
              <Input
                value={newSection.title || ''}
                onChange={(e) => setNewSection({...newSection, title: e.target.value})}
                placeholder="e.g., Derivative Problems"
              />
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea
                value={newSection.content || ''}
                onChange={(e) => setNewSection({...newSection, content: e.target.value})}
                placeholder="Describe the problems or content for this section..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label>Difficulty</Label>
                <Select 
                  value={newSection.difficulty} 
                  onValueChange={(value) => setNewSection({...newSection, difficulty: value as WorksheetSection['difficulty']})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Time (min)</Label>
                <Input
                  type="number"
                  value={newSection.estimatedTime}
                  onChange={(e) => setNewSection({...newSection, estimatedTime: parseInt(e.target.value) || 10})}
                  min="1"
                  max="60"
                />
              </div>
            </div>

            <Button onClick={addSection} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Section
            </Button>
          </CardContent>
        </Card>

        {/* Sections List */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Worksheet Sections ({sections.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <div key={section.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        {getSectionIcon(section.type)}
                        <span className="font-medium">{section.title}</span>
                        <Badge variant="outline">{section.type}</Badge>
                        <Badge className={getDifficultyColor(section.difficulty)}>
                          {section.difficulty}
                        </Badge>
                        <Badge variant="secondary">{section.estimatedTime}min</Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSection(section.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-700">{section.content}</p>
                  </div>
                ))}
                {sections.length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    No sections added yet. Add your first section to get started.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* AI Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium mb-1">Problem Set</div>
                  <div className="text-xs text-gray-600">10 practice problems with solutions</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium mb-1">Mixed Review</div>
                  <div className="text-xs text-gray-600">Theory + examples + practice</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium mb-1">Quiz Prep</div>
                  <div className="text-xs text-gray-600">Quick assessment questions</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium mb-1">Homework</div>
                  <div className="text-xs text-gray-600">Take-home assignment format</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
