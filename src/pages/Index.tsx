
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Database, Settings, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold">Org Analyzer</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome to Org Analyzer</h2>
            <p className="text-slate-600">
              Comprehensive analytics and insights for your organization's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Database className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-lg mb-2" />
                <CardTitle>AgentForce Triage Insights</CardTitle>
                <CardDescription>
                  Analyze and troubleshoot AgentForce performance issues with detailed metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Access comprehensive performance metrics for AgentForce, including server utilization, 
                  latency metrics, gateway callouts, planner execution times, and runtime exceptions.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/agentforce-analyzer">
                  <Button className="w-full">
                    View AgentForce Insights
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-lg mb-2" />
                <CardTitle>Database Analysis</CardTitle>
                <CardDescription>
                  Monitor and analyze database performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Examine database performance, query execution times, and resource utilization 
                  to optimize your organization's data operations.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Database Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-slate-500">
            © 2025 Org Analyzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
