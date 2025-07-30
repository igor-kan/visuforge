import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Brain, 
  Target, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  Circle,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Video,
  TestTube,
  Award,
  TrendingUp,
  Zap,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Share2,
  Download,
  Edit,
  Plus,
  Trash2,
  Move
} from "lucide-react";

const LearningPathGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pathConfig, setPathConfig] = useState({
    subject: "",
    level: "",
    duration: "",
    goals: "",
    learningStyle: "",
    prerequisites: ""
  });
  const [generatedPath, setGeneratedPath] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const subjects = [
    { id: "mathematics", name: "Mathematics", icon: "📊", topics: ["Algebra", "Calculus", "Statistics", "Geometry"] },
    { id: "physics", name: "Physics", icon: "⚛️", topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Quantum"] },
    { id: "chemistry", name: "Chemistry", icon: "🧪", topics: ["Organic", "Inorganic", "Physical", "Analytical"] },
    { id: "biology", name: "Biology", icon: "🧬", topics: ["Cell Biology", "Genetics", "Evolution", "Ecology"] },
    { id: "computer-science", name: "Computer Science", icon: "💻", topics: ["Programming", "Algorithms", "Data Structures", "AI/ML"] }
  ];

  const learningStyles = [
    { id: "visual", name: "Visual Learner", description: "Learn best through diagrams, charts, and visual aids" },
    { id: "auditory", name: "Auditory Learner", description: "Learn best through listening and verbal instruction" },
    { id: "kinesthetic", name: "Kinesthetic Learner", description: "Learn best through hands-on activities and practice" },
    { id: "reading", name: "Reading/Writing Learner", description: "Learn best through reading texts and writing notes" },
    { id: "mixed", name: "Mixed Learning Style", description: "Benefit from a combination of learning approaches" }
  ];

  const samplePath = {
    title: "Advanced Calculus Mastery Path",
    description: "A comprehensive journey through advanced calculus concepts",
    duration: "12 weeks",
    difficulty: "Advanced",
    totalLessons: 36,
    estimatedHours: 180,
    completionRate: 78,
    modules: [
      {
        id: 1,
        title: "Limits and Continuity",
        description: "Master the fundamental concepts of limits and continuity",
        duration: "2 weeks",
        lessons: 8,
        prerequisites: ["Basic Algebra", "Pre-Calculus"],
        learningObjectives: [
          "Understand the concept of limits",
          "Apply limit laws and theorems",
          "Analyze continuity of functions",
          "Solve real-world limit problems"
        ],
        content: [
          { type: "video", title: "Introduction to Limits", duration: "15 min", completed: true },
          { type: "reading", title: "Limit Laws and Properties", duration: "20 min", completed: true },
          { type: "practice", title: "Limit Calculations", duration: "30 min", completed: false },
          { type: "quiz", title: "Limits Assessment", duration: "25 min", completed: false }
        ],
        progress: 45
      },
      {
        id: 2,
        title: "Derivatives and Applications",
        description: "Explore derivatives and their real-world applications",
        duration: "3 weeks",
        lessons: 12,
        prerequisites: ["Limits and Continuity"],
        learningObjectives: [
          "Master derivative rules and techniques",
          "Apply derivatives to optimization problems",
          "Understand related rates",
          "Analyze function behavior using derivatives"
        ],
        content: [
          { type: "video", title: "Basic Derivative Rules", duration: "18 min", completed: false },
          { type: "interactive", title: "Derivative Calculator", duration: "25 min", completed: false },
          { type: "project", title: "Optimization Project", duration: "60 min", completed: false },
          { type: "assessment", title: "Derivatives Exam", duration: "45 min", completed: false }
        ],
        progress: 0
      },
      {
        id: 3,
        title: "Integration Techniques",
        description: "Master various integration methods and applications",
        duration: "3 weeks",
        lessons: 10,
        prerequisites: ["Derivatives and Applications"],
        learningObjectives: [
          "Apply fundamental integration techniques",
          "Solve definite and indefinite integrals",
          "Use integration for area and volume calculations",
          "Master integration by parts and substitution"
        ],
        content: [
          { type: "video", title: "Integration Fundamentals", duration: "22 min", completed: false },
          { type: "simulation", title: "Area Under Curves", duration: "30 min", completed: false },
          { type: "worksheet", title: "Integration Practice", duration: "40 min", completed: false },
          { type: "quiz", title: "Integration Quiz", duration: "35 min", completed: false }
        ],
        progress: 0
      },
      {
        id: 4,
        title: "Series and Sequences",
        description: "Understand infinite series, convergence, and applications",
        duration: "2 weeks",
        lessons: 6,
        prerequisites: ["Integration Techniques"],
        learningObjectives: [
          "Analyze convergence of infinite series",
          "Apply series tests and criteria",
          "Work with power series and Taylor series",
          "Solve problems involving series approximations"
        ],
        content: [
          { type: "video", title: "Introduction to Series", duration: "20 min", completed: false },
          { type: "interactive", title: "Convergence Tests", duration: "28 min", completed: false },
          { type: "lab", title: "Taylor Series Lab", duration: "50 min", completed: false },
          { type: "project", title: "Series Applications", duration: "45 min", completed: false }
        ],
        progress: 0
      }
    ],
    aiRecommendations: [
      {
        type: "study-schedule",
        title: "Optimal Study Schedule",
        description: "Based on your learning style and availability, we recommend 3-4 study sessions per week, 45-60 minutes each.",
        priority: "high"
      },
      {
        type: "prerequisite-review",
        title: "Review Basic Algebra",
        description: "Your assessment indicates some gaps in algebraic manipulation. Consider reviewing before starting limits.",
        priority: "medium"
      },
      {
        type: "learning-resource",
        title: "Visual Learning Tools",
        description: "As a visual learner, you'll benefit from graphing tools and visual demonstrations for calculus concepts.",
        priority: "medium"
      },
      {
        type: "peer-collaboration",
        title: "Study Group Opportunity",
        description: "Join our calculus study group that meets twice weekly for collaborative problem-solving.",
        priority: "low"
      }
    ],
    adaptiveFeatures: {
      difficultyAdjustment: true,
      paceCustomization: true,
      contentPersonalization: true,
      realTimeAssessment: true
    }
  };

  const generateLearningPath = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedPath(samplePath);
      setIsGenerating(false);
    }, 2000);
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "reading": return <BookOpen className="h-4 w-4" />;
      case "practice": return <Edit className="h-4 w-4" />;
      case "quiz": return <TestTube className="h-4 w-4" />;
      case "interactive": return <Zap className="h-4 w-4" />;
      case "project": return <Target className="h-4 w-4" />;
      case "assessment": return <Award className="h-4 w-4" />;
      case "simulation": return <Play className="h-4 w-4" />;
      case "worksheet": return <BookOpen className="h-4 w-4" />;
      case "lab": return <TestTube className="h-4 w-4" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Learning Path Generator</h2>
          <p className="text-gray-600">Create personalized learning journeys with AI-powered recommendations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {!generatedPath ? (
        /* Path Configuration */
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              Configure Your Learning Path
            </CardTitle>
            <CardDescription>
              Tell us about your learning goals and preferences to generate a personalized path
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject Area</Label>
                  <Select value={pathConfig.subject} onValueChange={(value) => setPathConfig({...pathConfig, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.icon} {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="level">Difficulty Level</Label>
                  <Select value={pathConfig.level} onValueChange={(value) => setPathConfig({...pathConfig, level: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">🟢 Beginner</SelectItem>
                      <SelectItem value="intermediate">🟡 Intermediate</SelectItem>
                      <SelectItem value="advanced">🔴 Advanced</SelectItem>
                      <SelectItem value="expert">⚫ Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Target Duration</Label>
                  <Select value={pathConfig.duration} onValueChange={(value) => setPathConfig({...pathConfig, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How long do you want to study?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4-weeks">4 weeks (Intensive)</SelectItem>
                      <SelectItem value="8-weeks">8 weeks (Moderate)</SelectItem>
                      <SelectItem value="12-weeks">12 weeks (Comprehensive)</SelectItem>
                      <SelectItem value="16-weeks">16 weeks (Extended)</SelectItem>
                      <SelectItem value="self-paced">Self-paced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="style">Learning Style</Label>
                  <Select value={pathConfig.learningStyle} onValueChange={(value) => setPathConfig({...pathConfig, learningStyle: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How do you learn best?" />
                    </SelectTrigger>
                    <SelectContent>
                      {learningStyles.map((style) => (
                        <SelectItem key={style.id} value={style.id}>
                          {style.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="goals">Learning Goals</Label>
                  <Textarea
                    id="goals"
                    placeholder="What specific skills or knowledge do you want to gain?"
                    value={pathConfig.goals}
                    onChange={(e) => setPathConfig({...pathConfig, goals: e.target.value})}
                    className="h-24"
                  />
                </div>

                <div>
                  <Label htmlFor="prerequisites">Prerequisites & Background</Label>
                  <Textarea
                    id="prerequisites"
                    placeholder="What relevant knowledge or experience do you already have?"
                    value={pathConfig.prerequisites}
                    onChange={(e) => setPathConfig({...pathConfig, prerequisites: e.target.value})}
                    className="h-24"
                  />
                </div>

                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    The more specific you are about your goals and background, the better our AI can tailor your learning path.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button 
                onClick={generateLearningPath} 
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    Generating Your Path...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Generate Learning Path
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Generated Learning Path */
        <div className="space-y-6">
          {/* Path Overview */}
          <Card className="border-blue-100">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-500" />
                    {generatedPath.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {generatedPath.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{generatedPath.duration}</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <BookOpen className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <p className="text-sm text-gray-600">Total Lessons</p>
                  <p className="font-semibold">{generatedPath.totalLessons}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-sm text-gray-600">Est. Hours</p>
                  <p className="font-semibold">{generatedPath.estimatedHours}</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Award className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="font-semibold">{generatedPath.completionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="modules">Learning Modules</TabsTrigger>
              <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
              <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="modules" className="space-y-4">
              <div className="space-y-4">
                {generatedPath.modules.map((module: any, index: number) => (
                  <Card key={module.id} className="border-blue-100">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                            {index + 1}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            <CardDescription className="mt-1">{module.description}</CardDescription>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {module.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {module.lessons} lessons
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            {module.progress}% complete
                          </Badge>
                          <Progress value={module.progress} className="w-24" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Prerequisites */}
                        {module.prerequisites.length > 0 && (
                          <div>
                            <h4 className="font-medium text-sm text-gray-700 mb-2">Prerequisites</h4>
                            <div className="flex flex-wrap gap-2">
                              {module.prerequisites.map((prereq: string, idx: number) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {prereq}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Learning Objectives */}
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2">Learning Objectives</h4>
                          <ul className="space-y-1">
                            {module.learningObjectives.map((objective: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {objective}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Content Items */}
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2">Content</h4>
                          <div className="space-y-2">
                            {module.content.map((item: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between p-2 border rounded-lg">
                                <div className="flex items-center gap-3">
                                  {getContentIcon(item.type)}
                                  <div>
                                    <p className="text-sm font-medium">{item.title}</p>
                                    <p className="text-xs text-gray-600">{item.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {item.completed ? (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <Circle className="h-4 w-4 text-gray-400" />
                                  )}
                                  <Button variant="ghost" size="sm">
                                    {item.completed ? "Review" : "Start"}
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    Personalized AI Recommendations
                  </CardTitle>
                  <CardDescription>
                    Smart suggestions to optimize your learning experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {generatedPath.aiRecommendations.map((recommendation: any, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                          <Badge className={getPriorityColor(recommendation.priority)}>
                            {recommendation.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{recommendation.description}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Apply
                          </Button>
                          <Button size="sm" variant="ghost">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Adaptive Features */}
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    Adaptive Learning Features
                  </CardTitle>
                  <CardDescription>
                    Your path automatically adjusts based on your progress and performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(generatedPath.adaptiveFeatures).map(([feature, enabled]) => (
                      <div key={feature} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm capitalize">
                            {feature.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-xs text-gray-600">
                            {feature === 'difficultyAdjustment' && 'Automatically adjusts difficulty based on performance'}
                            {feature === 'paceCustomization' && 'Adapts learning pace to your schedule'}
                            {feature === 'contentPersonalization' && 'Customizes content to your learning style'}
                            {feature === 'realTimeAssessment' && 'Provides immediate feedback and adjustments'}
                          </p>
                        </div>
                        <Badge variant={enabled ? "default" : "outline"}>
                          {enabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Learning Progress Overview
                  </CardTitle>
                  <CardDescription>
                    Track your advancement through the learning path
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Overall Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Overall Progress</h4>
                        <span className="text-sm text-gray-600">15% Complete</span>
                      </div>
                      <Progress value={15} className="h-3" />
                    </div>

                    {/* Module Progress */}
                    <div>
                      <h4 className="font-medium mb-4">Module Progress</h4>
                      <div className="space-y-3">
                        {generatedPath.modules.map((module: any, index: number) => (
                          <div key={module.id} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">{module.title}</span>
                                <span className="text-xs text-gray-600">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Study Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-gray-600">Hours Studied</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">8</div>
                        <div className="text-sm text-gray-600">Lessons Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">3</div>
                        <div className="text-sm text-gray-600">Quizzes Passed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default LearningPathGenerator;