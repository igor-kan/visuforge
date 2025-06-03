
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AITutor } from "@/components/tutor/AITutor";
import { LearningPath } from "@/components/tutor/LearningPath";

const AITutorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs defaultValue="chat" className="w-full">
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="chat">AI Tutor Chat</TabsTrigger>
              <TabsTrigger value="path">Learning Path</TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <TabsContent value="chat" className="mt-0">
          <AITutor />
        </TabsContent>
        
        <TabsContent value="path" className="mt-0">
          <LearningPath />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AITutorPage;
