import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users, 
  Clock, 
  Eye,
  Play,
  ThumbsUp,
  MessageSquare,
  Share2,
  Download,
  Award,
  AlertCircle,
  CheckCircle,
  Star,
  BarChart3,
  Activity,
  Zap,
  Brain,
  Filter,
  RefreshCw,
  Calendar,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

const PerformanceTracker = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30");
  const [selectedMetric, setSelectedMetric] = useState("all");

  // Sample performance data
  const contentMetrics = [
    {
      id: 1,
      title: "Calculus Derivatives Masterclass",
      type: "video",
      views: 15420,
      completions: 12380,
      avgRating: 4.8,
      engagement: 87,
      retention: 82,
      shares: 340,
      comments: 156,
      lastUpdated: "2024-01-15",
      performance: "excellent",
      trend: "up"
    },
    {
      id: 2,
      title: "Linear Algebra Fundamentals",
      type: "course",
      views: 8760,
      completions: 6420,
      avgRating: 4.5,
      engagement: 74,
      retention: 69,
      shares: 180,
      comments: 89,
      lastUpdated: "2024-01-12",
      performance: "good",
      trend: "stable"
    },
    {
      id: 3,
      title: "Physics Motion Quiz",
      type: "assessment",
      views: 5340,
      completions: 4890,
      avgRating: 4.2,
      engagement: 91,
      retention: 88,
      shares: 67,
      comments: 43,
      lastUpdated: "2024-01-10",
      performance: "good",
      trend: "up"
    }
  ];

  const performanceTimeline = [
    { date: '2024-01-01', views: 8500, engagement: 75, completion: 68, satisfaction: 4.2 },
    { date: '2024-01-03', views: 9200, engagement: 78, completion: 72, satisfaction: 4.3 },
    { date: '2024-01-05', views: 10100, engagement: 81, completion: 75, satisfaction: 4.4 },
    { date: '2024-01-07', views: 11300, engagement: 83, completion: 78, satisfaction: 4.5 },
    { date: '2024-01-09', views: 12800, engagement: 86, completion: 82, satisfaction: 4.6 },
    { date: '2024-01-11', views: 13400, engagement: 88, completion: 85, satisfaction: 4.7 },
    { date: '2024-01-13', views: 14900, engagement: 90, completion: 88, satisfaction: 4.8 },
    { date: '2024-01-15', views: 15420, engagement: 87, completion: 84, satisfaction: 4.8 },
  ];

  const audienceAnalytics = [
    { device: 'Desktop', users: 45, engagement: 88, completion: 85 },
    { device: 'Mobile', users: 35, engagement: 76, completion: 72 },
    { device: 'Tablet', users: 20, engagement: 82, completion: 78 },
  ];

  const learningOutcomes = [
    { outcome: 'Knowledge Retention', score: 85, benchmark: 75 },
    { outcome: 'Skill Application', score: 78, benchmark: 70 },
    { outcome: 'Problem Solving', score: 92, benchmark: 80 },
    { outcome: 'Critical Thinking', score: 88, benchmark: 75 },
    { outcome: 'Concept Understanding', score: 90, benchmark: 80 },
    { outcome: 'Practical Implementation', score: 82, benchmark: 70 },
  ];

  const competitiveAnalysis = [
    { platform: 'Your Content', engagement: 87, completion: 84, rating: 4.8 },
    { platform: 'Industry Average', engagement: 72, completion: 68, rating: 4.2 },
    { platform: 'Top Performers', engagement: 91, completion: 88, rating: 4.9 },
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'bg-green-100 text-green-700 border-green-200';
      case 'good': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'average': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'poor': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'course': return <Target className="h-4 w-4" />;
      case 'assessment': return <Award className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Desktop': return <Monitor className="h-4 w-4" />;
      case 'Mobile': return <Smartphone className="h-4 w-4" />;
      case 'Tablet': return <Smartphone className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Performance Tracker</h2>
          <p className="text-gray-600">Monitor and analyze the effectiveness of your educational content</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
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

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">29.5K</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5%
                </p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">84.2%</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +3.2%
                </p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Target className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +0.1
                </p>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement</p>
                <p className="text-2xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5.1%
                </p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
          <TabsTrigger value="competitive">Benchmarks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Performance Timeline
                </CardTitle>
                <CardDescription>Key metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={performanceTimeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Area yAxisId="left" type="monotone" dataKey="views" fill="#3b82f6" fillOpacity={0.1} stroke="#3b82f6" />
                    <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="completion" stroke="#f59e0b" strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  Engagement Metrics
                </CardTitle>
                <CardDescription>User interaction and satisfaction levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceTimeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="engagement" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="satisfaction" stackId="2" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Excellent Performance!</strong> Your content engagement is 15% above industry average.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Opportunity Identified:</strong> Mobile completion rates could be improved by 8%.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                Content Performance Analysis
              </CardTitle>
              <CardDescription>Detailed breakdown of individual content performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentMetrics.map((content) => (
                  <div key={content.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-full">
                          {getContentTypeIcon(content.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{content.title}</h4>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {content.views.toLocaleString()} views
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              {content.completions.toLocaleString()} completions
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {content.avgRating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(content.trend)}
                        <Badge className={getPerformanceColor(content.performance)}>
                          {content.performance}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Engagement</p>
                        <div className="flex items-center gap-2">
                          <Progress value={content.engagement} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{content.engagement}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Retention</p>
                        <div className="flex items-center gap-2">
                          <Progress value={content.retention} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{content.retention}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Shares</p>
                        <p className="text-sm font-medium">{content.shares}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Comments</p>
                        <p className="text-sm font-medium">{content.comments}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-3 w-3 mr-1" />
                        Share
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Device Analytics
                </CardTitle>
                <CardDescription>User behavior across different devices</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={audienceAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="device" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#3b82f6" name="Users %" />
                    <Bar dataKey="engagement" fill="#10b981" name="Engagement %" />
                    <Bar dataKey="completion" fill="#f59e0b" name="Completion %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-500" />
                  Audience Insights
                </CardTitle>
                <CardDescription>Detailed audience analytics and behavior patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {audienceAnalytics.map((device, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getDeviceIcon(device.device)}
                        <div>
                          <p className="font-medium text-sm">{device.device}</p>
                          <p className="text-xs text-gray-600">{device.users}% of users</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{device.engagement}% engaged</p>
                        <p className="text-xs text-gray-600">{device.completion}% completion</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">2.5min</div>
                      <div className="text-xs text-gray-600">Avg. Session</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">73%</div>
                      <div className="text-xs text-gray-600">Return Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                Learning Outcomes Assessment
              </CardTitle>
              <CardDescription>Measure the effectiveness of your educational content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={learningOutcomes}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="outcome" />
                      <PolarRadiusAxis domain={[0, 100]} />
                      <Radar name="Your Score" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                      <Radar name="Benchmark" dataKey="benchmark" stroke="#10b981" fill="transparent" strokeDasharray="5 5" />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Outcome Details</h4>
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{outcome.outcome}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{outcome.score}%</span>
                          {outcome.score > outcome.benchmark ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={outcome.score} className="flex-1 h-2" />
                        <span className="text-xs text-gray-500">vs {outcome.benchmark}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Competitive Benchmarking
              </CardTitle>
              <CardDescription>Compare your performance against industry standards</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={competitiveAnalysis} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="platform" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="engagement" fill="#3b82f6" name="Engagement %" />
                  <Bar dataKey="completion" fill="#10b981" name="Completion %" />
                  <Bar dataKey="rating" fill="#f59e0b" name="Rating (scaled)" />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">+15%</div>
                  <div className="text-sm text-gray-600">Above Industry Avg</div>
                  <div className="text-xs text-gray-500">Engagement Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+16%</div>
                  <div className="text-sm text-gray-600">Above Industry Avg</div>
                  <div className="text-xs text-gray-500">Completion Rate</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">4.8/5</div>
                  <div className="text-sm text-gray-600">Rating Score</div>
                  <div className="text-xs text-gray-500">Top 5% of content</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceTracker;