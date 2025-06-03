
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Volume2, Play, Download, Globe, Mic } from "lucide-react";

export const VoiceControls = () => {
  const [selectedVoice, setSelectedVoice] = useState("aria");
  const [speed, setSpeed] = useState([1.0]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const voices = [
    { id: "aria", name: "Aria", description: "Natural, friendly" },
    { id: "roger", name: "Roger", description: "Professional, clear" },
    { id: "sarah", name: "Sarah", description: "Warm, educational" },
    { id: "brian", name: "Brian", description: "Energetic, engaging" }
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" }
  ];

  const handleGenerateVoice = () => {
    console.log("Generating voice with:", { selectedVoice, speed: speed[0], selectedLanguage });
  };

  const handlePreviewVoice = () => {
    console.log("Previewing voice...");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Voice & Audio</span>
          <Volume2 className="h-5 w-5" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Voice Selection */}
        <div className="space-y-2">
          <Label>Voice</Label>
          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger>
              <SelectValue placeholder="Select voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={voice.id} value={voice.id}>
                  <div>
                    <div className="font-medium">{voice.name}</div>
                    <div className="text-sm text-gray-500">{voice.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Selection */}
        <div className="space-y-2">
          <Label>Language</Label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>{lang.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Speed Control */}
        <div className="space-y-2">
          <Label>Speed: {speed[0].toFixed(1)}x</Label>
          <Slider
            value={speed}
            onValueChange={setSpeed}
            min={0.5}
            max={2.0}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="space-y-2">
          <Button onClick={handlePreviewVoice} variant="outline" className="w-full">
            <Play className="h-4 w-4 mr-2" />
            Preview Voice
          </Button>
          <Button onClick={handleGenerateVoice} className="w-full">
            <Mic className="h-4 w-4 mr-2" />
            Generate Narration
          </Button>
        </div>

        {/* Additional Options */}
        <div className="space-y-2">
          <Label>Additional Languages</Label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Spanish</Badge>
            <Badge variant="secondary">French</Badge>
            <Badge variant="outline">+ Add Language</Badge>
          </div>
        </div>

        {/* Export Options */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Export Audio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
