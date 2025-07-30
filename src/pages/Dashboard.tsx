
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  Plus, 
  Search, 
  Filter,
  Clock,
  Users,
  TrendingUp,
  Play,
  Edit,
  Share2,
  Download,
  MoreHorizontal,
  Brain,
  MessageSquare,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'quiz' | 'worksheet' | 'tutorial';
  duration: string;
  views: number;
  status: 'draft' | 'published' | 'processing';
  createdAt: string;
  thumbnail: string;
}

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Calculus Fundamentals - Derivatives",
      description: "Introduction to derivatives with visual explanations",
      type: "lesson",
      duration: "12:34",
      views: 1247,
      status: "published",
      createdAt: "2024-01-15",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "2", 
      title: "Linear Algebra Quiz",
      description: "Test your knowledge of vectors and matrices",
      type: "quiz",
      duration: "15:00",
      views: 823,
      status: "draft",
      createdAt: "2024-01-12",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "3",
      title: "Physics Motion Worksheet",
      description: "Practice problems for kinematic equations",
      type: "worksheet",
      duration: "30:00",
      views: 456,
      status: "published",
      createdAt: "2024-01-10",
      thumbnail: "/placeholder.svg"
    }
  ];

  const stats = [
    { label: "Total Projects", value: "24", icon: BookOpen, change: "+12%" },
    { label: "Views This Month", value: "15.2K", icon: TrendingUp, change: "+23%" },
    { label: "Active Students", value: "1,247", icon: Users, change: "+8%" },
    { label: "Completion Rate", value: "87%", icon: Target, change: "+5%" }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
    }
  };

  const getTypeIcon = (type: Project['type']) => {
    switch (type) {
      case 'lesson': return <Video className="h-4 w-4" />;
      case 'quiz': return <Brain className="h-4 w-4" />;
      case 'worksheet': return <BookOpen className="h-4 w-4" />;
      case 'tutorial': return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AutoEduCraft</h1>
              <p className="text-gray-600">Create, teach, and scale your educational content</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/storyboard/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="tutor">AI Tutor</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Link to="/storyboard/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </Link>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 rounded-t-lg relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(project.type)}
                        <Badge variant="secondary" className="capitalize">
                          {project.type}
                        </Badge>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {project.views}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  TuringTutor - Your AI Learning Companion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Start Learning</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="What would you like to learn today?" />
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Mathematics</Badge>
                        <Badge variant="outline">Physics</Badge>
                        <Badge variant="outline">Programming</Badge>
                        <Badge variant="outline">Biology</Badge>
                      </div>
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Start Conversation
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Learning Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Learning Style</label>
                        <select className="w-full mt-1 p-2 border rounded">
                          <option>Visual</option>
                          <option>Auditory</option>
                          <option>Kinesthetic</option>
                          <option>Mixed</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Complexity Level</label>
                        <select className="w-full mt-1 p-2 border rounded">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert</option>
                        </select>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Zap className="h-4 w-4 mr-2" />
                        Update Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Analytics Dashboard
                  </CardTitle>
                  <CardDescription>
                    Comprehensive analytics and insights for your educational content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="performance">Performance</TabsTrigger>
                      <TabsTrigger value="visualization">Visualizations</TabsTrigger>
                      <TabsTrigger value="learning">Learning Paths</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Total Content</p>
                                <p className="text-2xl font-bold">24</p>
                              </div>
                              <TrendingUp className="h-6 w-6 text-green-500" />
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Active Learners</p>
                                <p className="text-2xl font-bold">1,247</p>
                              </div>
                              <Users className="h-6 w-6 text-blue-500" />
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Avg. Completion</p>
                                <p className="text-2xl font-bold">84%</p>
                              </div>
                              <Target className="h-6 w-6 text-purple-500" />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Content Performance</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {projects.slice(0, 3).map((project) => (
                                <div key={project.id} className="flex items-center justify-between p-2 border rounded">
                                  <div>
                                    <p className="font-medium text-sm">{project.title}</p>
                                    <p className="text-xs text-gray-600">{project.views} views</p>
                                  </div>
                                  <Badge className={getStatusColor(project.status)}>
                                    {project.status}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <Button variant="outline" className="w-full justify-start">
                                <BarChart3 className="h-4 w-4 mr-2" />
                                Create Visualization
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <Target className="h-4 w-4 mr-2" />
                                Generate Learning Path
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <TrendingUp className="h-4 w-4 mr-2" />
                                View Performance Report
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="performance" className="mt-6">
                      <p className="text-gray-600 mb-4">Advanced performance tracking and analytics</p>
                      <Button variant="outline">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Open Performance Tracker
                      </Button>
                    </TabsContent>

                    <TabsContent value="visualization" className="mt-6">
                      <p className="text-gray-600 mb-4">Create interactive charts and data visualizations</p>
                      <Button variant="outline">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Open Chart Builder
                      </Button>
                    </TabsContent>

                    <TabsContent value="learning" className="mt-6">
                      <p className="text-gray-600 mb-4">AI-powered learning path generation</p>
                      <Button variant="outline">
                        <Brain className="h-4 w-4 mr-2" />
                        Open Learning Path Generator
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
