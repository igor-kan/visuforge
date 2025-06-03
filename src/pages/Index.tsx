
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Video, Globe, TestTube, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Lesson Composer",
      description: "Drag-and-drop storyboard editor with timeline view for creating engaging educational content"
    },
    {
      icon: Brain,
      title: "Manim Visual Generator",
      description: "Auto-generates mathematical animations, graphs, and visual proofs using AI"
    },
    {
      icon: Video,
      title: "AI Narration & Voice",
      description: "Multi-language voiceovers with natural timing and animated highlights"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Automatic subtitles and voiceover translation in multiple languages"
    },
    {
      icon: TestTube,
      title: "Interactive Assessments",
      description: "Generate worksheets, quizzes, and Kahoot-style tests automatically"
    },
    {
      icon: Upload,
      title: "One-click Publishing",
      description: "Export to YouTube, X, TikTok, LMS platforms, and more with auto-generated descriptions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AutoEduCraft</h1>
          </div>
          <nav className="flex space-x-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/templates" className="text-gray-600 hover:text-blue-600 transition-colors">
              Templates
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          From storyboard to screen—
          <span className="text-blue-600">AI-crafted lessons</span> that teach, test, and scale
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Create complete educational video lessons with Manim animations, AI narration, 
          interactive quizzes, and one-click publishing to all major platforms.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <Link to="/dashboard">Start Creating</Link>
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need to create world-class educational content
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to revolutionize education?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators creating engaging content with AI
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/dashboard">Start Your First Lesson</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6" />
                <span className="text-xl font-bold">AutoEduCraft</span>
              </div>
              <p className="text-gray-400">
                AI-powered educational content creation platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Community</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutoEduCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
