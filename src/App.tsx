
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgentforceAnalyzer from "./pages/AgentforceAnalyzer";
import { AnalyzerLayout } from "./components/AnalyzerLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Org Analysis Routes */}
          <Route path="/org-analyzer" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Organization Analyzer</h1>
                <p>Organization analysis content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          
          <Route path="/agentforce-analyzer" element={
            <AnalyzerLayout>
              <AgentforceAnalyzer />
            </AnalyzerLayout>
          } />
          
          {/* Error Analysis Routes */}
          <Route path="/error-analyzer" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Error Analyzer</h1>
                <p>Error analysis content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          
          {/* Migration Analysis Routes */}
          <Route path="/regression-summary" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Regression Summary</h1>
                <p>Regression summary content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          <Route path="/org-regression" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Org Regression</h1>
                <p>Org regression content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          <Route path="/cptsk-regression" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">CPTSK Regression</h1>
                <p>CPTSK regression content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          
          {/* Query Analysis Routes */}
          <Route path="/sdb-perfswat" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">SDB PerfSWAT</h1>
                <p>SDB PerfSWAT content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          <Route path="/org-top-sqls" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Org Top SQLs</h1>
                <p>Org Top SQLs content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          
          {/* Pod Analysis Routes */}
          <Route path="/pod-utilization" element={
            <AnalyzerLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Pod Utilization</h1>
                <p>Pod utilization content will appear here.</p>
              </div>
            </AnalyzerLayout>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
