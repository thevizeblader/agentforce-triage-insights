
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
import { 
  Check, 
  Clock, 
  Database, 
  Info, 
  Search, 
  ArrowRight, 
  AlertTriangle,
  ExternalLink,
  FileText,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const AgentforceAnalyzer = () => {
  const [timeRange, setTimeRange] = useState("30");
  const [selectedTab, setSelectedTab] = useState("overview");
  const [agentId, setAgentId] = useState("");

  // Sample data for server metrics chart
  const serverMetricsData = [
    { name: "endpoint1", count: 100, p95ResponseMs: 75, avgResponseMs: 65, p50ResponseMs: 45 },
    { name: "endpoint2", count: 95, p95ResponseMs: 82, avgResponseMs: 58, p50ResponseMs: 42 },
    { name: "endpoint3", count: 120, p95ResponseMs: 68, avgResponseMs: 54, p50ResponseMs: 39 },
    { name: "endpoint4", count: 105, p95ResponseMs: 95, avgResponseMs: 72, p50ResponseMs: 50 },
    { name: "endpoint5", count: 88, p95ResponseMs: 62, avgResponseMs: 48, p50ResponseMs: 35 },
  ];

  // Sample data for E2E CoPilot metrics
  const e2eCopilotData = [
    { actionName: "EmployeeCopilot__IdentifyRecordsByName", isSuccess: "true", count: 47, avgDurationMs: 32728.38, p50DurationMs: 28353.90, p90DurationMs: 55855.50, percentage: 15.31, totalCount: 307 },
    { actionName: "EmployeeCopilot__IdentifyRecordsByName", isSuccess: "true", count: 50, avgDurationMs: 19919.80, p50DurationMs: 18314.40, p90DurationMs: 26578.20, percentage: 16.29, totalCount: 307 },
    { actionName: "EmployeeCopilot__IdentifyRecordsByName.EmployeeCopilot__IdentifyRecordsByName", isSuccess: "true", count: 3, avgDurationMs: 24805.60, p50DurationMs: 24729.60, p90DurationMs: 25167.40, percentage: 0.98, totalCount: 307 },
    { actionName: "EmployeeCopilot__IdentifyRecordsByName.EmployeeCopilot__IdentifyRecordsByName.EmployeeCopilot__IdentifyRecordsByName.EmployeeCopilot__IdentifyRecordsByName", isSuccess: "true", count: 1, avgDurationMs: 20357.30, p50DurationMs: 20357.30, p90DurationMs: 20357.30, percentage: 0.33, totalCount: 307 },
    { actionName: "EmployeeCopilot__QueryRecords", isSuccess: "true", count: 6, avgDurationMs: 49370.50, p50DurationMs: 52221.50, p90DurationMs: 61549.60, percentage: 1.95, totalCount: 307 }
  ];

  // Sample data for Einstein-ai-gateway request duration
  const aiGatewayData = [
    { 
      clientFeatureId: "EinsteinSalesCoachAgent", 
      falcon_instance: "perf2-cwws02", 
      coreFeatureId: "com.fs.einstein.b2b.copilot.00D63000000Q24VEAS", 
      path: "/v1/chat/completions", 
      count: 16973, 
      medianDuration: 193, 
      p75Duration: 186.87, 
      p95Duration: 237.93, 
      count_sampled: 71, 
      dcNodeTraceId: 16973, 
      dcNodeRequestId: 16973 
    },
    { 
      clientFeatureId: "EinsteinSalesCoachAgent", 
      falcon_instance: "perf2-cwws02", 
      coreFeatureId: "com.fs.einstein.b2b.copilot.00D63000000Q24VEAS", 
      path: "/v1/chat/completions", 
      count: 16426, 
      medianDuration: 1508, 
      p75Duration: 2541.89, 
      p95Duration: 5617.58, 
      count_sampled: 16426, 
      dcNodeTraceId: 16426, 
      dcNodeRequestId: 16426 
    }
  ];

  // Sample data for callouts from LLM Gateway
  const calloutData = [
    { feature: "Agentforce Sales Coach", path: "/ai-metadata/v1/metadata/org-settings/search", group: "llm.d360.metadata", errors: 0.00, count: 2209.00, p50: 38.00, p75: 48.00, p95: 83.00 },
    { feature: "Agentforce Sales Coach", path: "/v1/chat/completions", group: "HOSTED.llm.openai.chatCompletion", errors: 0.00, count: 2182.00, p50: 8396.00, p75: 10450.00, p95: 15577.00 },
    { feature: "Agentforce Sales Coach", path: "/v5.0/EinsteinBT-OA/prediction?modelCanonicalName=EinsteinSMToxicity", group: "llm.generation.safety", errors: 0.00, count: 2186.00, p50: 45.00, p75: 47.00, p95: 51.00 },
    { feature: "CopilotForDigitalChannels", path: "/ai-metadata/v1/metadata/org-settings/search", group: "llm.d360.metadata", errors: 0.00, count: 91688.00, p50: 23.00, p75: 38.00, p95: 69.00 },
    { feature: "CopilotForDigitalChannels", path: "/auth/api/v1.0/c2/d360/token", group: "llm.d360.auth.service", errors: 95766.00, count: 0.00, p50: 12.00, p75: 17.00, p95: 34.00 }
  ];

  // Sample data for bot to planner latency
  const plannerLatencyData = [
    { status: -1, count: 132.00, p50DurationMs: 120027.00, p95DurationMs: 120119.70, p99DurationMs: 121212.70, maxDurationMs: 123498.00 },
    { status: 200, count: 74813.00, p50DurationMs: 13130.64, p95DurationMs: 42918.76, p99DurationMs: 95095.12, maxDurationMs: 182096.00 },
    { status: 500, count: 108.00, p50DurationMs: 7603.50, p95DurationMs: 12224.10, p99DurationMs: 12825.13, maxDurationMs: 13449.00 }
  ];

  // Sample data for apex exec times
  const apexExecData = [
    { count: 30655.00, p50ApexExecTime: 218.88 }
  ];

  // Sample data for bot worker/engine errors
  const errorData = [
    { normalizedMessage: "<error> unhandled exception caught - returning error response type=NotFoundException error=Session not found: X", count: 7022.00 },
    { normalizedMessage: "error_event=Api:Exception isExpected=false", count: 7022.00 },
    { normalizedMessage: "<sse.event.send> error sending event - eventSink is already closed! : X sse_event_name=STREAM_CHUNK_MESSAGE sse__data={", count: 2653.00 }
  ];

  // Sample trace data
  const traceData = {
    steps: [
      { timestamp: "2025-05-12 09:23:12", component: "BOT_WORKER", operation: "Session Initialization", durationMs: 45 },
      { timestamp: "2025-05-12 09:23:12", component: "PLANNER", operation: "Plan Creation", durationMs: 1508 },
      { timestamp: "2025-05-12 09:23:14", component: "LLM_GATEWAY", operation: "/v1/chat/completions", durationMs: 8396 },
      { timestamp: "2025-05-12 09:23:22", component: "APEX_EXECUTOR", operation: "QueryRecords", durationMs: 218 },
      { timestamp: "2025-05-12 09:23:23", component: "DATA_FETCHER", operation: "Entity Lookup", durationMs: 156 },
      { timestamp: "2025-05-12 09:23:23", component: "LLM_GATEWAY", operation: "/v1/chat/completions", durationMs: 7845 },
    ]
  };

  const handleGenerateTrace = () => {
    // In a real implementation, this would make an API call with the agentId
    console.log("Generating trace for agent ID:", agentId);
    // For now, we'll just show the sample trace data that's already defined
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AgentForce Performance Analysis</h1>
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
              <TabsTrigger value="orgdb">Org DB Insights</TabsTrigger>
              <TabsTrigger value="trace">Deep-Dive Trace</TabsTrigger>
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
                    <CardTitle className="text-sm font-medium">Database Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">67%</div>
                    <p className="text-xs text-muted-foreground">+5% from previous period</p>
                    <Progress value={67} className="h-1 mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">App Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47%</div>
                    <p className="text-xs text-muted-foreground">-3% from previous period</p>
                    <Progress value={47} className="h-1 mt-2" />
                  </CardContent>
                </Card>
              </div>
              
              {/* Key Takeaways Section */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-blue-500" />
                    Key Takeaways
                  </CardTitle>
                  <CardDescription>Critical insights from your performance analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-amber-800">Performance Bottleneck Identified</h3>
                        <p className="text-sm text-amber-700 mt-1">
                          <strong>SalesCoachAgent</strong> is identified as the slowest agent type with an average response time of <strong>8396ms</strong>. 
                          The biggest contributor is database time caused by <strong>SOQL_EXECUTE_BEGIN</strong> wait event.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <p className="text-sm">Database CPU utilization is at <strong>40%</strong> during the analyzed period, which is leading to slow performance.</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <p className="text-sm"><strong>EmployeeCopilot__IdentifyRecordsByName</strong> action has a significantly higher p90 duration (55855.50ms) compared to other actions.</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <p className="text-sm">LLM Gateway callouts to <strong>/v1/chat/completions</strong> have consistently high latency (avg. 8396ms), impacting overall response times.</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <p className="text-sm">A significant number of <strong>Session not found</strong> errors (7022) indicate potential issues with session management.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Link to="/org-analyzer">
                      <Button variant="outline" className="text-blue-600">
                        For more detailed insight, run Org Analyzer report <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Latency Trends</CardTitle>
                    <CardDescription>End-to-end response times over selected period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={serverMetricsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#1E40AF" activeDot={{ r: 8 }} name="Count" />
                          <Line type="monotone" dataKey="p95ResponseMs" stroke="#4ADE80" name="p95 Response (ms)" />
                          <Line type="monotone" dataKey="avgResponseMs" stroke="#FB7185" name="Avg Response (ms)" />
                          <Line type="monotone" dataKey="p50ResponseMs" stroke="#A78BFA" name="p50 Response (ms)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Resource Utilization</CardTitle>
                    <CardDescription>CPU and memory usage over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={serverMetricsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} name="CPU Usage %" />
                          <Line type="monotone" dataKey="p50ResponseMs" stroke="#82ca9d" name="Memory Usage %" />
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
                  <CardTitle>Agentforce ASA Server Metrics</CardTitle>
                  <CardDescription>Server performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={serverMetricsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="count" stroke="#1E40AF" activeDot={{ r: 8 }} name="Count" />
                        <Line type="monotone" dataKey="p95ResponseMs" stroke="#4ADE80" name="p95 Response (ms)" />
                        <Line type="monotone" dataKey="avgResponseMs" stroke="#FB7185" name="Avg Response (ms)" />
                        <Line type="monotone" dataKey="p50ResponseMs" stroke="#A78BFA" name="p50 Response (ms)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="latency">
              <Card>
                <CardHeader>
                  <CardTitle>AgentForce CoPilot - E2E CTIIY</CardTitle>
                  <CardDescription>End-to-end latency measurements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>actionName</TableHead>
                          <TableHead>isSuccess</TableHead>
                          <TableHead>count</TableHead>
                          <TableHead>Avg durationMs</TableHead>
                          <TableHead>P50 durationMs</TableHead>
                          <TableHead>P90 durationMs</TableHead>
                          <TableHead>percentage</TableHead>
                          <TableHead>totalCount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {e2eCopilotData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium max-w-[200px] truncate">{row.actionName}</TableCell>
                            <TableCell>{row.isSuccess}</TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.avgDurationMs}</TableCell>
                            <TableCell>{row.p50DurationMs}</TableCell>
                            <TableCell>{row.p90DurationMs}</TableCell>
                            <TableCell>{row.percentage}</TableCell>
                            <TableCell>{row.totalCount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Bot Service to Planner latency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>status</TableHead>
                          <TableHead>count</TableHead>
                          <TableHead>p50(durationMs)</TableHead>
                          <TableHead>p95(durationMs)</TableHead>
                          <TableHead>p99(durationMs)</TableHead>
                          <TableHead>max(durationMs)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {plannerLatencyData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.p50DurationMs}</TableCell>
                            <TableCell>{row.p95DurationMs}</TableCell>
                            <TableCell>{row.p99DurationMs}</TableCell>
                            <TableCell>{row.maxDurationMs}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="callouts">
              <Card>
                <CardHeader>
                  <CardTitle>Einstein-ai-gateway request duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>mdc.clientFeatureId</TableHead>
                          <TableHead>falcon_instance</TableHead>
                          <TableHead>mdc.coreFeatureId</TableHead>
                          <TableHead>path</TableHead>
                          <TableHead>count</TableHead>
                          <TableHead>median(duration)</TableHead>
                          <TableHead>p75(duration)</TableHead>
                          <TableHead>p95(duration)</TableHead>
                          <TableHead>count_sampled</TableHead>
                          <TableHead>dc(mdc.traceId)</TableHead>
                          <TableHead>dc(mdc.requestId)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aiGatewayData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{row.clientFeatureId}</TableCell>
                            <TableCell>{row.falcon_instance}</TableCell>
                            <TableCell className="max-w-[150px] truncate">{row.coreFeatureId}</TableCell>
                            <TableCell>{row.path}</TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.medianDuration}</TableCell>
                            <TableCell>{row.p75Duration}</TableCell>
                            <TableCell>{row.p95Duration}</TableCell>
                            <TableCell>{row.count_sampled}</TableCell>
                            <TableCell>{row.dcNodeTraceId}</TableCell>
                            <TableCell>{row.dcNodeRequestId}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Callouts from LLMGW</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>feature</TableHead>
                          <TableHead>path</TableHead>
                          <TableHead>group</TableHead>
                          <TableHead>errors</TableHead>
                          <TableHead>count</TableHead>
                          <TableHead>p50</TableHead>
                          <TableHead>p75</TableHead>
                          <TableHead>p95</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {calloutData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{row.feature}</TableCell>
                            <TableCell className="max-w-[200px] truncate">{row.path}</TableCell>
                            <TableCell>{row.group}</TableCell>
                            <TableCell>{row.errors}</TableCell>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.p50}</TableCell>
                            <TableCell>{row.p75}</TableCell>
                            <TableCell>{row.p95}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="execution">
              <Card>
                <CardHeader>
                  <CardTitle>Apex Exec times - ASA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>count</TableHead>
                          <TableHead>p50(apexExecTime)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {apexExecData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell>{row.count}</TableCell>
                            <TableCell>{row.p50ApexExecTime}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="errors">
              <Card>
                <CardHeader>
                  <CardTitle>Bot Worker/Engine Errors by Distinct Error Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative overflow-x-auto">
                    <div className="mb-4 flex items-center">
                      <Search className="w-4 h-4 mr-2 text-muted-foreground" />
                      <Input placeholder="Search..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>normalized_message</TableHead>
                          <TableHead>count</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {errorData.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="max-w-[500px] break-words font-mono text-xs">{row.normalizedMessage}</TableCell>
                            <TableCell>{row.count}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
            
            {/* New Tab: Org DB Insights */}
            <TabsContent value="orgdb">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-purple-500" />
                    Org DB Insights
                  </CardTitle>
                  <CardDescription>Database performance summary from Org Analyzer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 border rounded-md">
                      <h3 className="font-semibold mb-2">Database Performance</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">CPU Usage</span>
                          <span className="font-medium">38%</span>
                        </div>
                        <Progress value={38} className="h-1.5" />
                        
                        <div className="flex justify-between mt-3">
                          <span className="text-sm text-muted-foreground">IO Throughput</span>
                          <span className="font-medium">126 MB/s</span>
                        </div>
                        <Progress value={62} className="h-1.5" />
                        
                        <div className="flex justify-between mt-3">
                          <span className="text-sm text-muted-foreground">Query Execution Time</span>
                          <span className="font-medium">218ms (avg)</span>
                        </div>
                        <Progress value={45} className="h-1.5" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <h3 className="font-semibold mb-2">Top Wait Events</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-sm">SOQL_EXECUTE_BEGIN</span>
                          </div>
                          <span className="text-sm font-medium">42%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-amber-500 mr-2"></div>
                            <span className="text-sm">DB_CPU</span>
                          </div>
                          <span className="text-sm font-medium">28%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">IO_READ</span>
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-sm">LOG_FILE_SYNC</span>
                          </div>
                          <span className="text-sm font-medium">9%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-2">
                    <Link to="/org-analyzer">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        View Full Org Analyzer <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* New Tab: Deep-Dive Trace Analysis */}
            <TabsContent value="trace">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-indigo-500" />
                    Deep-Dive Trace Analysis
                  </CardTitle>
                  <CardDescription>Generate detailed execution path for specific agent ID</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-4 mb-6">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Agent ID</label>
                      <Input 
                        type="text" 
                        placeholder="Enter agent ID (e.g., 0Xx7100000CmsXYZAZ)" 
                        value={agentId} 
                        onChange={(e) => setAgentId(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleGenerateTrace}>
                      Generate Trace
                    </Button>
                  </div>
                  
                  {agentId && (
                    <>
                      <h3 className="text-sm font-semibold mb-3">Execution Trace for Agent: {agentId}</h3>
                      <div className="relative overflow-x-auto border rounded-md">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Timestamp</TableHead>
                              <TableHead>Component</TableHead>
                              <TableHead>Operation</TableHead>
                              <TableHead>Duration (ms)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {traceData.steps.map((step, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-mono text-xs">{step.timestamp}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="font-mono">
                                    {step.component}
                                  </Badge>
                                </TableCell>
                                <TableCell>{step.operation}</TableCell>
                                <TableCell>
                                  <Badge className={step.durationMs > 1000 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
                                    {step.durationMs}ms
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div className="mt-4 p-4 bg-slate-50 rounded-md border">
                        <div className="flex items-start">
                          <FileText className="h-4 w-4 text-slate-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium">Analysis</h4>
                            <p className="text-sm text-slate-600 mt-1">
                              Two LLM Gateway calls are contributing to 84% of the total execution time. 
                              The calls to <code className="px-1 py-0.5 bg-slate-100 rounded text-xs">/v1/chat/completions</code> are 
                              taking significantly longer than expected. Consider optimizing prompt length or 
                              implementing caching strategies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
