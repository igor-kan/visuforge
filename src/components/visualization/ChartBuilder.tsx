import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
  Scatter,
  ComposedChart
} from 'recharts';
import { 
  BarChart3, 
  LineChart as LineChartIcon, 
  PieChart as PieChartIcon,
  TrendingUp,
  Zap,
  Download,
  Share2,
  Copy,
  Settings,
  Palette,
  Database,
  Upload,
  Play,
  Save,
  Code,
  Eye,
  Grid,
  Layers,
  Target,
  Sparkles,
  RefreshCw
} from "lucide-react";

const ChartBuilder = () => {
  const [selectedChartType, setSelectedChartType] = useState("line");
  const [chartData, setChartData] = useState([
    { name: 'Jan', value: 400, category: 'A' },
    { name: 'Feb', value: 300, category: 'B' },
    { name: 'Mar', value: 600, category: 'A' },
    { name: 'Apr', value: 800, category: 'C' },
    { name: 'May', value: 500, category: 'B' },
    { name: 'Jun', value: 700, category: 'A' },
  ]);
  const [chartConfig, setChartConfig] = useState({
    title: "Sample Chart",
    xAxisKey: "name",
    yAxisKey: "value",
    colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    animation: true
  });

  const chartTypes = [
    { id: "line", name: "Line Chart", icon: <LineChartIcon className="h-5 w-5" />, description: "Show trends over time" },
    { id: "bar", name: "Bar Chart", icon: <BarChart3 className="h-5 w-5" />, description: "Compare categories" },
    { id: "area", name: "Area Chart", icon: <TrendingUp className="h-5 w-5" />, description: "Show cumulative values" },
    { id: "pie", name: "Pie Chart", icon: <PieChartIcon className="h-5 w-5" />, description: "Show proportions" },
    { id: "scatter", name: "Scatter Plot", icon: <Target className="h-5 w-5" />, description: "Show correlations" },
    { id: "radar", name: "Radar Chart", icon: <Zap className="h-5 w-5" />, description: "Compare multiple metrics" },
    { id: "composed", name: "Composed Chart", icon: <Layers className="h-5 w-5" />, description: "Combine multiple charts" }
  ];

  const sampleDatasets = [
    {
      name: "Student Performance",
      data: [
        { subject: 'Math', score: 85, attendance: 95 },
        { subject: 'Science', score: 78, attendance: 88 },
        { subject: 'English', score: 92, attendance: 96 },
        { subject: 'History', score: 74, attendance: 82 },
        { subject: 'Art', score: 88, attendance: 90 }
      ]
    },
    {
      name: "Course Completion Rates",
      data: [
        { month: 'Jan', completions: 120, enrollments: 150 },
        { month: 'Feb', completions: 135, enrollments: 160 },
        { month: 'Mar', completions: 142, enrollments: 170 },
        { month: 'Apr', completions: 158, enrollments: 180 },
        { month: 'May', completions: 165, enrollments: 185 }
      ]
    },
    {
      name: "Learning Engagement",
      data: [
        { activity: 'Videos', engagement: 92 },
        { activity: 'Quizzes', engagement: 78 },
        { activity: 'Discussions', engagement: 65 },
        { activity: 'Assignments', engagement: 85 },
        { activity: 'Resources', engagement: 71 }
      ]
    }
  ];

  const colorPalettes = [
    { name: "Default", colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"] },
    { name: "Ocean", colors: ["#0891b2", "#06b6d4", "#67e8f9", "#a7f3d0", "#34d399"] },
    { name: "Sunset", colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#fef3c7"] },
    { name: "Forest", colors: ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#bbf7d0"] },
    { name: "Purple", colors: ["#7c3aed", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"] }
  ];

  const renderChart = () => {
    const commonProps = {
      data: chartData,
      width: "100%",
      height: 300
    };

    switch (selectedChartType) {
      case "line":
        return (
          <ResponsiveContainer {...commonProps}>
            <LineChart data={chartData}>
              {chartConfig.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={chartConfig.xAxisKey} />
              <YAxis />
              {chartConfig.showTooltip && <Tooltip />}
              <Line 
                type="monotone" 
                dataKey={chartConfig.yAxisKey} 
                stroke={chartConfig.colors[0]} 
                strokeWidth={2}
                animationDuration={chartConfig.animation ? 1000 : 0}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case "bar":
        return (
          <ResponsiveContainer {...commonProps}>
            <BarChart data={chartData}>
              {chartConfig.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={chartConfig.xAxisKey} />
              <YAxis />
              {chartConfig.showTooltip && <Tooltip />}
              <Bar 
                dataKey={chartConfig.yAxisKey} 
                fill={chartConfig.colors[0]}
                animationDuration={chartConfig.animation ? 1000 : 0}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "area":
        return (
          <ResponsiveContainer {...commonProps}>
            <AreaChart data={chartData}>
              {chartConfig.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={chartConfig.xAxisKey} />
              <YAxis />
              {chartConfig.showTooltip && <Tooltip />}
              <Area 
                type="monotone" 
                dataKey={chartConfig.yAxisKey} 
                stroke={chartConfig.colors[0]} 
                fill={chartConfig.colors[0]}
                fillOpacity={0.3}
                animationDuration={chartConfig.animation ? 1000 : 0}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer {...commonProps}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey={chartConfig.yAxisKey}
                label={({ name, value }) => `${name}: ${value}`}
                animationDuration={chartConfig.animation ? 1000 : 0}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartConfig.colors[index % chartConfig.colors.length]} />
                ))}
              </Pie>
              {chartConfig.showTooltip && <Tooltip />}
            </PieChart>
          </ResponsiveContainer>
        );
      
      case "scatter":
        return (
          <ResponsiveContainer {...commonProps}>
            <ScatterChart data={chartData}>
              {chartConfig.showGrid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey={chartConfig.xAxisKey} />
              <YAxis dataKey={chartConfig.yAxisKey} />
              {chartConfig.showTooltip && <Tooltip />}
              <Scatter dataKey={chartConfig.yAxisKey} fill={chartConfig.colors[0]} />
            </ScatterChart>
          </ResponsiveContainer>
        );
      
      case "radar":
        return (
          <ResponsiveContainer {...commonProps}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey={chartConfig.xAxisKey} />
              <PolarRadiusAxis />
              {chartConfig.showTooltip && <Tooltip />}
              <Radar 
                name="Data" 
                dataKey={chartConfig.yAxisKey} 
                stroke={chartConfig.colors[0]} 
                fill={chartConfig.colors[0]} 
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        );
      
      default:
        return (
          <ResponsiveContainer {...commonProps}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={chartConfig.xAxisKey} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={chartConfig.yAxisKey} stroke={chartConfig.colors[0]} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  const loadSampleData = (dataset: any) => {
    setChartData(dataset.data);
    setChartConfig({
      ...chartConfig,
      title: dataset.name,
      xAxisKey: Object.keys(dataset.data[0])[0],
      yAxisKey: Object.keys(dataset.data[0])[1]
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Visualization Builder</h2>
          <p className="text-gray-600">Create interactive charts and visualizations for your educational content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Data
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save Chart
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chart Type Selector */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid className="h-5 w-5 text-blue-500" />
                Chart Types
              </CardTitle>
              <CardDescription>Choose the best visualization for your data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {chartTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedChartType === type.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedChartType(type.id)}
                  >
                    {type.icon}
                    <div className="ml-2 text-left">
                      <div className="font-medium">{type.name}</div>
                      <div className="text-xs text-gray-500">{type.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Data */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-500" />
                Sample Data
              </CardTitle>
              <CardDescription>Quick start with educational datasets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {sampleDatasets.map((dataset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-sm"
                    onClick={() => loadSampleData(dataset)}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    {dataset.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-purple-500" />
                  {chartConfig.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardDescription>
                Interactive {chartTypes.find(t => t.id === selectedChartType)?.name} visualization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-lg p-4">
                {renderChart()}
              </div>
            </CardContent>
          </Card>

          {/* Data Editor */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                Data Editor
              </CardTitle>
              <CardDescription>Edit your chart data directly</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="table" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="table">Table View</TabsTrigger>
                  <TabsTrigger value="json">JSON View</TabsTrigger>
                </TabsList>
                <TabsContent value="table" className="space-y-4">
                  <ScrollArea className="h-48 w-full border rounded">
                    <div className="p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            {chartData.length > 0 && Object.keys(chartData[0]).map((key) => (
                              <th key={key} className="text-left p-2 font-medium">{key}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {chartData.map((row, index) => (
                            <tr key={index} className="border-b">
                              {Object.values(row).map((value, cellIndex) => (
                                <td key={cellIndex} className="p-2">{String(value)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ScrollArea>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Button size="sm" variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Import CSV
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="json" className="space-y-4">
                  <Textarea
                    value={JSON.stringify(chartData, null, 2)}
                    onChange={(e) => {
                      try {
                        setChartData(JSON.parse(e.target.value));
                      } catch (error) {
                        // Handle JSON parse error
                      }
                    }}
                    className="h-48 font-mono text-sm"
                    placeholder="Paste your JSON data here..."
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Panel */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-gray-500" />
                Configuration
              </CardTitle>
              <CardDescription>Customize your chart appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Chart Title</Label>
                <Input
                  id="title"
                  value={chartConfig.title}
                  onChange={(e) => setChartConfig({ ...chartConfig, title: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="xAxis">X-Axis Field</Label>
                <Select value={chartConfig.xAxisKey} onValueChange={(value) => setChartConfig({ ...chartConfig, xAxisKey: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {chartData.length > 0 && Object.keys(chartData[0]).map((key) => (
                      <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="yAxis">Y-Axis Field</Label>
                <Select value={chartConfig.yAxisKey} onValueChange={(value) => setChartConfig({ ...chartConfig, yAxisKey: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {chartData.length > 0 && Object.keys(chartData[0]).map((key) => (
                      <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Show Grid</Label>
                  <input
                    type="checkbox"
                    checked={chartConfig.showGrid}
                    onChange={(e) => setChartConfig({ ...chartConfig, showGrid: e.target.checked })}
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Show Tooltip</Label>
                  <input
                    type="checkbox"
                    checked={chartConfig.showTooltip}
                    onChange={(e) => setChartConfig({ ...chartConfig, showTooltip: e.target.checked })}
                    className="rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Animation</Label>
                  <input
                    type="checkbox"
                    checked={chartConfig.animation}
                    onChange={(e) => setChartConfig({ ...chartConfig, animation: e.target.checked })}
                    className="rounded"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-pink-500" />
                Color Palette
              </CardTitle>
              <CardDescription>Choose colors for your visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {colorPalettes.map((palette, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start p-3"
                    onClick={() => setChartConfig({ ...chartConfig, colors: palette.colors })}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {palette.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-sm">{palette.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-blue-500" />
                Export Options
              </CardTitle>
              <CardDescription>Share or download your visualization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download PNG
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download SVG
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Code className="h-4 w-4 mr-2" />
                Get Embed Code
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChartBuilder;