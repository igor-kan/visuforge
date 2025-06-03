
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wand2, Eye, Save } from "lucide-react";

interface Scene {
  id: number;
  title: string;
  duration: number;
  startTime: number;
  content: string;
  animation: string;
  voiceNote: string;
}

interface SceneEditorProps {
  scene: Scene;
  onSceneUpdate: (scene: Scene) => void;
}

export const SceneEditor = ({ scene, onSceneUpdate }: SceneEditorProps) => {
  const [editedScene, setEditedScene] = useState(scene);

  const animationTypes = [
    "fade_in",
    "slide_in",
    "graph_animation",
    "step_by_step",
    "zoom_in",
    "transform",
    "equation_build",
    "vector_field"
  ];

  const handleSave = () => {
    onSceneUpdate(editedScene);
  };

  const handleGenerateAnimation = () => {
    console.log("Generating animation with AI for:", editedScene.content);
    // This would trigger AI generation of Manim code
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Scene Editor</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Scene Title */}
        <div className="space-y-2">
          <Label htmlFor="scene-title">Scene Title</Label>
          <Input
            id="scene-title"
            value={editedScene.title}
            onChange={(e) => setEditedScene({...editedScene, title: e.target.value})}
            placeholder="Enter scene title..."
          />
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label htmlFor="scene-duration">Duration (seconds)</Label>
          <Input
            id="scene-duration"
            type="number"
            value={editedScene.duration}
            onChange={(e) => setEditedScene({...editedScene, duration: parseInt(e.target.value) || 0})}
            min="1"
            max="300"
          />
        </div>

        {/* Content/Script */}
        <div className="space-y-2">
          <Label htmlFor="scene-content">Script / Narration</Label>
          <Textarea
            id="scene-content"
            value={editedScene.content}
            onChange={(e) => setEditedScene({...editedScene, content: e.target.value})}
            placeholder="Enter the narration script for this scene..."
            rows={4}
          />
        </div>

        {/* Animation Type */}
        <div className="space-y-2">
          <Label htmlFor="animation-type">Animation Type</Label>
          <Select 
            value={editedScene.animation} 
            onValueChange={(value) => setEditedScene({...editedScene, animation: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select animation style" />
            </SelectTrigger>
            <SelectContent>
              {animationTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Voice Notes */}
        <div className="space-y-2">
          <Label htmlFor="voice-notes">Voice Direction</Label>
          <Input
            id="voice-notes"
            value={editedScene.voiceNote}
            onChange={(e) => setEditedScene({...editedScene, voiceNote: e.target.value})}
            placeholder="e.g., 'Friendly tone', 'Emphasize key points'..."
          />
        </div>

        {/* AI Generation */}
        <div className="space-y-2">
          <Button 
            onClick={handleGenerateAnimation} 
            className="w-full"
            variant="outline"
          >
            <Wand2 className="h-4 w-4 mr-2" />
            Generate Manim Animation
          </Button>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Math</Badge>
            <Badge variant="secondary">Beginner</Badge>
            <Badge variant="outline">+ Add Tag</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
