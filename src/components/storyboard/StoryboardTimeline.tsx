
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface Scene {
  id: number;
  title: string;
  duration: number;
  startTime: number;
  content: string;
  animation: string;
  voiceNote: string;
}

interface StoryboardTimelineProps {
  scenes: Scene[];
  currentTime: number;
  onTimeChange: (time: number) => void;
  onSceneSelect: (sceneIndex: number) => void;
  selectedScene: number;
}

export const StoryboardTimeline = ({ 
  scenes, 
  currentTime, 
  onTimeChange, 
  onSceneSelect, 
  selectedScene 
}: StoryboardTimelineProps) => {
  const totalDuration = scenes.reduce((total, scene) => total + scene.duration, 0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Timeline</span>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Time Slider */}
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              onValueChange={([value]) => onTimeChange(value)}
              max={totalDuration}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Scene Blocks */}
          <div className="relative h-16 bg-gray-100 rounded-lg overflow-hidden">
            {scenes.map((scene, index) => {
              const leftPercent = (scene.startTime / totalDuration) * 100;
              const widthPercent = (scene.duration / totalDuration) * 100;
              const isSelected = selectedScene === index;
              
              return (
                <div
                  key={scene.id}
                  className={`absolute top-2 bottom-2 rounded cursor-pointer transition-all ${
                    isSelected ? 'bg-blue-500 ring-2 ring-blue-300' : 'bg-blue-400 hover:bg-blue-500'
                  }`}
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                  }}
                  onClick={() => onSceneSelect(index)}
                >
                  <div className="p-2 h-full flex flex-col justify-center">
                    <div className="text-white text-xs font-medium truncate">
                      {scene.title}
                    </div>
                    <div className="text-white text-xs opacity-75">
                      {scene.duration}s
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Current Time Indicator */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
              style={{
                left: `${(currentTime / totalDuration) * 100}%`,
              }}
            />
          </div>

          {/* Scene Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            {scenes.map((scene, index) => (
              <div
                key={scene.id}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  selectedScene === index ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => onSceneSelect(index)}
              >
                <div className="font-medium">{scene.title}</div>
                <div className="text-gray-500">
                  {formatTime(scene.startTime)} - {formatTime(scene.startTime + scene.duration)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
