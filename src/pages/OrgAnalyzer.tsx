import React, { useState } from "react";
import AgentforceAnalyzer from "./AgentforceAnalyzer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const OrgAnalyzer = () => {
  const [activeTab, setActiveTab] = useState("details");
  return <div className="flex flex-col gap-6 p-6">
      {/* Organization Analyzer Header */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Org Analyzer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Org Details</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Org ID:</span> ORG-12345</p>
              <p><span className="font-medium">Name:</span> Acme Corporation</p>
              <p><span className="font-medium">Instance:</span> NA99</p>
              <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Resource Summary</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">CPU Usage:</span> 45%</p>
              <p><span className="font-medium">Memory:</span> 3.2GB / 8GB</p>
              <p><span className="font-medium">Storage:</span> 128GB / 500GB</p>
              <p><span className="font-medium">API Calls:</span> 28,453 / day</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Health Status</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Overall:</span> <span className="text-green-600 font-medium">Healthy</span></p>
              <p><span className="font-medium">Last Check:</span> 5 minutes ago</p>
              <p><span className="font-medium">Incidents:</span> 0 active</p>
              <p><span className="font-medium">Uptime:</span> 99.98%</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analysis Tabs Section */}
      <section className="bg-white rounded-lg shadow-sm border">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b">
            <TabsList className="h-12 px-4 w-full justify-start">
              <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                Org Details
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                Insights
              </TabsTrigger>
              <TabsTrigger value="agentforce" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                AgentForce Insights
              </TabsTrigger>
              <TabsTrigger value="sqls" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                Top SQLs
              </TabsTrigger>
              <TabsTrigger value="platform" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                Platform SQLs
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Org Details Tab */}
          <TabsContent value="details" className="p-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Org Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Name:</span>
                      <span>NA</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Account Name:</span>
                      <span>NA</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Pod:</span>
                      <span>USA346</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Partition:</span>
                      <span>NA</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Size by DB CPU usage:</span>
                      <span>NA</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Nodes:</span>
                      <span>Single Node Org</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Timeflies in past 10 days:</span>
                      <span>0</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">Total DB CPU:</span>
                      <span>8 ms</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-between py-2 border-b">
                      <span className="font-medium">App Info:</span>
                      <span>NA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-12 w-12 mb-4"></div>
                    <p>Insights Loading...</p>
                    <p className="text-sm text-muted-foreground mt-2">10% DB CPU Time of Org total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AgentForce Insights Tab */}
          <TabsContent value="agentforce" className="p-0">
            <AgentforceAnalyzer embeddedView={true} />
          </TabsContent>

          {/* Top SQLs Tab */}
          <TabsContent value="sqls" className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Top SQLs sorted by DB CPU</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="min-h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">No data available</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platform SQLs Tab */}
          <TabsContent value="platform" className="p-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Platform SQLs sorted by DB CPU</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="min-h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">No data available</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>;
};
export default OrgAnalyzer;