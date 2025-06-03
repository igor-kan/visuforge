
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Brain, 
  MessageSquare, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Target,
  Lightbulb,
  BookOpen,
  Zap,
  Eye,
  Settings
} from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type: 'text' | 'animation' | 'quiz' | 'visualization';
}

interface LearningGoal {
  id: string;
  title: string;
  progress: number;
  concepts: string[];
}

export const AITutor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI tutor. I can help you learn any topic through conversation, animations, and personalized explanations. What would you like to explore today?",
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [learningStyle, setLearningStyle] = useState("visual");
  const [difficultyLevel, setDifficultyLevel] = useState("intermediate");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const learningGoals: LearningGoal[] = [
    {
      id: '1',
      title: 'Linear Algebra Mastery',
      progress: 65,
      concepts: ['Vectors', 'Matrices', 'Eigenvalues']
    },
    {
      id: '2',
      title: 'Calculus Fundamentals',
      progress: 40,
      concepts: ['Limits', 'Derivatives', 'Integration']
    }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (input: string) => {
    const responses = [
      "That's a great question! Let me break this down visually for you...",
      "I understand you're asking about this concept. Here's how I'd explain it at your level...",
      "Perfect! This connects to what we discussed earlier. Let me show you the relationship...",
      "Excellent question! This is a fundamental concept. Would you like me to create an animation to illustrate this?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const startVoiceInput = () => {
    setIsListening(true);
    console.log("Starting voice input...");
    // Implement speech recognition here
  };

  const stopVoiceInput = () => {
    setIsListening(false);
    console.log("Stopping voice input...");
  };

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    console.log("Toggle speech:", !isSpeaking);
  };

  const generateVisualization = () => {
    const visualMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: "Here's a visual representation of the concept:",
      timestamp: new Date(),
      type: 'visualization'
    };
    setMessages(prev => [...prev, visualMessage]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-6 w-6 mr-2 text-blue-600" />
              TuringTutor - AI Learning Companion
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Learning Goals Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Learning Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {learningGoals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-sm">{goal.title}</h4>
                  <span className="text-xs text-gray-500">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {goal.concepts.map((concept) => (
                    <Badge key={concept} variant="outline" className="text-xs">
                      {concept}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              <Target className="h-4 w-4 mr-2" />
              Set New Goal
            </Button>
          </CardContent>
        </Card>

        {/* Main Chat Interface */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-5 w-5" />
                <span>Conversation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Select value={learningStyle} onValueChange={setLearningStyle}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual</SelectItem>
                    <SelectItem value="auditory">Auditory</SelectItem>
                    <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={difficultyLevel} onValueChange={setDifficultyLevel}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Messages */}
            <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 rounded-lg">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border shadow-sm'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.type === 'visualization' && (
                      <div className="mt-2 p-3 bg-gray-100 rounded border-2 border-dashed border-gray-300">
                        <div className="flex items-center justify-center text-gray-500">
                          <Eye className="h-8 w-8" />
                        </div>
                        <p className="text-xs text-center mt-2">Interactive Visualization</p>
                      </div>
                    )}
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Button variant="outline" size="sm" onClick={generateVisualization}>
                <Eye className="h-4 w-4 mr-2" />
                Show Visual
              </Button>
              <Button variant="outline" size="sm">
                <Lightbulb className="h-4 w-4 mr-2" />
                Explain Simply
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Give Example
              </Button>
              <Button variant="outline" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Quick Quiz
              </Button>
            </div>

            {/* Input Area */}
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="pr-12"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={isListening ? stopVoiceInput : startVoiceInput}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
              </div>
              <Button onClick={toggleSpeech} variant="outline">
                {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Button onClick={sendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
