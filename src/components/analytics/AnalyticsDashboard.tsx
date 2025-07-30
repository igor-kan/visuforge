import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Clock, 
  Play, 
  BookOpen,
  Target,
  Award,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Download,
  Calendar,
  Filter,
  RefreshCw,
  BarChart3,
  Activity,
  Globe,
  Zap,
  Brain,
  Star
} from "lucide-react";

const AnalyticsDashboard = () => {
  // Sample analytics data
  const learningMetrics = [
    { date: '2024-01-01', views: 1200, completions: 850, engagement: 78, newStudents: 45 },
    { date: '2024-01-02', views: 1350, completions: 920, engagement: 82, newStudents: 52 },
    { date: '2024-01-03', views: 1180, completions: 790, engagement: 75, newStudents: 38 },
    { date: '2024-01-04', views: 1420, completions: 1050, engagement: 85, newStudents: 67 },
    { date: '2024-01-05', views: 1580, completions: 1180, engagement: 88, newStudents: 73 },
    { date: '2024-01-06', views: 1320, completions: 980, engagement: 81, newStudents: 58 },
    { date: '2024-01-07', views: 1650, completions: 1250, engagement: 90, newStudents: 82 },
  ];

  const contentPerformance = [
    { title: 'Calculus Derivatives', views: 12450, completions: 8920, rating: 4.8, engagement: 85 },
    { title: 'Linear Algebra Basics', views: 9870, completions: 7340, rating: 4.6, engagement: 78 },
    { title: 'Physics Motion', views: 8750, completions: 6420, rating: 4.5, engagement: 82 },
    { title: 'Chemistry Bonds', views: 7650, completions: 5230, rating: 4.3, engagement: 75 },
    { title: 'Biology Cells', views: 6890, completions: 4670, rating: 4.7, engagement: 88 },
  ];

  const audienceData = [
    { name: 'High School', value: 35, color: '#3b82f6' },
    { name: 'College', value: 45, color: '#10b981' },
    { name: 'Graduate', value: 15, color: '#f59e0b' },
    { name: 'Professional', value: 5, color: '#ef4444' },
  ];

  const engagementMetrics = [
    { category: 'Video Completion', score: 85, color: '#3b82f6' },
    { category: 'Quiz Participation', score: 78, color: '#10b981' },
    { category: 'Discussion Posts', score: 62, color: '#f59e0b' },
    { category: 'Resource Downloads', score: 91, color: '#8b5cf6' },
    { category: 'Peer Interactions', score: 74, color: '#ef4444' },
    { category: 'Assignment Completion', score: 88, color: '#06b6d4' },
  ];

  const topicTrends = [
    { topic: 'Mathematics', growth: 23, students: 5420, color: '#3b82f6' },
    { topic: 'Physics', growth: 18, students: 3280, color: '#10b981' },
    { topic: 'Chemistry', growth: 15, students: 2890, color: '#f59e0b' },
    { topic: 'Biology', growth: 12, students: 2340, color: '#8b5cf6' },
    { topic: 'Computer Science', growth: 35, students: 4120, color: '#ef4444' },
  ];

  const learningPathAnalytics = [
    { path: 'Beginner Math', enrolled: 1250, completed: 890, dropoffRate: 12, avgTime: 45 },
    { path: 'Advanced Physics', enrolled: 890, completed: 720, dropoffRate: 8, avgTime: 72 },
    { path: 'Intro to Chemistry', enrolled: 650, completed: 520, dropoffRate: 15, avgTime: 38 },
    { path: 'Biology Fundamentals', enrolled: 1100, completed: 850, dropoffRate: 10, avgTime: 52 },
  ];

  const realtimeData = [
    { metric: 'Active Users', value: 1247, change: '+12%', trend: 'up' },
    { metric: 'Current Sessions', value: 324, change: '+8%', trend: 'up' },
    { metric: 'Content Views', value: 2890, change: '+15%', trend: 'up' },
    { metric: 'Completion Rate', value: 78, change: '-2%', trend: 'down' },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="h-4 w-4 text-green-500" /> : 
      <TrendingDown className="h-4 w-4 text-red-500" />;
  };

  const getChangeColor = (change: string) => {
    return change.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Learning Analytics Dashboard</h2>
          <p className="text-gray-600">Comprehensive insights into your educational content performance</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {realtimeData.map((item, index) => (
          <Card key={index} className="border-blue-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">{item.metric}</CardTitle>
                {getTrendIcon(item.trend)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{item.value.toLocaleString()}</p>
                  <p className={`text-sm ${getChangeColor(item.change)}`}>{item.change}</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Activity className="h-4 w-4 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="learning">Learning Paths</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Learning Activity Trends
                </CardTitle>
                <CardDescription>Daily views, completions, and engagement rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} name="Views" />
                    <Line type="monotone" dataKey="completions" stroke="#10b981" strokeWidth={2} name="Completions" />
                    <Line type="monotone" dataKey="engagement" stroke="#f59e0b" strokeWidth={2} name="Engagement %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Student Growth
                </CardTitle>
                <CardDescription>New student registrations and growth patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={learningMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="newStudents" stroke="#10b981" fill="#dcfce7" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Top Performing Content
                </CardTitle>
                <CardDescription>Most viewed and highest-rated educational content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentPerformance.map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{content.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {content.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="h-3 w-3" />
                            {content.completions.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {content.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          {content.engagement}% engagement
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  Content Performance Metrics
                </CardTitle>
                <CardDescription>Detailed analytics for content effectiveness</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="views" name="Views" />
                    <YAxis dataKey="completions" name="Completions" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="rating" fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  Audience Demographics
                </CardTitle>
                <CardDescription>Student distribution by education level</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={audienceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Subject Area Growth
                </CardTitle>
                <CardDescription>Growth trends across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topicTrends.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{topic.topic}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{topic.students} students</span>
                          <Badge style={{ backgroundColor: topic.color }} className="text-white">
                            +{topic.growth}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={topic.growth} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Engagement Analytics
              </CardTitle>
              <CardDescription>Detailed breakdown of student engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={engagementMetrics}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="Engagement Score" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                Learning Path Analytics
              </CardTitle>
              <CardDescription>Performance metrics for structured learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningPathAnalytics.map((path, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{path.path}</h4>
                      <Badge variant="outline" className="text-xs">
                        {path.dropoffRate}% dropoff rate
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Enrolled</p>
                        <p className="font-medium">{path.enrolled}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Completed</p>
                        <p className="font-medium">{path.completed}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Completion Rate</p>
                        <p className="font-medium">{Math.round((path.completed / path.enrolled) * 100)}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Avg. Time</p>
                        <p className="font-medium">{path.avgTime} min</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Progress value={(path.completed / path.enrolled) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  Weekly Trends
                </CardTitle>
                <CardDescription>Learning activity patterns throughout the week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={learningMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#3b82f6" name="Views" />
                    <Bar dataKey="completions" fill="#10b981" name="Completions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Achievement Metrics
                </CardTitle>
                <CardDescription>Student achievements and milestone completions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Certificates Earned</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">1,247</p>
                      <p className="text-sm text-green-600">+23%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Course Completions</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">3,892</p>
                      <p className="text-sm text-green-600">+18%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Perfect Scores</p>
                      <p className="text-sm text-gray-600">This month</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">892</p>
                      <p className="text-sm text-green-600">+12%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;