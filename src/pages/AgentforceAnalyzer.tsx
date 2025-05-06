import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { Check, Clock, Database, Info, Settings, ArrowRight } from "lucide-react";

const AgentforceAnalyzer = () => {
  const [timeRange, setTimeRange] = useState("30");
  const [selectedTab, setSelectedTab] = useState("overview");

  // Sample data for charts
  const latencyData = [
    { name: "00:00", e2eLatency: 453, aiGateway: 256, plannerLatency: 197 },
    { name: "06:00", e2eLatency: 612, aiGateway: 342, plannerLatency: 270 },
    { name: "12:00", e2eLatency: 723, aiGateway: 423, plannerLatency: 300 },
    { name: "18:00", e2eLatency: 529, aiGateway: 312, plannerLatency: 217 },
    { name: "24:00", e2eLatency: 498, aiGateway: 278, plannerLatency: 220 },
  ];

  const serverUtilizationData = [
    { name: "00:00", cpu: 42, memory: 58 },
    { name: "06:00", cpu: 53, memory: 61 },
    { name: "12:00", cpu: 86, memory: 72 },
    { name: "18:00", cpu: 65, memory: 59 },
    { name: "24:00", cpu: 51, memory: 55 },
  ];

  const calloutData = [
    { name: "00:00", count: 126 },
    { name: "06:00", count: 245 },
    { name: "12:00", count: 378 },
    { name: "18:00", count: 256 },
    { name: "24:00", count: 189 },
  ];

  const errorData = [
    { name: "Exceptions", value: 23 },
    { name: "Gacks", value: 5 },
    { name: "Timeouts", value: 12 },
    { name: "Other", value: 7 },
  ];

  const execTimeData = [
    { name: "Action 1", time: 124 },
    { name: "Action 2", time: 253 },
    { name: "Action 3", time: 187 },
    { name: "Action 4", time: 309 },
    { name: "Action 5", time: 165 },
  ];

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AgentForce Issue Triaging</h1>
        <p className="text-muted-foreground">
          Performance metrics and insights for troubleshooting AgentForce runtime issues
        </p>
      </div>

      {/* Simplified Filters and Inputs */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Time Range</label>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="2025-05-06 08:00:00 - 2025-05-06 09:00:00" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="flex justify-end items-end">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-lg shadow-sm mb-6 border">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">AgentForce Analysis Results</h2>
          </div>
          <Button variant="outline">
            Download Report
          </Button>
        </div>
        
        <div className="p-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="server">Server Metrics</TabsTrigger>
              <TabsTrigger value="latency">Latency Metrics</TabsTrigger>
              <TabsTrigger value="callouts">Gateway & Callouts</TabsTrigger>
              <TabsTrigger value="execution">Execution Times</TabsTrigger>
              <TabsTrigger value="errors">Errors & Exceptions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Avg. E2E Latency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">563ms</div>
                    <p className="text-xs text-muted-foreground">+12% from previous period</p>
                    <Progress value={56} className="h-1 mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Server Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">67%</div>
                    <p className="text-xs text-muted-foreground">+5% from previous period</p>
                    <Progress value={67} className="h-1 mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Errors & Exceptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47</div>
                    <p className="text-xs text-muted-foreground">-3% from previous period</p>
                    <Progress value={47} className="h-1 mt-2" />
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Latency Trends</CardTitle>
                    <CardDescription>End-to-end response times over selected period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={latencyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="e2eLatency" stroke="#8884d8" activeDot={{ r: 8 }} name="E2E Latency" />
                          <Line type="monotone" dataKey="aiGateway" stroke="#82ca9d" name="AI Gateway" />
                          <Line type="monotone" dataKey="plannerLatency" stroke="#ffc658" name="Planner Latency" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Server Utilization</CardTitle>
                    <CardDescription>CPU and memory usage over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={serverUtilizationData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="cpu" stroke="#8884d8" activeDot={{ r: 8 }} name="CPU Usage %" />
                          <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Memory Usage %" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="server">
              <Card>
                <CardHeader>
                  <CardTitle>Server Utilization Metrics</CardTitle>
                  <CardDescription>CPU, memory and resource usage over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={serverUtilizationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="cpu" stroke="#8884d8" activeDot={{ r: 8 }} name="CPU Usage %" />
                        <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Memory Usage %" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="latency">
              <Card>
                <CardHeader>
                  <CardTitle>AgentForce Latency Metrics</CardTitle>
                  <CardDescription>End-to-end and component latency measurements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={latencyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="e2eLatency" stroke="#8884d8" activeDot={{ r: 8 }} name="E2E Latency (ms)" />
                        <Line type="monotone" dataKey="aiGateway" stroke="#82ca9d" name="AI Gateway (ms)" />
                        <Line type="monotone" dataKey="plannerLatency" stroke="#ffc658" name="Planner Latency (ms)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="callouts">
              <Card>
                <CardHeader>
                  <CardTitle>LLM Gateway Callouts</CardTitle>
                  <CardDescription>Number of callouts made from LLM Gateway</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={calloutData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" name="Callout Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="execution">
              <Card>
                <CardHeader>
                  <CardTitle>Planner Service Apex Execution Times</CardTitle>
                  <CardDescription>Execution time for various Apex-based actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={execTimeData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="time" fill="#82ca9d" name="Execution Time (ms)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="errors">
              <Card>
                <CardHeader>
                  <CardTitle>Runtime Exceptions and Gacks</CardTitle>
                  <CardDescription>Errors encountered during AgentForce runtime execution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={errorData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#ff8042" name="Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <Separator className="my-4" />
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Recent Exceptions</h3>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start p-3 rounded-md border">
                          <div className="mr-2 mt-0.5">
                            <Badge variant="destructive" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                              !
                            </Badge>
                          </div>
                          <div>
                            <p className="font-medium">Runtime Exception #{i}</p>
                            <p className="text-sm text-muted-foreground">Error occurred during AgentForce execution in class AgentForceController at line 127</p>
                            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                              <span>2025-05-06 08:34:12</span>
                              <span>•</span>
                              <span>00D300000000ZLA</span>
                              <span>•</span>
                              <Button variant="link" size="sm" className="h-auto p-0">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AgentforceAnalyzer;
