import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  Plus, 
  Save, 
  Share, 
  Settings, 
  Volume2, 
  Subtitles,
  Download,
  Clock,
  Edit3,
  Trash2,
  FileText,
  Upload,
  BarChart3
} from "lucide-react";
import { StoryboardTimeline } from "@/components/storyboard/StoryboardTimeline";
import { SceneEditor } from "@/components/storyboard/SceneEditor";
import { VoiceControls } from "@/components/storyboard/VoiceControls";
import { QuizBuilder } from "@/components/quiz/QuizBuilder";
import { PublishingHub } from "@/components/publishing/PublishingHub";
import { WorksheetGenerator } from "@/components/worksheets/WorksheetGenerator";

const StoryboardEditor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedScene, setSelectedScene] = useState(0);
  const [projectTitle, setProjectTitle] = useState("Untitled Lesson");
  const [activeTab, setActiveTab] = useState("editor");

  const scenes = [
    {
      id: 1,
      title: "Introduction",
      duration: 30,
      startTime: 0,
      content: "Welcome to today's lesson on calculus fundamentals...",
      animation: "fade_in",
      voiceNote: "Friendly, welcoming tone"
    },
    {
      id: 2,
      title: "Concept Overview",
      duration: 45,
      startTime: 30,
      content: "Let's explore the concept of derivatives...",
      animation: "graph_animation",
      voiceNote: "Clear, instructional"
    },
    {
      id: 3,
      title: "Example Problem",
      duration: 60,
      startTime: 75,
      content: "Now let's work through a practical example...",
      animation: "step_by_step",
      voiceNote: "Patient, encouraging"
    }
  ];

  const handleAddScene = () => {
    console.log("Adding new scene");
  };

  const handleSaveProject = () => {
    console.log("Saving project");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="text-xl font-semibold border-none bg-transparent p-0 h-auto focus-visible:ring-0"
              />
              <Badge variant="secondary">Draft</Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleSaveProject}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="editor">Storyboard</TabsTrigger>
            <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="publishing">Publishing</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="editor">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                {/* Preview Window */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Preview</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Subtitles className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-4">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🎬</div>
                        <p>Manim Animation Preview</p>
                        <p className="text-sm text-gray-400">Scene {selectedScene + 1}: {scenes[selectedScene]?.title}</p>
                      </div>
                    </div>
                    
                    {/* Playback Controls */}
                    <div className="flex items-center justify-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 2:15
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline */}
                <StoryboardTimeline 
                  scenes={scenes}
                  currentTime={currentTime}
                  onTimeChange={setCurrentTime}
                  onSceneSelect={setSelectedScene}
                  selectedScene={selectedScene}
                />
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Scene List */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Scenes</CardTitle>
                      <Button size="sm" onClick={handleAddScene}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {scenes.map((scene, index) => (
                      <div
                        key={scene.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedScene === index ? 'bg-blue-50 border-blue-200 border' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedScene(index)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{scene.title}</h4>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Edit3 className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{scene.content.substring(0, 50)}...</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{scene.duration}s</span>
                          <Badge variant="outline">{scene.animation}</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Scene Editor */}
                <SceneEditor 
                  scene={scenes[selectedScene]}
                  onSceneUpdate={(updatedScene) => {
                    console.log("Scene updated:", updatedScene);
                  }}
                />

                {/* Voice Controls */}
                <VoiceControls />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="worksheets">
            <WorksheetGenerator />
          </TabsContent>

          <TabsContent value="quizzes">
            <QuizBuilder />
          </TabsContent>

          <TabsContent value="publishing">
            <PublishingHub />
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Student Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">1,248</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">92%</div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">8.7</div>
                    <div className="text-sm text-gray-600">Avg Quiz Score</div>
                  </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                  <p>Detailed analytics will be available after publishing your lesson.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StoryboardEditor;
