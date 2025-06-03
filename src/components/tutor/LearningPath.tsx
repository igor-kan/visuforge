
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  CheckCircle, 
  Clock, 
  Lock, 
  Play, 
  Brain,
  TrendingUp,
  Award,
  Calendar,
  Zap
} from "lucide-react";

interface LearningNode {
  id: string;
  title: string;
  description: string;
  type: 'concept' | 'practice' | 'test' | 'project';
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  progress: number;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  totalNodes: number;
  completedNodes: number;
  estimatedDuration: string;
  nodes: LearningNode[];
}

export const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState<string>("calculus");

  const learningPaths: Record<string, LearningPath> = {
    calculus: {
      id: "calculus",
      title: "Calculus Fundamentals",
      description: "Master the foundations of calculus with visual explanations",
      totalNodes: 12,
      completedNodes: 5,
      estimatedDuration: "6 weeks",
      nodes: [
        {
          id: "1",
          title: "Understanding Limits",
          description: "Intuitive introduction to limits and continuity",
          type: "concept",
          status: "completed",
          estimatedTime: "45 min",
          difficulty: "beginner",
          prerequisites: [],
          progress: 100
        },
        {
          id: "2",
          title: "Limit Laws and Calculations",
          description: "Learn to calculate limits using limit laws",
          type: "practice",
          status: "completed",
          estimatedTime: "1 hour",
          difficulty: "beginner",
          prerequisites: ["1"],
          progress: 100
        },
        {
          id: "3",
          title: "Introduction to Derivatives",
          description: "Visual understanding of derivatives as slopes",
          type: "concept",
          status: "in-progress",
          estimatedTime: "50 min",
          difficulty: "intermediate",
          prerequisites: ["1", "2"],
          progress: 60
        },
        {
          id: "4",
          title: "Derivative Rules",
          description: "Power rule, product rule, chain rule",
          type: "practice",
          status: "available",
          estimatedTime: "1.5 hours",
          difficulty: "intermediate",
          prerequisites: ["3"],
          progress: 0
        },
        {
          id: "5",
          title: "Applications of Derivatives",
          description: "Optimization and related rates problems",
          type: "project",
          status: "locked",
          estimatedTime: "2 hours",
          difficulty: "advanced",
          prerequisites: ["4"],
          progress: 0
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedPath];

  const getStatusIcon = (status: LearningNode['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <Play className="h-5 w-5 text-blue-500" />;
      case 'available': return <Target className="h-5 w-5 text-orange-500" />;
      case 'locked': return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getTypeColor = (type: LearningNode['type']) => {
    switch (type) {
      case 'concept': return 'bg-blue-100 text-blue-800';
      case 'practice': return 'bg-green-100 text-green-800';
      case 'test': return 'bg-purple-100 text-purple-800';
      case 'project': return 'bg-orange-100 text-orange-800';
    }
  };

  const getDifficultyColor = (difficulty: LearningNode['difficulty']) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Path Overview */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center">
                <Brain className="h-6 w-6 mr-2 text-blue-600" />
                {currentPath.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">{currentPath.description}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{currentPath.estimatedDuration}</span>
              </div>
              <Badge variant="outline">
                {currentPath.completedNodes}/{currentPath.totalNodes} completed
              </Badge>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-gray-600">
                {Math.round((currentPath.completedNodes / currentPath.totalNodes) * 100)}%
              </span>
            </div>
            <Progress value={(currentPath.completedNodes / currentPath.totalNodes) * 100} className="h-2" />
          </div>
        </CardHeader>
      </Card>

      {/* Learning Nodes */}
      <div className="space-y-4">
        {currentPath.nodes.map((node, index) => (
          <Card 
            key={node.id} 
            className={`transition-all ${
              node.status === 'locked' ? 'opacity-60' : 'hover:shadow-md'
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(node.status)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-lg">{node.title}</h3>
                      <Badge className={getTypeColor(node.type)}>
                        {node.type}
                      </Badge>
                      <Badge className={getDifficultyColor(node.difficulty)}>
                        {node.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-2">{node.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {node.estimatedTime}
                      </div>
                      {node.prerequisites.length > 0 && (
                        <div className="flex items-center">
                          <span>Prerequisites: {node.prerequisites.length}</span>
                        </div>
                      )}
                    </div>
                    
                    {node.status === 'in-progress' && (
                      <div className="mt-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium">Progress</span>
                          <span className="text-xs text-gray-600">{node.progress}%</span>
                        </div>
                        <Progress value={node.progress} className="h-1" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0 flex space-x-2">
                  {node.status === 'completed' && (
                    <Button variant="outline" size="sm">
                      <Award className="h-4 w-4 mr-2" />
                      Review
                    </Button>
                  )}
                  
                  {(node.status === 'available' || node.status === 'in-progress') && (
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      {node.status === 'in-progress' ? 'Continue' : 'Start'}
                    </Button>
                  )}
                  
                  {node.status === 'locked' && (
                    <Button variant="ghost" size="sm" disabled>
                      <Lock className="h-4 w-4 mr-2" />
                      Locked
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl font-bold">{currentPath.completedNodes}</div>
            <div className="text-sm text-gray-600">Concepts Mastered</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-gray-600">Average Score</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-gray-600">Study Streak</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
