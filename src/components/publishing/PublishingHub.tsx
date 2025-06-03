
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Youtube, 
  Upload, 
  Settings, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Globe,
  FileText,
  Video,
  Image
} from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: React.ElementType;
  connected: boolean;
  status: 'ready' | 'processing' | 'published' | 'error';
  description: string;
}

export const PublishingHub = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['youtube']);
  const [publishTitle, setPublishTitle] = useState("Calculus Fundamentals - Lesson 1");
  const [publishDescription, setPublishDescription] = useState("");
  const [tags, setTags] = useState("calculus, math, education");

  const platforms: Platform[] = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Youtube,
      connected: true,
      status: 'ready',
      description: 'Full video with chapters and description'
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      icon: Globe,
      connected: true,
      status: 'ready',
      description: 'Short preview clip with link'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Image,
      connected: false,
      status: 'ready',
      description: 'Square format reels'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Video,
      connected: false,
      status: 'ready',
      description: 'Vertical format clips'
    },
    {
      id: 'lms',
      name: 'LMS Export',
      icon: FileText,
      connected: true,
      status: 'ready',
      description: 'SCORM package for learning systems'
    }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const getStatusIcon = (status: Platform['status']) => {
    switch (status) {
      case 'ready': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'published': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'error': return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const handlePublish = () => {
    console.log("Publishing to:", selectedPlatforms);
    console.log("Content:", { publishTitle, publishDescription, tags });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Publishing Hub</span>
          <Upload className="h-5 w-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="platforms" className="space-y-4">
          <TabsList>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="platforms" className="space-y-4">
            <div className="space-y-3">
              {platforms.map((platform) => (
                <div key={platform.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Switch
                      checked={selectedPlatforms.includes(platform.id)}
                      onCheckedChange={() => togglePlatform(platform.id)}
                      disabled={!platform.connected}
                    />
                    <platform.icon className="h-5 w-5" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{platform.name}</span>
                        {platform.connected ? (
                          <Badge variant="secondary">Connected</Badge>
                        ) : (
                          <Badge variant="outline">Not Connected</Badge>
                        )}
                        {getStatusIcon(platform.status)}
                      </div>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  {!platform.connected && (
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={publishTitle}
                  onChange={(e) => setPublishTitle(e.target.value)}
                  placeholder="Enter video title..."
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={publishDescription}
                  onChange={(e) => setPublishDescription(e.target.value)}
                  placeholder="Describe your lesson content..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="math, calculus, education..."
                />
              </div>

              <div className="space-y-2">
                <Label>Thumbnail Options</Label>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-blue-500">
                      <span className="text-sm text-gray-500">Thumbnail {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-generate descriptions</Label>
                  <p className="text-sm text-gray-600">Use AI to create platform-specific descriptions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Schedule publishing</Label>
                  <p className="text-sm text-gray-600">Publish at optimal times for each platform</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Cross-platform promotion</Label>
                  <p className="text-sm text-gray-600">Share links between platforms</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Analytics tracking</Label>
                <Input placeholder="Google Analytics ID (optional)" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between pt-4 border-t">
          <div className="text-sm text-gray-600">
            Publishing to {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? 's' : ''}
          </div>
          <div className="space-x-2">
            <Button variant="outline">Save Draft</Button>
            <Button onClick={handlePublish}>
              <Upload className="h-4 w-4 mr-2" />
              Publish Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
